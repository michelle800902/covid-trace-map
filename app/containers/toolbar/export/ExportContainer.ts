import { connect } from 'react-redux';
import { TRootStore } from '@app/reducers/index';
import Export from '@app/components/toolbar/export/Export';

const mapStateToProps = (state: TRootStore) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

const ExportContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Export);

export default ExportContainer;
