import React, { Fragment } from 'react'
import OrderTable from '../../components/OrderTable';

const Warehouse = () => (
  <Fragment>
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3">Bodega</h1>
        <hr />
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Órdenes</h2>
          <OrderTable />
        </div>
      </div>
      <hr />
    </div>
  </Fragment>
);

export default Warehouse;