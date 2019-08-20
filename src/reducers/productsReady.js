const readyProducts = [];
export default (state = readyProducts, action) => {
    switch (action.type) {
        case '@@PRODUCTS/TOGGLE_READY':
            const exists = state.filter(product => (
                product.productId === action.payload.productId
            )).length
            if(exists) {
                return state.filter((product) =>(
                    product.productId !== action.payload.productId
                ))
            }
                else {
                    return [
                        ...state,
                        action.payload
                    ];
                }
                default:
                    return state;
            }
        };

