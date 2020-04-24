import React from "react";
import {connect} from "react-redux";
import {thunkGetNetworks} from "redux/networks/thunk";
import { thunkGetStations } from "redux/stations/thunk";
import Table from "components/Table";
import "./styles.scss";


interface DispatchProps {
  getNetworks: () => void;
  getStations: (href: string) => void;
}


interface StateProps {
  networks: any;
}

type IProps = StateProps & DispatchProps;

class App extends React.Component<IProps, any> {
  componentDidMount() {
    const {getNetworks} = this.props;
    getNetworks();
  }

  render() {
    const {networks, getStations} = this.props;
    return (
      <div className="container">
        <div className="app">
          <div className="app__title">CityBikes Networks & Stations</div>
          <div className="app__table">{networks && <div>
            <div className="app__table-header"> Networks</div>
            <Table data={networks.data} onRowClick={getStations} />
          </div>}</div>
          <div className="app__table">2</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any): StateProps => {
  return {networks: state.citybikesNetworks};
};
const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  getNetworks: () => {
    dispatch(thunkGetNetworks());
  },
  getStations: (href: string) => {
    dispatch(thunkGetStations(href))
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
