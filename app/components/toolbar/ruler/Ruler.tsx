import React, { useEffect } from 'react';
import styled from 'styled-components';

interface Props {
    //
}

const RulerWrapper = styled.div`
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

function Ruler(props: Props) {
    return (
        <RulerWrapper>
            <i className="icon-ruler" />
        </RulerWrapper>
    );
}

export default Ruler;
