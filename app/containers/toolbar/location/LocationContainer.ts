import { connect } from 'react-redux';
import { TRootStore } from '@app/reducers/index';
import Location from '@app/components/toolbar/location/Location';

const mapStateToProps = (state: TRootStore) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

const LocationContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Location);

export default LocationContainer;
