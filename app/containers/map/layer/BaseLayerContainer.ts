import { connect } from 'react-redux';
import { GlobalType } from '@app/typings';
import BaseLayer from '@app/components/map/layer/BaseLayer';

const mapStateToProps = (state: GlobalType.TRootStore) => {
    const {
        mapStyle,
        visible,
    } = state.setLayer.baseLayer;
    return {
        mapStyle,
        visible,
    };
};

const mapDispatchToProps = (dispatch) => ({
    //
});

const BaseLayerContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(BaseLayer);

export default BaseLayerContainer;
