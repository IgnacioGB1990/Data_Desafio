from flask import Flask, render_template, request,jsonify
import pickle
import numpy as np

model = pickle.load(open('kmeans_model.pkl', 'rb'))


app = Flask(__name__)



@app.route('/')
def man():
    # return render_template('home.html')
    return "<h2>THIS IS OUR K-MEANS HOME PAGE</h2>"


# api/v2/resources/muchosbooks?id=1&id=2
# data=2&data=1&data=0&data=0&data=0&data=0&data=0&data=1&data=0&data=0&data=1&data=1&data=0&data=0&data=1&data=1&data=0
@app.route('/api/k-means/prediction', methods=['GET'])
def api_data():

    results = []

    if 'data' in request.args:
        for combinacion in dict(request.args.lists()).items(): 
            if combinacion[0]=="data":
                mis_datas = combinacion[1]
                for mi_data in mis_datas:
                    results.append(int(mi_data))
                    arr = np.array(results)
                    pred = model.predict(arr)
                return jsonify(pred)

#     arr = np.array([[data1, data2, data3, data4]])
#     pred = model.predict(arr)



# @app.route('/predict', methods=['POST'])
# def home(): 
#     data1 = request.form['a']
#     data2 = request.form['b']
#     data3 = request.form['c']
#     data4 = request.form['d']
#     arr = np.array([[data1, data2, data3, data4]])
#     pred = model.predict(arr)
#     return render_template('after.html', data=pred)


if __name__ == "__main__":
    app.run(debug=True)