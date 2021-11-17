const e = require('express');
const mysql=require('mysql');
//create here mysql connection

const dbConn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'nodejs'
});

dbConn.connect(function(error){
    if(error) throw error;
    console.log('Databse connected successfully');
})
module.exports=dbConn;