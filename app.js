import express from "express";
import logger from "morgan";
import questionsRouter from "./routes/questions.js";

import cors from "cors";



const app = express();
const PORT = process.env.PORT ?? 3006;
// Refactor this PORT variable to call on the environment variable instead!

app.use(logger("dev"));
app.use(express.json());
app.use(express.static("public"));
app.use(cors("*"));

app.use("/questions", questionsRouter);


app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});

export default app;