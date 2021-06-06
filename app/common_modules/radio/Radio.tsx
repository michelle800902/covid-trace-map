import React, { FC } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

interface Props {
    theme?: string | 'light' | 'dark';
    active: boolean;
    children?: any;
    customStyle?: string;
    onClick: (value: string) => void;
}

interface StyleProps {
    active: boolean;
    customStyle?: string;
}
const RadioStyle = styled.div<StyleProps>`
    ${({ customStyle }) => customStyle || ''}
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    line-height: var(--lineHeight);
    font-size: 0.75rem;
    font-weight: ${(props) => (props.active ? 600 : 500)};
    color: ${(props) => (props.active ? 'var(--themeColor)' : 'var(--gray-two)')};
    cursor: pointer;
    > i {
        margin-right: 6px;
        &::before {
            width: auto;
        }
    }
`;
const RadioText = styled.div<{ active: boolean, theme: 'light' | 'dark' }>`
    display: contents;
    color: ${(props) => (
        props.active
            ? props.theme === 'dark' ? 'var(--white-one)' : 'var(--dark-one)'
            : 'var(--gray-two)'
    )};
`;

const Radio: FC<Props> = ({ theme, active, children, onClick, customStyle }: Props) => {
    function handleRadioClick() {
        onClick(children);
    }
    return (
        <RadioStyle
            active={active}
            onClick={handleRadioClick}
            customStyle={customStyle}
        >
            <i
                className={classnames('', {
                    'icon-radio_y': active,
                    'icon-radio_n': !active,
                })}
            />
            <RadioText active={active} theme={theme}>
                {children}
            </RadioText>
        </RadioStyle>
    );
};

Radio.defaultProps = {
    theme: 'dark',
    children: undefined,
    customStyle: '',
};

export default Radio;
