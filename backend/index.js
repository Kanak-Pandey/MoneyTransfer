require('dotenv').config();

express = require("express");
const cors=require("cors");
const app=express();

app.use(cors({
    origin: "https://vercel-frontend-1miv-kanak-pandeys-projects.vercel.app", // ✅ only your frontend domain
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json());

const port=process.env.PORT || 3000
const { router: mainRouter } = require("./routes/index");

app.use("/api/v1", mainRouter);
app.get("/", (req, res) => {
    res.send("Backend is running ");
});



app.listen(3000);