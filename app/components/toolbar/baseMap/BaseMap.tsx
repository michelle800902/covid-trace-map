import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Radio from '@common/radio/Radio';

interface Props {
    //
}

interface StyleProps {
    active: boolean;
}
const BaseMapWrapper = styled.div<StyleProps>`
    > i {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: ${(props) => (props.active ? 'var(--blue-one)' : 'var(--white-two)')};
        &:hover {
            color: var(--blue-one);
        }
    }
`;
const BaseMapPanel = styled.div<StyleProps>`
    visibility: ${(props) => (props.active ? 'visible' : 'hidden')};
    width: ${(props) => (props.active ? '150px' : 0)};
    position: absolute;
    left: 65px;
    margin-top: -50px;
    border-radius: 0 6px 6px 0;
    background-color: var(--dark-one);
    transition: .3s;
    overflow: hidden;
`;
const PanelTitle = styled.p`
    width: 100%;
    padding: 6px;
    white-space: nowrap;
`;
const PanelContent = styled.div`
    padding: 6px;
`;

function BaseMap(props: Props) {
    const [active, setActive] = useState<boolean>(false);

    const onClickBaseIcon = () => {
        setActive(!active);
    };

    return (
        <BaseMapWrapper active={active}>
            <i
                className="icon-layer"
                onClick={onClickBaseIcon}
            />
            <BaseMapPanel active={active}>
                <PanelTitle>Base Map Layer</PanelTitle>
                <PanelContent>
                    <Radio active={true} onClick={() => {}}>1</Radio>
                    <Radio active={true} onClick={() => {}}>2</Radio>
                    <Radio active={true} onClick={() => {}}>3</Radio>
                </PanelContent>
            </BaseMapPanel>
        </BaseMapWrapper>
    );
}

export default BaseMap;
