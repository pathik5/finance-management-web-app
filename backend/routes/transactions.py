from flask import Blueprint, jsonify

bp = Blueprint('transactions', __name__)

@bp.route('/', methods=['GET'])
def get_transactions():
    transactions = [
        {'id': 1, 'name': 'Spotify', 'amount': 9.99, 'date': '2024-11-01'},
        {'id': 2, 'name': 'Netflix', 'amount': 12.99, 'date': '2024-11-05'},
        {'id': 3, 'name': 'Amazon', 'amount': 119.00, 'date': '2024-11-15'},
    ]
    return jsonify(transactions)