import  express  from "express";
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("der server läuft, is running", PORT);
})

app.get("/", (req, res) => res.send("Der server läuft!"))