"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@storybook/react");
var default_1 = require("themes/default");
var emotion_theming_1 = require("emotion-theming");
var Flex_1 = require("components/Flex/Flex");
var Logo_1 = require("./Logo");
var stories = react_2.storiesOf('Close', module);
stories.add('simple', function () { return (<emotion_theming_1.ThemeProvider theme={default_1.defaultTheme}>
        <Flex_1.Flex flexDirection="row" p="16">
            <Flex_1.Flex flexDirection="column" mr="16">
                <Logo_1.Logo />
                <Logo_1.Logo size={80}/>
            </Flex_1.Flex>
        </Flex_1.Flex>
    </emotion_theming_1.ThemeProvider>); });
