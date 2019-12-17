import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTheme } from '../../themes/default';
import { ThemeProvider } from 'emotion-theming';
import { Box, Text } from '../..';
import { Confirmation } from './Confirmation';

const stories = storiesOf('Confirmation', module);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Confirmation
            titleInfo={{
                address: '3PD4KPsJwN3fzT5H1JpBEJYdWinnLghGdr2',
                name: 'Florieke Krebber',
                balance: '432.97655789 Waves',
            }}
        >
            <Box>
                <Text color="standard.$0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Adipisci assumenda deserunt fugiat incidunt natus quia
                    tenetur voluptatibus? A ad aliquid consequuntur corporis
                    culpa deleniti deserunt distinctio dolorum earum eligendi,
                    enim eos esse eum eveniet ex fugiat incidunt ipsa, iure
                    iusto labore laudantium mollitia nostrum odit pariatur quam
                    quas quos reiciendis rem repellat repellendus reprehenderit
                    saepe sapiente sed sequi sit voluptate, voluptatum! Dolores
                    est odit pariatur voluptatibus! Aliquid, asperiores
                    consequatur delectus eaque fugit itaque laborum nemo, neque
                    non officia perferendis praesentium quas quos repellendus
                    sit vel voluptas? A aliquid aperiam assumenda autem commodi
                    deserunt dignissimos dolorem error eveniet expedita
                    explicabo, impedit incidunt ipsum itaque laborum maiores
                    maxime mollitia nesciunt odit officia pariatur perspiciatis
                    porro possimus praesentium, provident quibusdam quidem quis
                    quo quos recusandae sequi similique soluta temporibus unde
                    veniam, vero voluptates! A aliquid asperiores atque dolore
                    ducimus enim et ex facere illo in ipsam, labore neque
                    nesciunt optio perferendis perspiciatis porro rem sed
                    similique tenetur ut veniam veritatis vitae! Ad, aperiam
                    atque beatae blanditiis consequatur dolor dolorum
                    exercitationem expedita facere ipsam minima molestiae, qui
                    quia ut veritatis vero voluptas! A, accusantium alias amet
                    delectus ducimus ex facilis iusto mollitia, officia
                    perferendis possimus quam qui veniam. Aperiam culpa
                    inventore ipsum magnam modi, nemo odio quidem voluptate!
                    Accusamus adipisci consequatur cumque, eligendi error ipsam
                </Text>
            </Box>
        </Confirmation>
    </ThemeProvider>
));
