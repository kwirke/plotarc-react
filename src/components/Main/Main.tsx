import * as React from 'react';
import { SearchForm } from '../SearchForm/SearchForm';
import { createComponent } from 'react-fela';
import { Grid, Sticky } from 'semantic-ui-react';
import { ListDisplay } from '../ListDisplay/ListDisplay';


const Sidebar = createComponent(() => ({
    padding: '50px 50px 0 50px',
}))

const Container = createComponent(() => ({
    marginTop: '50px',
    marginRight: '50px',
}))

export const Main = () => (
    <Grid stackable>
        <Grid.Column width={5}>
            <Sticky>
                <Sidebar><SearchForm/></Sidebar>
            </Sticky>
        </Grid.Column>
        <Grid.Column width={11}>
            <Container><ListDisplay/></Container>
        </Grid.Column>
    </Grid>
)
