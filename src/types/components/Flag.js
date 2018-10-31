// @flow
type SizeType = 'tiny' | 'small' | 'medium' | 'large' | 'big';

export type FlagPropsType = {
    name: string;
    size: SizeType;
    shiny: boolean;
};