const express = require('express');
const app = express();
const bodyparser =require("body-parser")
const PORT =process.env.PORT || 8080;
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { MongoClient } = require('mongodb');
const appRoutes = require("./routes/index");
app.use(bodyparser.json());
app.use("/api",appRoutes);
const uri = 'mongodb+srv://DiawuoDivine:DiawuoDivine@cluster0.q22x65d.mongodb.net/election-app?retryWrites=true&w=majority';
async function connectToMongo() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    // Pass the MongoDB client instance to the Prisma Client
    prisma.$connect({ client });
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
  }
}
// Call the function to connect to MongoDB and Prisma
connectToMongo();

app.get('/',(req,res,next)=>{
res.status(200).json({
 "message":"welcome to our  voting app"
})
}
)


app.listen(PORT,()=>{
    console.log(`server running on port${PORT}`)
});