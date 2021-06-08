import { connect } from 'react-redux';
import { TRootStore } from '@app/reducers/index';
import MapStyle from '@app/components/toolbar/mapStyle/MapStyle';
import operations from '@app/actions/toolbar/mapStyle/operations';

const mapStateToProps = (state: TRootStore) => {
    const {
        data,
        selection,
    } = state.setMapStyle;
    return {
        data,
        selection,
    };
};

const mapDispatchToProps = (dispatch) => ({
    changeMapStyleSelection: (selection: string) => {
        dispatch(operations.changeMapStyleSelection(selection));
    },
});

const MapStyleContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MapStyle);

export default MapStyleContainer;
