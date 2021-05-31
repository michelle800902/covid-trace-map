import { connect } from 'react-redux';
import { GlobalType } from '@app/typings';
import Map from '@app/components/map/Map';

const mapStateToProps = (state: GlobalType.TRootStore) => {
    const {
        center,
        zoom,
        minZoom,
        maxZoom,
    } = state.setMap;
    return {
        center,
        zoom,
        minZoom,
        maxZoom,
    };
};

const mapDispatchToProps = (dispatch) => ({
    //
});

const MapContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Map);

export default MapContainer;
