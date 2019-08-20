import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import OrderTable from '../OrderTable';
import { selectOrdersReadyByRoute } from '../../selector';

const Dashboard = ({ routes }) => {

  return (
    <Fragment>
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">Órdenes alistadas por ruta</h1>
          <hr />
          {Object.keys(routes).map((ruta) => (
            <button key={ruta} type="button" className="btn ml-2 btn-primary">
              {routes[ruta]} <span className="badge badge-light">0</span>
            </button>
          ))}
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
};

const mapStateToProps = state => ({
  routes: selectOrdersReadyByRoute(state),
});

export default connect(mapStateToProps)(Dashboard);