// @flow
import React, { Fragment } from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import Container from '~/components/Container';

const containerStories = storiesOf('Container', module);

containerStories.add('Standard', () => (
    <Container>
        <Text>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
            dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
            pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
            vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo
            ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
            in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
            Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
            ultricies nisi.
        </Text>
        <Text>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
            dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
            pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
            vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo
            ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
            in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
            Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
            ultricies nisi.
        </Text>
    </Container>
));

containerStories.add('Text', () => (
    <Container text>
        <Text>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
            dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
            pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
            vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo
            ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
            in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
            Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
            ultricies nisi.
        </Text>
        <Text>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
            dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
            pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
            vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo
            ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
            in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
            Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
            ultricies nisi.
        </Text>
    </Container>
));

containerStories.add('Text Align', () => (
    <Fragment>
        <Container textAlign="left">
            <Text>Left Aligned</Text>
        </Container>
        <Container textAlign="center">
            <Text>Center Aligned</Text>
        </Container>
        <Container textAlign="right">
            <Text>Right Aligned</Text>
        </Container>
    </Fragment>
));

containerStories.add('Fluid', () => (
    <Container fluid>
        <Text>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
            dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
            pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
            vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo
            ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
            in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
            Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
            ultricies nisi.
        </Text>
        <Text>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
            dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
            pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
            vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo
            ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
            in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
            Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
            ultricies nisi.
        </Text>
    </Container>
));

export default containerStories;
