import * as banana from "@banana-dev/banana-dev";

// Enter your Banana API keys in .env.local
const apiKey = process.env.BANANA_API_KEY
const modelKey = process.env.BANANA_MODEL_KEY

export default async function (req, res) {
    console.log(1)
    const modelParameters = {
        "prompt": req.query.prompt
    }
    console.log(modelParameters);
    const output = await banana.run(apiKey, modelKey, modelParameters);
    console.log(2);
    console.log(output)
    res.status(200).json(output);
}