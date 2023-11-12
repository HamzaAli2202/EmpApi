const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const empModel = require('./model/empModel')


const app = express()
app.use(express.json())
app.use(cors())
const port = 1021

mongoose.connect("mongodb://127.0.0.1:27017/empldb").then(() => {
    console.log("MongoDB is connected Successfully")
});

app.get("/", (req, res) => {
    res.send('Employee Data')
});

app.post("/addemp", (req, res) => {
    const result = new empModel(req.body)
    result.save()
    res.send(`New Employess ${req.body.fname} ${req.body.lname} Add Successfully`)
})

app.get("/allemp", async (req, res) => {
    const result = await empModel.find({})
    res.json(result)
})

app.post("/empdel", async (req, res) => {
    const result = await empModel.findOneAndDelete({
        _id: req.body._id
    }, req.body)

    res.json("Record is Deleted Successfully")
})
app.post("/empupd", async (req, res) => {
    const result = await empModel.findOneAndUpdate({
        _id: req.body._id
    }, req.body)
    res.json("Record update Successfully")
})


app.listen(port, () => {
    console.log(`Server is and running on ${port}`)
})