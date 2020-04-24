import React from "react";
import {connect} from "react-redux";
import {thunkGetNetworks} from "redux/networks/thunk";
import {thunkGetStations} from "redux/stations/thunk";
import {actionSetActiveNetwork} from "redux/networks/actions";
import Table from "components/Table";
import Spinner from 'images/spinner.gif'
import "./styles.scss";

interface INetworkItem {
  id: string;
  title: string;
  href: string;
}
interface DispatchProps {
  getNetworks: () => void;
  getStations: (item: INetworkItem) => void;
  setActiveNetwork: (item: INetworkItem) => void;
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
  onNetworkClick = (item: INetworkItem) => {
    const {getStations, setActiveNetwork} = this.props;
    setActiveNetwork(item);
    getStations(item);
  }
  render() {
    const {networks, stations} = this.props;
    return (
      <div className="container">
        <div className="app">
          <div className="app__title">CityBikes Networks & Stations</div>
            <div className="app__table">
              {networks.data && networks.activeNetwork ? <div>
                <div className="app__table-header">Networks. Active network: {networks.activeNetwork.title}</div>
                  <Table data={networks.data} onRowClick={this.onNetworkClick}/>
                </div> : <img className="app__spinner" src={Spinner}/>
              }
          </div>
          <div className="app__table">
            {!stations.isStationsLoading  ? <div>
              <div className="app__table-header">Stations. Total at the network: {stations.data && stations.data.length}</div>
              <Table data={stations.data} onRowClick={()=>{}}/>
            </div> : <img className="app__spinner" src={Spinner}/>
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
  getStations: (item: INetworkItem) => {
    dispatch(thunkGetStations(item))
  },
  setActiveNetwork: (item: INetworkItem) => {
    dispatch(actionSetActiveNetwork(item))
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
