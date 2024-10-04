const express=require("express")
const mysql=require("mysql")
const cors=require("cors")
const bodyparser=require("body-parser")




const app=express()

app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'Devkan',
})





app.post("/projectdetails",(req,res)=>{
    const projectdetail=req.body.projectdetailsid
    const sql="SELECT * FROM projets WHERE id=?"
    db.query(sql,[[projectdetail]],(err,data)=>{
        if (err) {
           res.send(err) 
        } else {
            res.send(data)
        }
    })
})
app.get("/projects",(req,res)=>{
    const sql="SELECT * FROM projets"
    db.query(sql,[],(err,data)=>{
        if (err) {
            res.send(err)
        } else {
            res.json(data)
        }
    })
})

app.get("/experiences",(req,res)=>{
 const sql="SELECT * FROM experience"
 db.query(sql,[],(err,data)=>{
    if (err) {
        res.json(err)
    } else {
        res.json(data)
    }
 })
})







app.listen(3001,()=>{
    console.log("serveur en ecoute")
})