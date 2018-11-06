// @flow
import { getFontSize, getFontColor } from '~/components/Header/utils';

test('getFontSize - as', () => {
    expect(getFontSize('h1')).toBe(48);
});

test('getFontColor - disabled', () => {
    expect(getFontColor('red', false, true)).toBe('#d3d3d3');
});