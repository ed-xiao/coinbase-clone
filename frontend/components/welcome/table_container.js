import { connect } from "react-redux";
import Table from "./table";
import { fetchCrypto } from "../../actions/crypto_actions";

const mapStateToProps = (state) => {
  let cryptos = state.entities.cryptos;
  return {
    cryptos: cryptos
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCryptos: () => dispatch(fetchCrypto("all"))
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
