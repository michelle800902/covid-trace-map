import { connect } from 'react-redux';
import Map from '@app/components/map/Map';

const mapStateToProps = (state) => ({
    //
});

const mapDispatchToProps = (dispatch) => ({
    //
});

const MapContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Map);

export default MapContainer;
