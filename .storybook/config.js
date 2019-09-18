import { configure, addParameters } from '@storybook/react';

addParameters({
    viewport: {
        defaultViewport: 'desktop',
        viewports: {
            iPhone: {
                name: 'iPhone 6/7/8',
                styles: {
                    width: '375px',
                    height: '667px'
                },
                type: 'mobile'
            },
            iPhonePlus: {
                name: 'iPhone 6/7/8 Plus',
                styles: {
                    width: '414px',
                    height: '736px'
                },
                type: 'mobile'
            },
            iPhoneX: {
                name: 'iPhone X',
                styles: {
                    width: '375px',
                    height: '812px'
                },
                type: 'mobile'
            },
            desktop: {
                name: 'Desktop full',
                type: 'desktop'
            },
        }
    },
});

const req = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
