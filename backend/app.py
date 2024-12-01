import os
from flask import Flask, jsonify
from supabase import create_client, Client

app = Flask(__name__)

# Load environment variables
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')

# Supabase credentials
SUPABASE_URL = os.getenv('SUPABASE_URL')
SUPABASE_KEY = os.getenv('SUPABASE_KEY')

# Initialize Supabase client
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

@app.route('/api/cashflow', methods=['GET'])
def get_cashflow():
    try:
        # Query for income and expenses
        income_data = supabase.table('income').select('*').execute()
        expenses_data = supabase.table('expenses').select('*').execute()
        
        # Extract data (you can modify as per your table structure)
        income = [item['amount'] for item in income_data.data]
        expenses = [item['amount'] for item in expenses_data.data]
        months = ['January', 'February', 'March', 'April']  # Example months

        return jsonify({
            'income': income,
            'expenses': expenses,
            'months': months
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)