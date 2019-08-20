export const setUpProduct = (productId, orderId) =>({
    type:'@@PRODUCT/TOGGLE_READY',
    payload:{
        productId,
        orderId
    }
})