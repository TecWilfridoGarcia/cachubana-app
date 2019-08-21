import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class OrderTable extends React.Component {
  getPorcentaje = (order) => {
    const { productsReady } = this.props;
    
    const ordenesActualizadas = order.products.filter(product => {
      if (productsReady.filter((productReady) => {
        if (productReady.productId === product._id && productReady.ordenId === order._id) {
          return true;
        } else {
          return false;
        }
      }).length) {
        return true;
      } else {
        return false;
      }
    })

    return Math.round(((ordenesActualizadas.length * 100) / order.products.length));
  }

  render() {
    const { orders } = this.props;

    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Ruta</th>
            <th scope="col">Horario</th>
            <th scope="col">%</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <th scope="row">{order._id}</th>
              <td>{order.user.name}</td>
              <td>{order.region_code}</td>
              <td>{order.slot}</td>
              <td>{this.getPorcentaje(order)}</td>
              <td>
                <Link to={`/orders/${order._id}`} className="btn btn-success">ver la orden</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => ({
  orders: state.orders,
  productsReady: state.productsReady,
})

export default connect(mapStateToProps)(OrderTable);