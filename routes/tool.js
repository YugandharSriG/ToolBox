var express = require('express');
var router = express.Router();
var db = require('../datastore/db');

/* TOOL TABLE SCHEMA
    tool(tool_id text primary key, tb_id text, tool_image text, tool_name text, tool_desc text, 
    tool_type text, tool_price real, tool_issued_date text,
    tool_expiry_date text, tool_next_cali_date text, tool_status text); */

router.post('/add', (req, res, next) => {
    toolName = req.body['toolName'];
    toolId = req.body['toolId'];
    toolboxId = req.body['toolboxId'];
    toolType = req.body['toolType'];
    toolDescription = req.body['toolDescription'];
    toolImage = req.body['toolImage'];
    console.log("Details: "+ toolName);
    query = "INSERT INTO tool (tool_id, tb_id, tool_image, tool_name, tool_desc, tool_type) VALUES";
    query+="('"+toolId+"','"+toolboxId+"','"+toolImage+"','"+toolName+"','"+toolDescription+"','"+toolType+"');";
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

router.post('/viewToolById', (req, res, next) => {
    toolboxId = req.body['toolboxId'];
    db.readDB("select * from tool where tb_id='"+toolboxId+"';", (err, rows) => {
        if(err) {
            res.send(300, 'Respond with ', err);
          }
          else {
            res.send(200, rows);
          }
        });
    })

router.post('/getToolById', (req, res, next) => {
    toolId = req.body['toolId'];
    db.readDB("select * from tool where tool_id='"+toolId+"';", (err, rows) => {
        if(err) {
            res.send(300, 'Respond with ', err);
          }
          else {
            res.send(200, rows);
          }
        });
    });
    
    router.post('/edit', (req, res, next) => {
        toolName = req.body['toolName'];
        toolId = req.body['toolId'];
        toolboxId = req.body['toolboxId'];
        toolType = req.body['toolType'];
        toolDescription = req.body['toolDescription'];
        toolImage = req.body['toolImage'];
        query = "UPDATE tool SET tool_name='"+toolName+"',"+"tool_type='"+toolType+"', tool_desc='"+toolDescription+"', tool_image='"+toolImage+"' where tool_id='"+toolId+"';";
        console.log(query);
        db.editDB(query, (err, rows) => {
            if(err) {
                res.send(300, 'respond with', err);
            }
            else {
                console.log("Updated Successfully!!!");
            }
        });
    });

    router.get('/getAllTools', (req, res, next) => {
        db.readDB("select * from tool;", (err, rows) => {
            if(err) {
                res.send(300, 'Respond with ', err);
              }
              else {
                res.send(200, rows);
              }
            });
        });    

module.exports = router;