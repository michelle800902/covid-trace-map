import { connect } from 'react-redux';
import { TRootStore } from '@app/reducers/index';
import Polygon from '@app/components/toolbar/polygon/Polygon';

const mapStateToProps = (state: TRootStore) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

const PolygonContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Polygon);

export default PolygonContainer;
