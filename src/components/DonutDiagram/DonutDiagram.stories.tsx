import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from '../Box/Box';
import { defaultTheme } from '../../themes/default';
import { ThemeProvider } from 'emotion-theming';
import { DonutDiagram } from './DonutDiagram';

const stories = storiesOf('Donut Diagram', module);

stories.add('simple', () => {
    const [value, setValue] = useState(0);

    setTimeout(() => {
        setValue(0.5);
    }, 3000);

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box>
                <DonutDiagram
                    value={0.25}
                    baseColor="#80c726"
                    valueColor="primary.$300"
                    border={12}
                    size={112}
                />
                <DonutDiagram
                    value={value}
                    easing={'ease-out'}
                    animationTime={1000}
                    baseColor="danger.$300"
                    valueColor="primary.$300"
                    border={40}
                    size={112}
                />
                <DonutDiagram
                    value={0.5}
                    valueColor="success.$500"
                    baseColor="transparent"
                    border={20}
                    size={150}
                />
                <DonutDiagram
                    value={0.1}
                    baseColor="danger.$300"
                    valueColor="primary.$300"
                    size={112}
                    border={2}
                />
                <DonutDiagram
                    value={0.75}
                    baseColor="danger.$300"
                    valueColor="primary.$300"
                    size={300}
                    border="none"
                />
            </Box>
        </ThemeProvider>
    );
});
