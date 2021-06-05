import { connect } from 'react-redux';
import { TRootStore } from '@app/reducers/index';
import Time from '@app/components/toolbar/time/Time';

const mapStateToProps = (state: TRootStore) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

const TimeContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Time);

export default TimeContainer;
