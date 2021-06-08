import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Radio from '@common/radio/Radio';
import { IMapStyleDataItem } from '@app/reducers/toolbar/mapStyle/setMapStyle';

interface Props {
    data: IMapStyleDataItem[];
    selection: string;
    changeMapStyleSelection: (selection: string) => void;
}

interface StyleProps {
    active: boolean;
}
const MapStyleWrapper = styled.div<StyleProps>`
    > i {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: ${(props) => (props.active ? 'var(--themeColor)' : 'var(--white-two)')};
        &:hover {
            color: var(--themeColor);
        }
    }
`;
const MapStylePanel = styled.div<StyleProps>`
    visibility: ${(props) => (props.active ? 'visible' : 'hidden')};
    width: ${(props) => (props.active ? '150px' : 0)};
    position: absolute;
    left: 65px;
    margin-top: -50px;
    border-radius: 0 6px 6px 0;
    background-color: var(--dark-one);
    white-space: nowrap;
    transition: .3s;
    overflow: hidden;
`;
const PanelTitle = styled.p`
    width: 100%;
    padding: 6px;
    font-size: 14px;
`;
const PanelContent = styled.div`
    padding: 6px;
`;

function MapStyle(props: Props) {
    const [active, setActive] = useState<boolean>(false);

    const onClickBaseIcon = () => {
        setActive(!active);
    };

    return (
        <MapStyleWrapper active={active}>
            <i
                className="icon-layer"
                onClick={onClickBaseIcon}
            />
            <MapStylePanel active={active}>
                <PanelTitle>Map Style</PanelTitle>
                <PanelContent>
                    {
                        props.data.map((d) => (
                            <Radio
                                key={d.id}
                                active={d.name === props.selection}
                                onClick={(name: string) => props.changeMapStyleSelection(name)}
                            >
                                {d.name}
                            </Radio>
                        ))
                    }
                </PanelContent>
            </MapStylePanel>
        </MapStyleWrapper>
    );
}

export default MapStyle;
