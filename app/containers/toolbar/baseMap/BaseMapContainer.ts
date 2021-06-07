import { connect } from 'react-redux';
import { TRootStore } from '@app/reducers/index';
import BaseMap from '@app/components/toolbar/baseMap/BaseMap';

const mapStateToProps = (state: TRootStore) => {
    const {
        data,
        selected,
    } = state.setBaseMap;
    return {
        data,
        selected,
    };
};

const mapDispatchToProps = (dispatch) => ({

});

const BaseMapContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(BaseMap);

export default BaseMapContainer;
