const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes")
const app = express()

app.use(express.json())
app.use(router);


mongoose.connect('mongodb+srv://prajvaladhav14:Pvh469Vg6R2hO17A@cluster2.wyowe3n.mongodb.net/Cluster2?retryWrites=true&w=majority')
    .then (()=> {
        app.listen(3000, ()=> {
            console.log('Node API running on port 3000')
        })
        console.log("connected to the database");
    }).catch((error)=> {
        console.log(error)
    }) 