from flask import Blueprint, jsonify

bp = Blueprint('accounts', __name__)

@bp.route('/', methods=['GET'])
def get_accounts():
    accounts = [
        {'id': 1, 'name': 'Chase Credit Card', 'type': 'Credit Card', 'balance': 6507},
        {'id': 2, 'name': 'Total Checking', 'type': 'Bank Account', 'balance': 7399},
        {'id': 3, 'name': 'Coinbase', 'type': 'Investment', 'balance': 1080},
    ]
    return jsonify(accounts)