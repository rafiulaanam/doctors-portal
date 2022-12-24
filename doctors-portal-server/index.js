const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const PORT = process.env.PORT || 5000;
require("dotenv").config();

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_KEY}@cluster0.qdm6nzz.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
function verifyJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).json({
      status: 401,
      message: "Unauthorized",
    });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, decoded) {
    if (err) {
      return res.status(401).send({message:"unexpected error"});
    }

    req.decoded = decoded;
 
    next(); 
  });
}

async function run() {
  try {
    const appointmentOptionsCollection = client
      .db("doctorsPortal")
      .collection("services");

    const bookingsCollection = client
      .db("doctorsPortal")
      .collection("bookings");

    const usersCollection = client.db("doctorsPortal").collection("users");

    app.get("/appointmentOptions", async (req, res) => {
      const query = {};
      const date = req.query.date;

      const options = await appointmentOptionsCollection.find(query).toArray();
      const bookingQuery = { appointmentDate: date };
      const alreadyBooked = await bookingsCollection
        .find(bookingQuery)
        .toArray();
      options.forEach((option) => {
        const optionBooked = alreadyBooked.filter(
          (book) => book.service === option.name
        );
        const bookedSlots = optionBooked.map((book) => book.slot);
        const remainingSlots = option.slots.filter(
          (slot) => !bookedSlots.includes(slot)
        );
        option.slots = remainingSlots;
      });
      res.send(options);
    });

    app.get("/bookings",  async (req, res) => {
      const email = req.query.email;
      // const decodedEmail = req.decoded.email

      // if(email !== decodedEmail){
      //   return res.status(403).send({
      //             status: 403,
      //             message: "Forbidden",

      //   })
      // }
      console.log(email);   
      const query = { email: email };
      const result = await bookingsCollection.find(query).toArray();
       console.log(result)
      res.send(result);
    });

    app.post("/bookings", async (req, res) => {
      const bookingData = req.body;
      const query = {
        appointmentDate: bookingData.appointmentDate,
        email: bookingData.email,
        service: bookingData.service,
      };
      const alreadyBooked = await bookingsCollection.find(query).toArray();

      if (alreadyBooked.length) {
        const message = `You already have a booking on ${bookingData.appointmentDate}`;
        return res.send({ acknowledged: false, message });
      }
      const result = await bookingsCollection.insertOne(bookingData);
      res.send(result);
    });

    app.post("/users", async (req, res) => {
      const data = req.body;
      const result = await usersCollection.insertOne(data);
      res.send(result);
    });
    app.get("/users", async (req, res) => {
      const query = {};
      const result = await usersCollection.find(query).toArray();
      res.send(result);
    });
    app.delete("/users/admin/:id", async (req, res) => {
      const id = req.params.id;
      const query = {_id: ObjectId(id)};
      const result = await usersCollection.deleteOne(query);
      res.send(result);
    });
    app.put('/users/admin/:id', async (req, res) => {
      const id = req.params.id;
      const filter = {_id:ObjectId(id)}
      const options = {upsert:true}
      const updatedDoc = {
        $set:{
          role:'admin'
        }
      }
      const result = await usersCollection.updateOne(filter, updatedDoc, options);
res.send(result)

    })

    app.get("/jwt", async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
      const user = await usersCollection.findOne(query);

      if (user) {
        const token = jwt.sign({ email }, process.env.ACCESS_TOKEN, {
          expiresIn: "10h",
        });
        return res.send({ accessToken:token });
      }
      res.status(403).send({ accessToken: "" });
    });
  } finally {
  }
}
run().catch((e) => console.log(e));

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(PORT, () => console.log(`server running in ${PORT}`));
