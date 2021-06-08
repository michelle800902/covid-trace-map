import React, { useEffect } from 'react';
import styled from 'styled-components';

interface Props {
    //
}

const ExportWrapper = styled.div`
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

function Export(props: Props) {
    return (
        <ExportWrapper>
            <i className="icon-download" />
        </ExportWrapper>
    );
}

export default Export;
