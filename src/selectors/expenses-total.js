const getTotalExpenses = expenseArr => {
   

    return expenseArr.length === 0
        ? 0
        : expenseArr.map(value => value.amount).reduce((a, b) => a + b);
};

export default getTotalExpenses;
