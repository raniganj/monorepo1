import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";

export const readOneData = async (req, res) => {
  const client = new MongoClient(uri);
  const userCollection = client.db("practice").collection("users");

  const userDocument = await userCollection.findOne();

  client.close();

  res.json(userDocument);
};

export const readAll = async (req, res) => {
  const client = new MongoClient(uri);
  const userCollection = client.db("practice").collection("users");

  const userList = await userCollection.find({}).toArray();

  client.close();

  res.json(userList);
};

export const insertOneColl = async (req, res) => {
  const client = new MongoClient(uri);
  const userCollection = client.db("practice").collection("users");

  let newDocument = {
    name: "Santosh Kumar",
    address: "Kharghar",
    mobile: 8779529715,
  };
  const response = await userCollection.insertOne(newDocument);

  client.close();

  res.json({ success: true });
};

export const createUser = async (req, res) => {
  try {
    const client = new MongoClient(uri);
    const userCollection = client.db("practice").collection("users");

    const reqBody = req.body;
    const response = await userCollection.insertOne(reqBody);

    client.close();

    res.json({ success: true });
  } catch {
    res.json({ success: false });
  }
};
