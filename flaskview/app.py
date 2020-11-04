from flask import *
from flask_cors import CORS

app = Flask(__name__)
CORS(app, supports_credentials=True)

user = {
    'admin': {
        'username': 'admin',
        'password': '123',
        'email': '1628245977@qq.com'
    }
}


@app.route('/', methods=["GET"])
def index():
    return 'GATES FINANCE TECHNOLOGY'


@app.route('/login', methods=["POST"])
def login():
    res = {}
    loginData = request.get_json()
    if loginData['username'] in user.keys() and user[loginData['username']]['password'] == loginData["password"]:
        res['status'] = True
        res['username'] = loginData['username']
        return jsonify(res)
    else:
        res["status"] = False
        return jsonify(res)


@app.route('/register', methods=["POST"])
def register():
    res = {}
    regData = request.get_json()
    # username.append(regData["username"])
    # password.append(regData["password"])
    user[regData['username']]['username'] = regData['username']
    user[regData['username']]['password'] = regData['password']
    user[regData['username']]['email'] = regData['email']
    res['status'] = True
    return res


if __name__ == "__main__":
    app.run(host="0.0.0.0")
