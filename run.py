# start of code

# connect py
    
    # cd *DRAG PROJECT FOLDER INTO TERMINAL*
    # env\Scripts\activate.bat
    # set FLASK_APP=run.py
    # set FLASK_DEBUG=1
    # py -m flask run

from flask import Flask, render_template, request
import sqlite3
app = Flask(__name__)

# database
RESULTSDB = 'results.db'

@app.route('/')
def landing():
    return render_template('landing.html')


'''

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('results.db');

let reportingTag = [];

let sql = SELECT * FROM ?;

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    reportingTag.push(row.reportingTag);
  });
  
  console.log(reportingTag);

});



// close the database connection
db.close();

'''