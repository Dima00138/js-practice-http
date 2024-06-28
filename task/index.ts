import express, { response } from "express";
import axios from "axios";

const PORT = 3000;
const apiKey = "3f0a0ca21c18f04aa04ebcd4f7e8c1dd";
const app = express();

app.use(express.urlencoded({extended: false}));

app.get("/weather", async (req, res) => {
    try {
        const city = req.query.city || "Minsk";
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        res.status(response.status).json(response.data);
    } catch (error : any) {
        console.error(error);
        res.status(error.response.status).send(error.response.data.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});