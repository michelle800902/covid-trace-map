import React, { useEffect } from 'react';
import styled from 'styled-components';
import ControlContainer from '@app/containers/toolbar/control/ControlContainer';
import LocationContainer from '@app/containers/toolbar/location/LocationContainer';
import PolygonContainer from '@app/containers/toolbar/polygon/PolygonContainer';
import RulerContainer from '@app/containers/toolbar/ruler/RulerContainer';
import ImportContainer from '@app/containers/toolbar/import/ImportContainer';
import ExportContainer from '@app/containers/toolbar/export/ExportContainer';
import MapStyleContainer from '@app/containers/toolbar/mapStyle/MapStyleContainer';
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
            <ControlContainer />
            <LocationContainer />
            <PolygonContainer />
            <RulerContainer />
            {/* <ImportContainer />
            <ExportContainer /> */}
            <MapStyleContainer />
            <ZoomContainer />
        </ToolbarWrapper>
    );
}

export default Toolbar;
