import express from "express";

const app = express();

app.get("/eai", (req, res) => {
  return res.json({ message: "eai" });
});

app.listen(3333, () => {
  console.log("Running!!");
});
