import express, { json } from "express";
import mariadb from "mariadb";
export const connection = {};

const App = express();

App.use(
  json({
    type: ["application/json", "text/plain"],
  })
);

App.listen(5000, async () => {
  connection.connection = await mariadb.createConnection({
    host: "localhost",
    port: 3306,
    database: "mydb",
    user: "root",
    password: "1234",
    bigIntAsNumber: true,
    insertIdAsNumber: true,
  });
  console.log(connection.connection);
  console.log("SERVER CONNECTED");
});

App.get("/get/message/:id", async (req, res) => {
  console.log("get");
  const { id } = req.params;
  const get = await connection.connection.query(`
    SELECT DISTINCT id_sender, id_recipient, text_massage, date_message FROM messages WHERE id_sender = ${id} or id_recipient = ${id}  
    `);
  console.log(get);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
  res.json(get);
});

App.post("/post/message/:id_sender/:id_recipient", async (req, res) => {
  console.log("post readers");
  const message = req.body;
  const { id_sender, id_recipient } = req.params;
  const post = await connection.connection.query(`
        INSERT INTO messages(id_sender, id_recipient, text_massage) VALUES
        (${id_sender}, ${id_recipient}, ${JSON.stringify(message.text_massage)})
    `);
  console.log(post);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
  res.json(post);
});

App.get("/get/users", async (req, res) => {
  console.log("get");
  const { id } = req.params;
  const get = await connection.connection.query(`
    SELECT DISTINCT  id_users, name, surname FROM users 
    `);
  console.log(get);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
  res.json(get);
});
