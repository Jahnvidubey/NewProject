const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
app.use(cors());
app.use(bodyparser.json());

//connect mysql database

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'userinfo',
    port: 3306

});

//check database

db.connect(err=>{
    if(err){console.log('err')}
    console.log('Database connected successfully!')
})

app.listen(3000,()=>{
    console.log("Server is running on 3000 PORT");
})

//get all data
app.get('/users',(req,res)=>{
   // console.log('get all users');
   let qrr = 'SELECT * FROM users';
   db.query(qrr,(err,results)=>{
       if(err){
           console.log(err, 'errs');
       }
       if(results.length>0){
           res.send({
               message: 'All users data',
               data: results
           });
       };
   });
});