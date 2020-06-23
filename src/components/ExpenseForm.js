import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
   
    constructor(props) {
        super(props);

        

        this.state = {
            description: props.expense ? props.expense.description : '',
            noteText: props.expense ? props.expense.noteText : '',
            amount: props.expense
                ? (props.expense.amount / 100).toString()
                : '',
            createdAt: props.expense
                ? moment(props.expense.createdAt)
                : moment(),
            calendarFocused: false,
            error: '',
        };
    }

    onDescriptionChange = e => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onAmountChange = e => {
        const amount = e.target.value;
       

        const myRegex = /^\d{1,}(\.\d{0,2})?$/;

      
        if (!amount || amount.match(myRegex)) {
            this.setState(() => ({ amount }));
        }
    };

    onDateChange = createdAt => {
  
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };

   
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    onNoteChange = e => {
        
        const noteText = e.target.value;
        this.setState(() => ({ noteText }));
    };

    onSubmit = e => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
           
            this.setState(() => ({
                error: 'please provide amount and description',
            }));
        } else {
           
            this.setState(() => ({ error: '' }));

        
            this.props.onSubmit({
                description: this.state.description,
                
                amount: parseFloat(this.state.amount, 10) * 100,
               
                createdAt: this.state.createdAt.valueOf(),
                noteText: this.state.noteText,
            });
        }
    };

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && (
                    <p className="form__error">{this.state.error}</p>
                )}
                <input
                    className="text-input"
                    type="text"
                    
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                    placeholder="Description"
                    autoFocus
                />

                <input
                    className="text-input"
                    type="text"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    placeholder="Amount"
                />

                <SingleDatePicker
                  
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                  
                    isOutsideRange={() => false}
                />

                <textarea
                    className="text-area"
                    placeholder="Add a note for your expense (optional)"
                    value={this.state.noteText}
                    onChange={this.onNoteChange}
                />

                <div>
                    <button className="button">Save Expense</button>
                </div>
            </form>
        );
    }
}
