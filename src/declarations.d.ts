declare module '@styled-system/should-forward-prop' {
    interface IShouldForwardPropFn {
        (propName: string): boolean;
    }

    const shouldForwardProp: IShouldForwardPropFn;

    // eslint-disable-next-line import/no-default-export
    export default shouldForwardProp;
}
