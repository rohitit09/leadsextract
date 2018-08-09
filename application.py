# -*- coding: utf-8 -*-
# Librarys
from flask import Flask, jsonify,request
import pandas as pd
import datetime
import csv
import os
# from flask_sqlalchemy import SQLAlchemy

# Variables
app = Flask(__name__)


# Settings
app.config['DEBUG'] = False
app.config['SECRET_KEY'] = 'xesrapsecret#1234'


# Views
@app.route('/getdata', methods=['POST'])
def updatecsv():
    import ipdb; ipdb.set_trace()
    data1=request.json
    # print(data1)
    bool=False
    for data in data1:
        for key,value in data.items():
            data[key]=value.strip()
        data['insertime']=datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
        if os.path.exists(os.getcwd()+"/data.csv"):
            bool=True
        with open('currencydata.csv', 'a', newline='') as csvfile:
            fieldnames = ['person_name', 'company_name',"position","experience","location","insertime"]
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            if not bool:
                writer.writeheader()
            writer.writerow(data)
    return jsonify({"msg":"csv upadted"})


# Run
if __name__ == '__main__':
    app.run()