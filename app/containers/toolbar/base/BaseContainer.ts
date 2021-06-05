import { connect } from 'react-redux';
import { TRootStore } from '@app/reducers/index';
import Base from '@app/components/toolbar/base/Base';

const mapStateToProps = (state: TRootStore) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

const BaseContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Base);

export default BaseContainer;
