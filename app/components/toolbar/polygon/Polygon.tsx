import React, { useEffect } from 'react';
import styled from 'styled-components';

interface Props {
    //
}

const PolygonWrapper = styled.div`
    > i {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: var(--white-two);
        &:hover {
            color: var(--themeColor);
        }
    }
`;

function Polygon(props: Props) {
    return (
        <PolygonWrapper>
            <i className="icon-polygon" />
        </PolygonWrapper>
    );
}

export default Polygon;
