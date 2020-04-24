import React from "react";
import {connect} from "react-redux";
import {thunkGetNetworks} from "redux/networks/thunk";
import {thunkGetStations} from "redux/stations/thunk";
import {actionSetActiveNetwork} from "redux/networks/actions";
import Table from "components/Table";
import "./styles.scss";


interface DispatchProps {
  getNetworks: () => void;
  getStations: (href: string, id: string) => void;
  setActiveNetwork: (id: string) => void;
}


interface StateProps {
  networks: any;
  stations: any;
}

type IProps = StateProps & DispatchProps;

class App extends React.Component<IProps, any> {
  componentDidMount() {
    const {getNetworks} = this.props;
    getNetworks();
  }
  onNetworkClick = (href: string, id: string) => {
    const {getStations, setActiveNetwork} = this.props;
    getStations(href, id);
    setActiveNetwork(id)
  }
  render() {
    const {networks, stations} = this.props;
    return (
      <div className="container">
        <div className="app">
          <div className="app__title">CityBikes Networks & Stations</div>
            <div className="app__table">
              {networks && <div>
                <div className="app__table-header">Networks</div>
                  <Table data={networks.data} onRowClick={this.onNetworkClick}/>
                </div>
              }
          </div>
          <div className="app__table">
            {stations && <div>
              <div className="app__table-header">Stations</div>
              <Table data={stations.data} onRowClick={()=>{}}/>
            </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any): StateProps => {
  return {
    networks: state.citybikesNetworks,
    stations: state.citybikesStations
  };
};
const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  getNetworks: () => {
    dispatch(thunkGetNetworks());
  },
  getStations: (href: string, id: string) => {
    dispatch(thunkGetStations(href))
  },
  setActiveNetwork: (id: string) => {
    dispatch(actionSetActiveNetwork(id))
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
