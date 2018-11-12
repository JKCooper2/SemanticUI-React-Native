import type { Node } from 'react';

export type InputType = {
    label: string | Node | Object;
    type: 'text' | 'password';
    onChange: (value: string) => mixed;
    placeholder: string;
    disabled: boolean;
    loading: boolean;
    iconPosition: 'left' | 'right';
    labelPosition: 'left' | 'right';
    icon: string | Node | Object;
    error: boolean;
    defaultValue: string;
    transparent: boolean;
    fluid: boolean;
    value?: string;
};