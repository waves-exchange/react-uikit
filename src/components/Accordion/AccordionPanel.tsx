import React, { useContext } from 'react';
import { Box, BoxProps } from '../Box/Box';
import { AccordionItemContext } from './AccordionItemContext';

const commonStyles = {
    fontSize: '$15',
    color: 'basic.$300',
    pr: 10,
    pl: 16,
    transition:
        'max-height .3s, padding-top .3s, padding-bottom .3s, margin-top .3s',
    overflow: 'hidden',
};

export const AccordionPanel: React.FC<BoxProps> = ({ children, ...rest }) => {
    const { isExpanded, isDisabled } = useContext(AccordionItemContext);
    const styles = isExpanded
        ? {
              ...commonStyles,
              maxHeight: 500,
              py: 12,
              mt: 10,
          }
        : {
              ...commonStyles,
              maxHeight: 0,
              py: 0,
          };

    return (
        <Box
            aria-disabled={isDisabled}
            aria-expanded={isExpanded}
            {...styles}
            {...rest}
        >
            <Box
                maxHeight={476}
                pr={6}
                overflowY="auto"
                sx={{
                    '::-webkit-scrollbar': {
                        width: 4,
                    },
                    '::-webkit-scrollbar-thumb': {
                        backgroundColor: 'main.$300',
                        borderRadius: 1.5,
                        width: 3,
                    },
                }}
            >
                {children}
            </Box>
        </Box>
    );
};

AccordionPanel.displayName = 'AccordionPanel';
