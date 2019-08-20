export const selectOrdersReadyByRoute = state =>{
    const { orders } = state;
    const routes = {};
    orders.forEach((orden) => {
        routes[orden.routeId] = orden.region_code;
    })
    return routes;
}
export const selectCurrentOrder = (state, orderId) => {
    const [order] = state.orders.filter(order => {
        return order._id === orderId
    })
    return order;
}