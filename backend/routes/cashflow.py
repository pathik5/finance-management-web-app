from flask import Blueprint, jsonify

bp = Blueprint('cashflow', __name__)

@bp.route('/', methods=['GET'])
def get_cashflow():
    cashflow = {
        'income': [5000, 4500, 6000, 5500, 7000],
        'expenses': [4000, 3500, 4200, 3900, 5000],
        'months': ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    }
    return jsonify(cashflow)