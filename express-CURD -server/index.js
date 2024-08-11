const express=require("express")
const cors=require("cors")
const app=express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const port = process.env.PORT || 3000;

//mibiplob01 username
//rHynVm5O5PTzKFh2 password
//middleware
app.use(cors());
app.use(express.json());




const uri = "mongodb+srv://mibiplob01:rHynVm5O5PTzKFh2@cluster0.ij6ptye.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const users = client.db("userDB").collection("users");

    app.post("/users",async(req,res)=>{
      const user=req.body;
      console.log(user)
      const result = await users.insertOne(user);
      res.send(result)
    })

    app.get("/users",async(req,res)=>{
      const result=await users.find().toArray()
      res.send(result)
    })

    app.delete("/users/:id",async(req,res)=>{
      const id=req.params.id;
      const query={
        _id:new ObjectId(id)
      }
      const result=await users.deleteOne(query)
      res.send(result)
    })

    app.get("/users/:id",async(req,res)=>{
      const id=req.params.id;
      const query={
        _id:new ObjectId(id)
      }
      const result=await users.findOne(query)
      res.send(result)
    })

    app.put("/users/:id",async(req,res)=>{
      const id=req.params.id;
      const data=req.body;
      const options = { upsert: true };
      const query={
        _id:new ObjectId(id)
      }
      const updateUser={
        $set:{
          email:data.email,
          name:data.name,
          password:data.password
        },
        
      }
      const result=await users.updateOne(query,updateUser,options)
      res.send(result)

      })
    
      
    
    
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    
    // await client.close();
  }
}
run().catch(console.dir);




app.get("/",(req,res)=>{
    res.send(`Server is running`)
})

app.listen(port,()=>{
    console.log(`server is running on port no ${port}`)
})