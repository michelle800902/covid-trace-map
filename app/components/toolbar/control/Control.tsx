import React, { useEffect } from 'react';
import styled from 'styled-components';

interface Props {
    //
}

const ControlWrapper = styled.div`
    > i {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: var(--white-two);
        &:hover {
            color: var(--blue-one);
        }
    }
`;

function Control(props: Props) {
    return (
        <ControlWrapper>
            <i className="icon-control" />
        </ControlWrapper>
    );
}

export default Control;
