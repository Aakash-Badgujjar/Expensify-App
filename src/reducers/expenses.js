const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':

            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(value => value.id !== action.id);

   

        case 'EDIT_EXPENSE':
            return state.map(value => {
                return value.id === action.id
                    ? { ...value, ...action.updates }
                    : value;
            });

        case 'SET_EXPENSES':
    
            return action.expenses;

        default:
            return state;
    }
};

export default expensesReducer;
