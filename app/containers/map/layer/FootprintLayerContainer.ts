import { connect } from 'react-redux';
import { GlobalType } from '@app/typings';
import FootprintLayer from '@app/components/map/layer/FootprintLayer';

const mapStateToProps = (state: GlobalType.TRootStore) => ({
    visible: true,
});

const mapDispatchToProps = (dispatch) => ({
    //
});

const FootprintLayerContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(FootprintLayer);

export default FootprintLayerContainer;
