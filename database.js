const { MongoClient } = require("mongodb");
const pass = "oLim3bqNcuihcgwz";
const url = "mongodb+srv://e_sumit:oLim3bqNcuihcgwz@sumitstarts.mpbt2.mongodb.net/";

const client = new MongoClient(url);
const dbName = "HelloSumit";

async function main(){
    await client.connect();
    console.log("Connected successfully to server.");
    const db = client.db(dbName);
    const collection = db.collection("User");

    const data1 = {
        firstName:"riyu",
        lastName:"Saini",
        contactNo:"9545824387"
    }

    const data2 = {
        firstName:"chiku",
        lastName:"singh",
        contactNo:"46752334",
    }

    //Inserting in the database.
    const insertResult = await collection.insertMany([data1,data2]);
    console.log('Inserted documents =>', insertResult);

    //finding everything from database.
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    return "done.";
}


main()
 .then(console.log)
 .catch(console.error)
 .finally(()=>client.close());