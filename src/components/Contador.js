import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decrementar, encrementar } from '../Redux/actions';

class Contador extends Component {
  render() {
    const { numero, encrementa, decrementa } = this.props;
    return (
      <div>
        <span>{numero}</span>
        <div>
          <button onClick={encrementa} type="button">Incrementar</button>
          <button onClick={decrementa} type="button">descrementar</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  numero: state.counter.numero
})

// mapeando função para a propriedade encrementa na qual o contador receberá via props
const mapDispatchToProps = (dispatch) => ({
  encrementa: () => dispatch(encrementar()),
  decrementa: () => dispatch(decrementar()),
})

export default connect(mapStateToProps, mapDispatchToProps )(Contador);
