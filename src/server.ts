import * as express from "express";
import { json } from "body-parser";

import { deleteDbItem, getDbItem, putDbItem, updateDbItem } from "./db-item";
import { deleteAuthenticatedItem, getAuthenticatedItem, putAuthenticatedItem, updateAuthenticatedItem } from "./authenticated-item";
import { deleteItem, getItem, putItem, updateItem } from "./local-item";

//new imports
import { getAll, getOne, createOne, updateOne, deleteOne} from "./local-user";
import sequelize from "./util/database"
import User from "./models/users"

// Constants
const PORT = process.env.STAGE === "local" ? 8000 : 80;
const HOST = '0.0.0.0';


// App handlers
const app = express();
const parser = json();

app.get("/ping", (req, res) => {
  res.status(200).send();
});

app.put('/item', parser, putItem);
app.get('/item', parser, getItem);
app.post('/item', parser, updateItem);
app.delete('/item', parser, deleteItem);

//new routes
app.get('/users', parser, getAll);
app.get('/users/:id', parser, getOne);
app.post('/users/', parser, createOne);
app.put('/users/:id', parser, updateOne);
app.delete('/users/:id', parser, deleteOne);

app.put('/db-item', parser, putDbItem);
app.post('/db-item', parser, updateDbItem);
app.get('/db-item', parser, getDbItem);
app.delete('/db-item', parser, deleteDbItem);

app.put('/authenticated-item', parser, putAuthenticatedItem);
app.get('/authenticated-item', parser, getAuthenticatedItem);
app.post('/authenticated-item', parser, updateAuthenticatedItem);
app.delete('/authenticated-item', parser, deleteAuthenticatedItem);


// app.listen(PORT, HOST);
// console.log(`Running on http://${HOST}:${PORT}`);

const start = async () =>{
  try {
    await sequelize.sync({force: false}); //resets DB every time if set to true
    app.listen(PORT, HOST);
    console.log(`Running on http://${HOST}:${PORT}`);
  } catch (error) {
    console.log(error);
  }
}

start();