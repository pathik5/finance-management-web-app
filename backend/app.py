from flask import Flask
from routes import transactions, accounts, investments, cashflow, recurring
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend-backend communication

# Register Blueprints
app.register_blueprint(transactions.bp, url_prefix='/api/transactions')
app.register_blueprint(accounts.bp, url_prefix='/api/accounts')
app.register_blueprint(investments.bp, url_prefix='/api/investments')
app.register_blueprint(cashflow.bp, url_prefix='/api/cashflow')
app.register_blueprint(recurring.bp, url_prefix='/api/recurring')

if __name__ == '__main__':
    app.run(debug=True)