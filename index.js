const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

    app.post("/save", (req, res) => {
	const url = "mongodb+srv://shrutihushe6:xlC2RPKLZO0K2q1p@cluster0.b6xd20v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
	const client = new MongoClient(url);
	const db = client.db("wn18july24");
	const coll = db.collection("student");
	const record = {"name":req.body.name, "company":req.body.choice};
	coll.insertOne(record)
	.then( result => res.send(result))
	.catch( error => res.send(error));
});

app.listen(9000, () => {console.log("ready to serve @9000"); });
