import React from "react";
import { connect } from "react-redux";
import {thunkGetNetworks} from 'redux/networks/thunk'
import "./styles.scss";


interface DispatchProps {
  getNetworks: () => void;
}
interface StateProps {
  networks: any;
}
type IProps = StateProps & DispatchProps;

class App extends React.Component<IProps, any> {
  componentDidMount(){

  }

  render() {
    const {getNetworks} = this.props
    return (
      <div className="container">
        <div className="app">
          <div className="app__title">CityBikes Networks & Stations</div>
          <div className="app__table"><button onClick={getNetworks}>getNetworks</button></div>
          <div className="app__table">2</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any): StateProps => {
  return { networks: state.networks };
};
const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  getNetworks: () => {
    dispatch(thunkGetNetworks());
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
