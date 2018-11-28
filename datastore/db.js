/**
    @author Kalimuthu Rengaswamy (51510641)
**/ 
var sqlite3 = require('sqlite3').verbose();
var express = require('express');
var fs = require('fs');

var database, file;

var db = {
    /*
	 * Sqlite3 DB initialized Database will create within project folder @param
	 * database - DB File Name
	 */
    init : function(dataBaseName, callback){
        if(dataBaseName === undefined || dataBaseName === ""){
            callback ("Database not define!", undefined);
        }else{
            this.file = __dirname +'\\'+dataBaseName;
            console.log("DB Path :"+this.file);
            var exist = fs.existsSync(this.file)
            if(!exist){
                console.log('Creating DB File');
                fs.openSync(this.file, 'w');
            }
            this.database = new sqlite3.Database(this.file);
            callback(undefined,"DB connected Succfully!")
        }
    },

    /**
	 * This 'CloseDB' function Closes current DB.
	 */
    closeDB : function(callback){
        if(undefined === this.database || this.database === ""){
            throw("DB not found!");
        }else{
            this.database.close();
            this.database = undefine;
            callback("DB Connection was Closed Successfuly! ")
        }
    }, 

    /** 
     * This  editED will used for create, update,save and delete query 
    */
    editDB : function(query, callback){
        if((undefined === this.database || this.database === "") && 
            query === undefined || query === ""){
                throw "the query is Empty !";
            }else{
                this.database.run(query, function(err){ 
                    if (err){
                        callback(err, undefined);
                    }else{
                        callback(undefined, "Records are  saved/ updated successfully");
                    }
                });
            }
    },
    /**
     *  this readDB function will used for read value in DB 
     */
    readDB : function(query, callback){
        if((undefined === this.database || this.database === "") && 
            query === undefined || query === ""){
                callback( "the query is Empty !", undefined);
            }else{
                this.database.all(query, function(err, result){
                    if(err){
                        throw err;
                    }else{
                        callback(undefined, result);
                    }
                });
            }
    }
}
module.exports = db;
