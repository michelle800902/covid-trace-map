import React, { useEffect } from 'react';
import styled from 'styled-components';

interface Props {
    //
}

const ZoomWrapper = styled.div`
    i {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        color: var(--white-two);
        &:hover {
            color: var(--blue-one);
        }
    }
`;

function Zoom(props: Props) {
    return (
        <ZoomWrapper>
            <i className="icon-zoom_in" />
            <i className="icon-zoom_out" />
        </ZoomWrapper>
    );
}

export default Zoom;
