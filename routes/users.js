/**
    @author Kalimuthu Rengaswamy (51510641)
**/ 
var express = require('express');
var router = express.Router();
var db = require('../datastore/db');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   /*
//   INSERT INTO user ('name','toolboxs','passcode','dec') VALUES ('gani','23','23','werwerwe') ;
// DELETE FROM user where id = 2;
// */
  

//   db.editDB("INSERT INTO user ('name','toolboxes','passcode','dec') VALUES ('gani','23','23','werwerwe') ;", function(err, rows){
//     if(err){
//       res.send(300, 'respond with a resource', err);
//     }else{
//       db.readDB("select * from user;", function(err, rows){
//         if(err){
//           res.send(300 , 'respond with a resource', err);
//         }else{
//           console.log("result", rows)
//           res.send(200, rows);
//         }
//       });
//     }
//   });
  
// });


/*  EMPLOYEE DETAILS TABLE SCHEMA
    emp_details(emp_id text primary key, emp_fname text, emp_lname text,
    emp_dept text, emp_manager text, emp_user_type text, emp_email text, emp_mobile text, 
    password text); */

    
router.get('/userDetails', (req, res) => {
  db.readDB("Select * from emp_details;", (err, rows) => {
    if(err) {
      res.send(300, 'Respond with ', err);
    }
    else {
      res.send(200, rows);
    }
  });
});

router.post('/userLogin', (req, res) => {
  email = req.body['email'];
  password = req.body['password'];
  db.readDB("Select * from emp_details where emp_email='"+email+"' and password='"+password+"';", (err, rows) => {
    if(err) {
      res.send(300, 'Respond with ', err);
    }
    else {
      if(rows.length == 0) {
        res.send(false);
      }
      else {
        res.send(true);
      }
    }
  });
});

module.exports = router;
