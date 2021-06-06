import { connect } from 'react-redux';
import { TRootStore } from '@app/reducers/index';
import Ruler from '@app/components/toolbar/ruler/Ruler';

const mapStateToProps = (state: TRootStore) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

const RulerContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Ruler);

export default RulerContainer;
