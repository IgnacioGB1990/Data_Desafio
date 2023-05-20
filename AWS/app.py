from flask import Flask, request, jsonify
import pickle
import numpy as np

model = pickle.load(open('kmeans_model.pkl', 'rb'))

app = Flask(__name__)


@app.route('/')
def man():
    # return render_template('home.html')
    return "<h2>THIS IS OUR K-MEANS HOME PAGE AND WE ARE ABOUT TO TEST OUR MODEL</h2>"

# Tipo 0 (saver)
# /api/k-means/prediction?data=2&data=1&data=0&data=0&data=0&data=0&data=0&data=1&data=0&data=0&data=1&data=1&data=0&data=0&data=1&data=1&data=0

# Tipo 1 (spender)
# /api/k-means/prediction?data=0&data=0&data=0&data=1&data=0&data=1&data=1&data=1&data=1&data=1&data=0&data=1&data=0&data=1&data=0&data=0&data=1
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

                arr = np.array([results]).reshape(1, -1)
                pred = model.predict(arr)
                if pred[0]==0:
                    value ="saver"
                elif pred[0]==1:
                    value="spender"
                else:
                    value="unknown"
                return jsonify(value)

if __name__ == "__main__":
    app.run(debug=True)