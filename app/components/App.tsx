import React, { useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from '@common/globalStyle';
import MapContainer from '@app/containers/map/MapContainer';

interface Props {
    //
}

const AppWrapper = styled.div`
`;

function App(props: Props) {
    return (
        <AppWrapper className="wrapper">
            <GlobalStyle />
            <MapContainer />
        </AppWrapper>
    );
}

export default App;
