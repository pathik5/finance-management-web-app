from flask import Blueprint, jsonify

bp = Blueprint('investments', __name__)

@bp.route('/', methods=['GET'])
def get_investments():
    investments = [
        {'id': 1, 'name': 'Robinhood', 'value': 5010},
        {'id': 2, 'name': 'Wealthfront', 'value': 1986},
        {'id': 3, 'name': 'Coinbase', 'value': 1080},
    ]
    return jsonify(investments)