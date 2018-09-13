import initialState from './initialState';

export default function cart(state = initialState.cart, action) {
    switch (action.type) {
		case 'ADD':
			action.item.quantity = action.item.quantity || 1 ;
		    if (state.some(e => e.itemName === action.item.itemName)) {
				action.item.quantity = action.item.quantity +1;
		    	return [...state]
			} 
		    return [...state, action.item]		
        case 'REMOVE':
		    if (action.item.quantity > 1) {
				action.item.quantity = action.item.quantity -1;
				return [...state];
			}
			return state.filter( i => i.itemName !== action.item.itemName);
		case 'REMOVE_ITEMS_FROM_CART':
			return state.filter( i => i.itemName !== action.item.itemName);
		case 'EMPTY_CART':
			return [...initialState.cart]
		default:
            return state;
	}
};