import addAllExpenses from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if there are no expenses', () => {
 
    const expenses = [];
    const totalExpenses = addAllExpenses(expenses);
    expect(totalExpenses).toBe(0);
});

test('should correctly add up a single expense', () => {


    const expense = [expenses[0]];
    const totalExpenses = addAllExpenses(expense);
    expect(totalExpenses).toBe(195);
});

test('should correctly add up multiple expenses', () => {
   

    const amounts = expenses.map(value => value.amount);
    const total = amounts.reduce((a, b) => a + b);

    expect(total).toBe(114195);
});
