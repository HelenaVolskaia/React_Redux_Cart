import initialState from './initialState';

export default (state = initialState.products, action) => {
    switch (action.type) {
		case 'ADD':
		    if (state.some(e => e.itemName === action.item.itemName)) {
				action.item.quantityRemaining = action.item.quantityRemaining -1;
		    	return [...state]
			} 
            return [...state, action.item]	
        case 'REMOVE':
            action.item.quantityRemaining = action.item.quantityRemaining +1;
            return [...state];
		default:
            return state;
	}
};