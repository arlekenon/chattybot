const axios = require('axios');
const dotenv = require("dotenv");
dotenv.config();
//const {addvOptions} = require('../poptions')

const chatslastcont = {}
async function getAnswer (chatId, content, ctx)  {

    const openai = axios.create({
        baseURL: "https://api.openai.com/v1/",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        },
    });

    const data = {
        model: "gpt-3.5-turbo",
        messages: [{
            role: "user",
            content: content
        }],
    }

    try {
        const response = await openai.post("/chat/completions", data)
        console.log(response.data.choices[0].message.content);
        const content = response.data.choices[0].message.content
        chatslastcont[chatId] = response.data.choices[0].message.content
        return (content);
    } catch {
        console.log(error);
    }

}

module.exports = {getAnswer, chatslastcont}

