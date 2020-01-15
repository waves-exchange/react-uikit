import React from 'react';
import { render, RenderResult, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'emotion-theming';

type ProvidersWrapperProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    theme: any;
};
const ProvidersWrapper: React.FC<ProvidersWrapperProps> = ({
    theme,
    children,
}) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

interface CustomRenderOptions extends RenderOptions {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    theme: any;
}

type CustomRender = (
    Component: React.ReactElement,
    options: CustomRenderOptions
) => RenderResult;

const customRender: CustomRender = (Component, { theme, ...options }) => {
    return render(
        <ProvidersWrapper theme={theme}>{Component}</ProvidersWrapper>,
        options
    );
};

export * from '@testing-library/react';
export { customRender as render };
