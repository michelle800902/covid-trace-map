import { connect } from 'react-redux';
import { TRootStore } from '@app/reducers/index';
import Import from '@app/components/toolbar/import/Import';

const mapStateToProps = (state: TRootStore) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

const ImportContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Import);

export default ImportContainer;
