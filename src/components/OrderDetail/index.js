import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { selectCurrentOrder } from '../../selector';
import { setUpProduct } from '../actions';

class OrderDetail extends React.Component {

  handleSetUpProduct = (productId, ordenId) => () => {
    const { setUpProductAction } = this.props
    setUpProductAction(productId, ordenId)
  }

  mostrarProductosState = (product, orden) => {
    const divStyle = {
      color: 'white',
      background: 'green',
    };
    const { productsReady } = this.props;
    const productReady = productsReady.filter(productReady => {
      if (productReady.productId === product._id && orden._id === productReady.ordenId) {
        return true;
      } else {
        return false;
      }
    }).length

    if (productReady) {
      
      return 'Alistado', divStyle;
    } else {
      return 'No alistado';
    }
  }

  getProductState = product => {
    const { productsReady } = this.props;
    const productReady = productsReady.filter(productReady => {
      if (productReady.productId === product._id) {
        return true;
      } else {
        return false;
      }
    }).length

    if (productReady) {
      return 'alistado';
    } else {
      return 'no-alistado';
    }
  }

  render() {
    const { currentOrder } = this.props;
    if (!currentOrder) {
      return (
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">Order not found</h1>
            <hr />
          </div>
        </div>
      )
    }

    return (
      <Fragment>
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">{currentOrder.user.name} <span className="badge badge-secondary">{currentOrder.region_code}</span></h1>
            <hr />
            {currentOrder._id}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Products</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th className="text-right" scope="col">Price</th>
                    <th className="text-center" scope="col">Quantity</th>
                    <th className="text-right" scope="col">Total</th>
                    <th className="text-right" scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {currentOrder.products.map(product => (
                    <tr key={product._id}>
                      <th scope="row">{product._id}</th>
                      <td>{product.name}</td>
                      <td className="text-right">${product.price}</td>
                      <td className="text-center">{product.quantity}</td>
                      <td className="text-right">${product.total}</td>
                      <td className="text-right">
                        <button
                          className="btn btn-primary"
                          type="button"
                          onClick={this.handleSetUpProduct(product._id, currentOrder._id)}
                        >
                          {this.mostrarProductosState(product, currentOrder)}
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                    <td className="text-center">Total</td>
                    <td className="text-right">${currentOrder.products.reduce((acc, product) => acc + product.total, 0)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <hr />
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  currentOrder: selectCurrentOrder(state, ownProps.match.params.orderId),
  productsReady: state.productsReady
});

const mapDispatchToProps = dispatch => ({
  setUpProductAction: (productId, ordenId) => dispatch(setUpProduct(productId, ordenId))
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(OrderDetail);
