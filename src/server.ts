import express, { request } from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({
    message: "Olá dev!",
  });
});

app.post("/", (request, response) => {
  return response.json({
    message: "Usuário cadastrado com sucesso!",
  });
});

app.listen(3333, () => console.log("Server is running on port 3333"));
