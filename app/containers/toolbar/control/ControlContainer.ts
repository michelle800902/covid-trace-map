import { connect } from 'react-redux';
import { TRootStore } from '@app/reducers/index';
import Control from '@app/components/toolbar/control/Control';

const mapStateToProps = (state: TRootStore) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

const ControlContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Control);

export default ControlContainer;
