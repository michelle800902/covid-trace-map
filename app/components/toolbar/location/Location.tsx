import React, { useEffect } from 'react';
import styled from 'styled-components';

interface Props {
    //
}

const LocationWrapper = styled.div`
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

function Location(props: Props) {
    return (
        <LocationWrapper>
            <i className="icon-location" />
            <i className="icon-search_location" />
        </LocationWrapper>
    );
}

export default Location;
