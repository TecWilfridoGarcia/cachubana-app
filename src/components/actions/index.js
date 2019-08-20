export const setUpProduct = (productoId, ordenId) =>({
    type:'@@PRODUCTS/TOGGLE_READY',
    payload:{
        productId: productoId,
        ordenId: ordenId
    }
})