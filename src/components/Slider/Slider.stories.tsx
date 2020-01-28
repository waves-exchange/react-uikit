import React, { useCallback, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTheme } from '../../themes/default';
import { ThemeProvider } from 'emotion-theming';
import { Box } from '../Box/Box';
import { Slider } from './Slider';
import { Text } from '../Text/Text';
import { SliderTrack } from './SliderTrack';
import { SliderFilledTrack } from './SliderFilledTrack';
import { SliderThumb } from './SliderThumb';
import { SliderLegendLabel } from './SliderLegendLabel';

const stories = storiesOf('Slider', module);

stories.add('simple', () => {
    const [value, setValue] = useState<number>(25);
    const onChangeValue = useCallback(
        (newValue: number) => {
            setValue(newValue);
        },
        [setValue]
    );

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box
                backgroundColor="main.$800"
                color="standard.$0"
                fontSize="$21"
                height="100vh"
                p={40}
            >
                <Text>Default. Value = {value}</Text>
                <Slider
                    name="A"
                    id="A"
                    value={value}
                    min={20}
                    max={70}
                    step={1}
                    labelInterval={3}
                    onChange={onChangeValue}
                    hasDefaultTooltip={true}
                    mt={10}
                    mb={50}
                >
                    <SliderLegendLabel />
                    <SliderTrack />
                    <SliderFilledTrack />
                    <SliderThumb />
                </Slider>

                <Box width="50%" mb={50}>
                    <Text>Default. Value = {value}</Text>
                    <Slider
                        name="B"
                        id="B"
                        value={value}
                        min={20}
                        max={70}
                        step={1}
                        labelInterval={5}
                        onChange={onChangeValue}
                        mt={10}
                    >
                        <SliderTrack />
                        <SliderFilledTrack height={4} />
                        <SliderThumb />
                        <SliderLegendLabel />
                    </Slider>
                </Box>

                <Text>Disabled</Text>
                <Slider
                    name="C"
                    id="C"
                    value={2}
                    min={1}
                    max={10}
                    isDisabled={true}
                    mt={10}
                    mb={40}
                >
                    <SliderTrack />
                    <SliderFilledTrack />
                    <SliderThumb />
                </Slider>
            </Box>
        </ThemeProvider>
    );
});
