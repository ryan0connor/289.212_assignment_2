# start of code

# connect py
    
    # cd *DRAG PROJECT FOLDER INTO TERMINAL*
    # env\Scripts\activate.bat 
    # set FLASK_APP=run.py 
    # set FLASK_DEBUG=1 
    # py -m flask run 

import re
from flask import Flask, render_template, request
import sqlite3
app = Flask(__name__)

# database
RESULTSDB = 'results.db'

@app.route('/')
def results():
    return render_template('index.html')



