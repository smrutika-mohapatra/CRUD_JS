let express = require("express")
let cors = require("cors")
let mongoose = require("mongoose")
let FormData = require("./model")
mongoose.connect("mongodb://localhost:27017/RegisterForm")
    .then(() => { console.log("connected") })
    .catch(() => { console.log("Not connected") })


let app = express()
app.use(cors())
app.use(express.json())

app.post("/formData", (req, res) => {
    // console.log(req.body);
    // res.send("Success")
    console.log(req.body.email);
    FormData.findOne({ email: req.body.email })
        .then((data) => {
            if (data) {
                console.log(data);
                res.send({ "message": "User is already existed" })
            } else {
                let data = new FormData(req.body)
                data.save()
                    .then(() => { console.log("Saved"); })
                    .catch(() => { console.log("Not saved"); })
                res.send({ "message": "data success" })
            }
        })
        .catch((err) => {
            console.log(err);
        })

})

app.post("/loginData", (req, res) => {
    let { username, password } = req.body
    FormData.find({ email: username }).then((data) => {
        if (data) {
            if (data.email == username) {
                res.send("Registered data")
            }
        }
        else {
            console.log("No data Available");
        }
    })
    res.send("success")
})

app.get("/users", (req, res) => {
    FormData.find().then((data) => {
       res.send(data)
    }).catch((err) => {
            console.log("didn't get the data",err)
    })

})
app.get("/users/:id",(req,res)=>{
    console.log(req.params.id);

    FormData.findOne({_id:req.params.id})
    .then((data)=>{res.send(data);})
})
app.put("/users/:id",(req,res)=>{
    FormData.updateOne({_id:req.params.id},req.body)
    // .then(()=>{console.log("database updated");})
    .then(()=>{res.send({"message":"database updated"})})
    .catch(()=>{console.log("database is not updated");})

})
app.delete("/users/:id",(req,res)=>{
    FormData.deleteOne({_id:req.params.id})
    .then(()=>{res.send({"message":"Data deleted"})})
})

app.listen(5000, () => {
    console.log("Server running at port 5000");
})