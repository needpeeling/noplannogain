const express = require('express');
const router = express.Router();
const db = require('../config/db.js')

router.post('/', (req, res)=>{
    let mail = req.body.mail;
    let name = req.body.name;
    let password = req.body.password;
                                   
    let sql = 'INSERT INTO user(name, mail, password) VALUES(?, ?, ?)';
    let query_var = [name, mail, password];

    db.query(sql, query_var, (err, result)=>{
        if(err)
            res.send({ err }); 
        else
            res.send({ data: result });  
    });
});

router.get('/:name', (req, res)=>{
    let name = req.params.name;
    let sql = 'SELECT EXISTS(SELECT 1 FROM user WHERE name = ?)';
    let query_var = [name];
    db.query(sql, query_var, (err, result)=>{
        if(err)
            res.send({ err }); 
        else
            res.send({ data: parseInt( Object.values(result[0]).join(''))});
    });
})



module.exports = router;