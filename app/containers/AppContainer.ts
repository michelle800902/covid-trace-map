import { connect } from 'react-redux';
import { TRootStore } from '@app/reducers/index';
import App from '@app/components/App';

const mapStateToProps = (state: TRootStore) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

export default AppContainer;
