var express = require('express');
var router = express.Router();
var db = require('../datastore/db');

/* TOOLBOX TABLE SCHEMA
    toolbox(tb_id text primary key, tb_user text, tb_name text, tb_type text,tb_desc text,
    tb_image text, tb_created_date text, tb_next_audit_date text, tb_expiry_date text); */

    // toolboxCreated = new Date.now();

router.post('/add', (req, res, next) => {
    toolboxName = req.body['toolboxName'];
    toolboxId = req.body['toolboxId'];
    toolboxType = req.body['toolboxType'];
    toolboxDescription = req.body['toolboxDescription'];
    toolboxImage = req.body['toolboxImage'];
    toolboxOwner = req.body['toolboxOwner'];
    // toolboxCreatedDate = new Date.now();
    console.log("Details: "+ toolboxName+toolboxId+toolboxType+toolboxDescription+toolboxImage+toolboxOwner);
    query = "INSERT INTO toolbox (tb_id, tb_user, tb_name, tb_type, tb_desc, tb_image) VALUES";
    query+="('"+toolboxId+"','"+toolboxOwner+"','"+toolboxName+"','"+toolboxType+"','"+toolboxDescription+"','"+toolboxImage+"');";
    console.log(query);
    db.editDB(query, (err, rows) => {
        if(err) {
            res.send(300, 'respond with', err);
        }
        else {
            console.log("Inserted Successfully!!!");
        }
    });
});

router.get('/viewToolbox', (req, res, next) => {
    db.readDB("select * from toolbox;", (err, rows) => {
        if(err) {
            res.send(300, 'Respond with ', err);
          }
          else {
            res.send(200, rows);
          }
        });
    });

    router.post('/viewToolboxByID', (req, res, next) => {
        toolboxId = req.body['toolboxId'];
        console.log('ID is '+toolboxId);
        db.readDB("select * from toolbox where tb_id='"+toolboxId+"';", (err, rows) => {
            if(err) {
                res.send(300, 'Respond with ', err);
              }
              else {
                res.send(200, rows);
                console.log(rows);
              }
            });
        });
    
    router.post('/edit', (req, res, next) => {
        toolboxName = req.body['toolboxName'];
        tooboxId = req.body['toolboxId'];
        tooboxType = req.body['toolboxType'];
        toolboxDescription = req.body['toolboxDescription'];
        toolboxImage = req.body['toolboxImage'];
        toolboxOwner = req.body['toolboxOwner'];
        console.log("Details: "+ toolboxName);
        query = "UPDATE toolbox SET tb_name='"+toolboxName+"',"+"tb_type='"+tooboxType+"', tb_desc='"+toolboxDescription+"', tb_image='"+toolboxImage+"', tb_user='"+toolboxOwner+"' where tb_id='"+tooboxId+"';";
        // query+="('"+toolboxName+"',"+tooboxId+",'"+tooboxType+"','"+toolboxDescription+"','"+toolboxImage+"','"+toolboxOwner+"');";
        console.log(query);
        db.editDB(query, (err, rows) => {
            if(err) {
                res.send(300, 'respond with', err);
            }
            else {
                console.log("Edited Successfully!!!");
                console.log(rows);
            }
        });
    });
module.exports = router;