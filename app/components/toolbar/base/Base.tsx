import React, { useEffect } from 'react';
import styled from 'styled-components';

interface Props {
    //
}

const BaseWrapper = styled.div`
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

function Base(props: Props) {
    return (
        <BaseWrapper>
            <i className="icon-mapsource" />
        </BaseWrapper>
    );
}

export default Base;
