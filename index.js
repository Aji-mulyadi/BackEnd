// Import Export di node.js
// Export = module.export
// Import = require


// var bebas = require('./fnPlus')

// console.log(bebas(7,8))



// ======== BULID IN LIBRARY
const Crypto = require('crypto')
// Encrypt And Decrypt
// ENCRYPT 


const name = 'Agra Bilal El Ghazi' 


// var mykey = Crypto.createCipher('aes-128-cbc', 'lupalagi');
// var mystr = mykey.update(name, 'utf8', 'hex')
// mystr += mykey.final('hex');

// console.log(mystr)

// DECRYPT 

// var mykey = Crypto.createDecipher('aes-128-cbc', 'lupalagi');
// var mystr = mykey.update('c2c0e81d6068d03ebbc1fa082a87dbd6325bd3e9a5efdf23e16042ba552470df',  'hex',  'utf8')
// mystr += mykey.final('utf8');
// console.log(mystr)

// buat cari tahu data yang di gunakan users
// const os = require('os')

// console.log(os.cpus())
// console.log(os.platform())

const express = require ('express')
const mysql = require ('mysql')

const conn = mysql.createConnection({
    user : "root",
    password : "28agustus",
    database : "titanic_data",
    port : 3306
})

const PORT = 2000
const app = express()


app.get ('/', (req,res) => {
    res.send('Hello World')
})

app.get ('/getusers' , (req,res) => {
    conn.query('select * from users;', (err,result)=> {
        if (err) throw err
        res.send (result)
    })
})

app.get ('/usersmale' , (req,res) => {
    conn.query('select * from users where Sex="male";', (err,result)=> {
        if (err) throw err
        res.send(result)
    })
})

app.get ('/userspclassmale' ,(req,res) => {
    conn.query('select * from users where Pclass=3 and Sex="male";', (err,result) => {
        if (err) throw err
        res.send(result)
    })
})

app.listen(PORT, () => console.log('API Running on port ' + PORT) )