import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


export const ExpenseList = props => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>

        <div className="list-body">
            {props.expenses.length === 0 ? (
                <div className="list-item list-item--message">
                    <span>No expenses to show</span>
                </div>
            ) : (
                props.expenses.map(value => (
                    <ExpenseListItem
                        key={value.id}
                        id={value.id}
                        description={value.description}
                        amount={value.amount}
                        createdAt={value.createdAt}
                    />
                ))
            )}
        </div>
    </div>
);


export default connect(state => {

    return {
       
        name: 'viper',

        

        expenses: selectExpenses(state.expenses, state.filters),
    };
})(ExpenseList);

