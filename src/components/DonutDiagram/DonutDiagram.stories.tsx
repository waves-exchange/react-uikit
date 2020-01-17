import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from '../Box/Box';
import { defaultTheme } from '../../themes/default';
import { ThemeProvider } from 'emotion-theming';
import { DonutDiagram } from './DonutDiagram';

const stories = storiesOf('Donut Diagram', module);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Box>
            <DonutDiagram value={0.25} />
            <DonutDiagram value={0.25} baseColor="danger.$300" border={40} />
            <DonutDiagram
                value={0.5}
                valueColor="success.$500"
                border={20}
                size={150}
            />
            <DonutDiagram value={0.1} baseColor="danger.$300" border={2} />
            <DonutDiagram
                value={0.75}
                baseColor="danger.$300"
                size={300}
                border={150}
            />
        </Box>
    </ThemeProvider>
));
