require('dotenv').config();
const { TwitterApi, ETwitterStreamEvent } = require('twitter-api-v2')

const apiKey = process.env.API_KEY
const apiSecret = process.env.API_KEY_SECRET
const bearerToken = process.env.BEARER_TOKEN

const consumerClient = new TwitterApi(bearerToken)

const createsStreamRule = async (keyword, lang, tag=undefined) => {
    const rules = await consumerClient.v2.updateStreamRules({
        add: [
            { value: `${keyword} lang:${lang}`, tag: tag }
        ]
    })
    return rules
}

const deleteStreamRule = async (keyword) => {
    const rules = await consumerClient.v2.updateStreamRules({
        delete: [
            { value: keyword }
        ]
    })
    return rules
}

const getStreamRules = async () => {
    return await consumerClient.v2.streamRules()
}

const startStream = async (rules) => {
    const stream = await consumerClient.v2.searchStream({
        "tweet.fields": [
            "id",
            "text",
            "created_at",
            "lang",
            "author_id",
            "public_metrics",
            "source"
        ],
    })

    stream.autoReconnect = true
    stream.on(ETwitterStreamEvent.ConnectionError, (err) => console.log(`Connection error: ${err}`))

    stream.on(ETwitterStreamEvent.Data, data => {
        // add logic for each case
        console.log(data)
        // data.matching_rules.forEach(rule => console.log(rule))
    })

    return stream
}

module.exports = { createsStreamRule, deleteStreamRule, getStreamRules, startStream }
