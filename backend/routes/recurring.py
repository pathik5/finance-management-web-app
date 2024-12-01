from flask import Blueprint, jsonify

bp = Blueprint('recurring', __name__)

@bp.route('/', methods=['GET'])
def get_recurring_payments():
    recurring = [
        {'id': 1, 'name': 'Spotify', 'amount': 9.99, 'frequency': 'Monthly', 'next_payment': '2024-12-01'},
        {'id': 2, 'name': 'Netflix', 'amount': 12.99, 'frequency': 'Monthly', 'next_payment': '2024-12-05'},
        {'id': 3, 'name': 'Amazon Prime', 'amount': 119.00, 'frequency': 'Annually', 'next_payment': '2025-05-05'},
    ]
    return jsonify(recurring)