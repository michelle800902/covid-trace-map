import { connect } from 'react-redux';
import { TRootStore } from '@app/reducers/index';
import BaseMap from '@app/components/toolbar/baseMap/BaseMap';

const mapStateToProps = (state: TRootStore) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

const BaseMapContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(BaseMap);

export default BaseMapContainer;
