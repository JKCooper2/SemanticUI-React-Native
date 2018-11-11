// @flow
import { getFontSize, getFontColor } from '~/components/Header/utils';

test('getFontSize - as', () => {
    expect(getFontSize('h1')).toBe(48);
});

test('getFontColor - disabled', () => {
    expect(getFontColor('red', false, true)).toBe('#e8e8e8');
});