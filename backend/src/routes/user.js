const express = require('express');
const router = express.Router();
const db = require('../config/db.js')

router.post('/', (req, res)=>{
    let mail = req.body.mail;
    let name = req.body.name;
    let password = req.body.password;
                                   
    let sql = 'insert into user(name, mail, password) values(?, ?, ?)';
    let query_var = [name, mail, password];

    db.query(sql, query_var, (err, result)=>{
        if(err)
            res.send({ err }); 
        else
            res.send({ data: result });  
    });
});

module.exports = router;