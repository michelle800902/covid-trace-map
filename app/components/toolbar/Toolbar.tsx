import React, { useEffect } from 'react';
import styled from 'styled-components';
import TimeContainer from '@app/containers/toolbar/time/TimeContainer';
import BaseContainer from '@app/containers/toolbar/base/BaseContainer';
import ZoomContainer from '@app/containers/toolbar/zoom/ZoomContainer';

interface Props {
    //
}

const ToolbarWrapper = styled.div`
    position: absolute;
    width: 65px;
    height: 100%;
    font-weight: bold;
    color: var(--white);
    background-color: var(--dark-one);
`;
const Logo = styled.div`
    padding: 8px 0;
    text-align: center;
    background-color: var(--black);
    img {
        width: 100%;
    }
`;

function Toolbar(props: Props) {
    return (
        <ToolbarWrapper>
            <Logo>
                <img src="favicon.ico" alt="logoImg" />
                COVID-19
                TraceMap
            </Logo>
            <TimeContainer />
            <BaseContainer />
            <ZoomContainer />
        </ToolbarWrapper>
    );
}

export default Toolbar;
