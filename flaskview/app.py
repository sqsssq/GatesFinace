from flask import *
from flask_cors import CORS

app = Flask(__name__)
CORS(app, supports_credentials=True)


@app.route('/', methods=["GET"])
def index():
    return 'GATES FINANCE TECHNOLOGY'


@app.route('/login', methods=["POST"])
def login():
    res = {}
    loginData = request.get_json()
    if 'sq' == loginData['username'] and 'sq' == loginData["password"]:
        res['status'] = True
        res['username'] = loginData['username']
        return jsonify(res)
    else:
        res["status"] = False
        return jsonify(res)


if __name__ == "__main__":
    app.run(host="0.0.0.0")
