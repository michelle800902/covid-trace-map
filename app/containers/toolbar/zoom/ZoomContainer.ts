import { connect } from 'react-redux';
import { TRootStore } from '@app/reducers/index';
import Zoom from '@app/components/toolbar/zoom/Zoom';

const mapStateToProps = (state: TRootStore) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

const ZoomContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Zoom);

export default ZoomContainer;
