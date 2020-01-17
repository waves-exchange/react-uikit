import React, {
    FC,
    Children,
    isValidElement,
    cloneElement,
    useState,
    createContext,
    useCallback,
    useContext,
} from 'react';
import { Box, BoxProps } from '../Box/Box';
import { Flex, TFlexProps } from '../Flex/Flex';

type TabContextType = {
    selectedIndex: number;
    onChangeTab: (index: number, value: unknown) => void;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TabContext = createContext<TabContextType>(undefined as any);

type TabsProps = Omit<BoxProps, 'onChange'> & {
    selectedIndex?: number;
    value?: unknown;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange?: (value: any) => void;
};

export const Tabs: FC<TabsProps> = ({
    selectedIndex,
    onChange,
    children,
    ...rest
}) => {
    const [index, setIndex] = useState(selectedIndex || 0);

    const onChangeTab = useCallback(
        (index: number, boundValue: unknown) => {
            setIndex(index);

            if (typeof onChange === 'function') {
                onChange(boundValue);
            }
        },
        [setIndex, onChange]
    );

    const context: TabContextType = {
        selectedIndex: index,
        onChangeTab,
    };

    return (
        <TabContext.Provider value={context}>
            <Box {...rest}>{children}</Box>
        </TabContext.Provider>
    );
};

type TabListProps = TFlexProps & {};

export const TabsList: FC<TabListProps> = ({ children, ...rest }) => {
    const { selectedIndex, onChangeTab } = useContext(TabContext);

    return (
        <Flex {...rest}>
            {Children.map(children, (child, index) => {
                if (!isValidElement(child)) {
                    return;
                }

                return cloneElement<TabProps>(child, {
                    selected: index === selectedIndex,
                    onClick: (e) => {
                        if (child.props.disabled) {
                            return;
                        }

                        if (selectedIndex !== index) {
                            onChangeTab(index, child.props.value);

                            if (typeof child.props.onClick === 'function') {
                                child.props.onClick(e);
                            }
                        }
                    },
                });
            })}
        </Flex>
    );
};

type TabProps = BoxProps & {
    value?: unknown;
    selected?: boolean;
    disabled?: boolean;
};

export const Tab: FC<TabProps> = ({
    selected,
    disabled,
    children,
    ...rest
}) => (
    <Box
        aria-selected={selected}
        aria-disabled={disabled}
        color={selected ? 'standard.$0' : 'basic.$500'}
        borderBottom={selected ? '2px solid' : 0}
        borderBottomColor="primary.$300"
        cursor="default"
        {...rest}
    >
        {children}
    </Box>
);

Tab.defaultProps = {
    selected: false,
    disabled: false,
};

type TabPanelsProps = BoxProps & {};

export const TabPanels: FC<TabPanelsProps> = ({ children, ...rest }) => {
    const { selectedIndex } = useContext(TabContext);

    return (
        <Box {...rest}>
            {Children.map(children, (child, index) => {
                if (!isValidElement(child)) {
                    return;
                }

                return cloneElement<TabPanelProps>(child, {
                    selected: index === selectedIndex,
                });
            })}
        </Box>
    );
};

type TabPanelProps = BoxProps & {
    selected?: boolean;
};

export const TabPanel: FC<TabPanelProps> = (
    { children, selected },
    ...rest
) => <Box {...rest}>{selected ? children : null}</Box>;
