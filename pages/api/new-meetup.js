import { MongoClient } from "mongodb";
//api/new-api
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;
    MongoClient.connect(
      "mongodb+srv://admin_nextjs:test123@nodejs.n2vas.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);
    client.close();
    res.status(201).json({
      message: "Meetups Inserted!",
    });
  }
}
export default handler;
