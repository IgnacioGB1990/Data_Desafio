from flask import Flask, request, jsonify
import pickle
import numpy as np
import pandas as pd
import pymysql
from sqlalchemy import create_engine

model = pickle.load(open('kmeans_model.pkl', 'rb'))

app = Flask(__name__)




# Connect to database:
db = pymysql.connect(host=host,
                     user=username,
                     password=password,
                     cursorclass=pymysql.cursors.DictCursor)
cursor = db.cursor()
cursor.connection.commit()
use_db = ''' USE water_footprint_database'''
cursor.execute(use_db)


# @app.route('/')
# def man():

#     return "<h2>THIS IS OUR K-MEANS HOME PAGE AND WE ARE ABOUT TO TEST OUR MODEL</h2>"



# Create the database engine
db="water_footprint_database"
engine = create_engine(f"mysql+pymysql://{username}:{password}@{host}/{db}")

@app.route('/')
def man():

    # Create a DataFrame to append to the database
    df = pd.DataFrame({
            'Interests': [100],
            'WaterRecycling': [100],
            'GeneralRecycling': [100],
            'Meat': [100],
            'Garden_No': [100],
            'Garden_Yes': [100],
        })
    with engine.connect() as connection:

        # Insert the entire DataFrame into the 'consumer' table
        df.to_sql(
            'consumer',
            con=connection,
            if_exists='append',
            chunksize=1000,
            index=False
        )
        cursor.connection.commit()
    return 'Connected to the database and inserted data successfully.'

# Tipo 0 (spender)
# [2 0 0 1 1 0]
# /api/k-means/prediction?data=2&data=0&data=0&data=1&data=1&data=0

# Tipo 1 (saver)
# [0 1 0 1 1 0]
# /api/k-means/prediction?data=0&data=1&data=0&data=1&data=1&data=0

# Test
# http://3.144.196.76/api/k-means/prediction?data=33&data=33&data=33&data=33&data=33&data=33
@app.route('/api/k-means/prediction', methods=['GET'])
def api_data():

    results = []

    if 'data' in request.args:
        for combinacion in dict(request.args.lists()).items(): 
            if combinacion[0]=="data":
                mis_datas = combinacion[1]
                for mi_data in mis_datas:
                    try:
                        results.append(int(mi_data))
                    except:
                        return jsonify("invalid format")
  

                # Create dataframe to append to database
                df = pd.DataFrame({'Interests': [results[0]],
                    'WaterRecycling':[results[1]] ,
                    'GeneralRecycling':[results[2]] ,
                    'Meat':[results[3]] ,
                    'Garden_No':[results[4]] ,
                    'Garden_Yes':[results[5]] ,
                     })
                with engine.connect() as connection:


        # Insert the entire DataFrame into the 'consumer' table
                    df.to_sql(
                'consumer',
                con=connection,
                if_exists='append',
                chunksize=1000,
                index=False
                )
                cursor.connection.commit()


                arr = np.array([results]).reshape(1, -1)
                pred = model.predict(arr)
                if pred[0]==0:
                    value ="spender"
                elif pred[0]==1:
                    value="saver"
                else:
                    value="unknown"
                return jsonify(value)

if __name__ == "__main__":
    app.run(debug=True)