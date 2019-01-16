from flask import Flask, jsonify


app = Flask(__name__)


@app.route('/', methods=['GET'])
def ping_pong():
    return jsonify({
        'status': 'success',
        'message': 'pong!'
    })

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
