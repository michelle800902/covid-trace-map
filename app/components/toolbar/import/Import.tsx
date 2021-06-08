import React, { useEffect } from 'react';
import styled from 'styled-components';

interface Props {
    //
}

const ImportWrapper = styled.div`
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

function Import(props: Props) {
    return (
        <ImportWrapper>
            <i className="icon-upload" />
        </ImportWrapper>
    );
}

export default Import;
