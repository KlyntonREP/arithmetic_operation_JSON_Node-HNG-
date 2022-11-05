const express = require('express');
const cors = require('cors')


const mathRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", mathRouter);

const PORT = process.env.PORT || 7890;

app.listen(PORT, console.log("App Running"))