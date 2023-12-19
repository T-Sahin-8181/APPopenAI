import  express, { response }  from "express";
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("der server läuft, is running", PORT);
});

// Server zur statischen dateien, und schickt json dateien
app.use(express.static("OPENFOLDER"));
app.use(express.json());

// environment variables
import dotenv from "dotenv";
dotenv.config();





// setup Open AI

//import { Configuration, OpenAIApi } from "openai";
//const configuration = new Configuration({
	apiKey: process.env.API_KEY,
//});
//const openai = new OpenAIApi(configuration);










// handle POST request
app.post("/completion", async (req, res) => {
	if (!req.body.message) {
		return res
			.status(400)
			.send({ error: "Error: Empty message" });
	}

	console.log("prompt:", req.body.message, "\n");

	try {
		const response = await openai.createCompletion({
			model: "text-davinci-003",
			prompt: req.body.message,
			max_tokens: 2048,
		});

		const answer = response.data?.choices[0]?.text;

		console.log("answer:", answer, "\n");

		if (response.status == 200 && answer) {
			return res.status(200).send({ answer });
		} else {
			return res.status(500).send({
				error: "Error: Could not process your query",
			});
		}
	} catch (err) {
		console.log(err.message);
		return res
			.status(500)
			.send({ error: "Error: Could not process your query" });
	}
});