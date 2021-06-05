import { connect } from 'react-redux';
import { TRootStore } from '@app/reducers/index';
import Toolbar from '@app/components/toolbar/Toolbar';

const mapStateToProps = (state: TRootStore) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

const ToolbarContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Toolbar);

export default ToolbarContainer;
