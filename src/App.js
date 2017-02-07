import React, {Component} from 'react';
import {Menu, Grid, Container, Header, Input, Icon} from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
        <Menu className="five item inverted" stackable>
          <Container text>
            <Menu.Item name="Produtos" active link={true}/>
            <Menu.Item name="Lojas" link={true}/>
            <Menu.Item name="Older Brother" header={true} link={true} />
            <Menu.Item name="Entrar" link={true}/>
            <Menu.Item name="Carrinho" link={true}/>
          </Container>
        </Menu>
        <Grid centered>
          <Grid.Row>
            <Grid.Column width={13}>
              <Input fluid
                icon={<Icon name='search' inverted circular link />}
                placeholder='Pesquisar...'
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid text className="main text">
          <Grid.Row>
            <Grid.Column width={3}>
              adfasdfas
            </Grid.Column>
            <Grid.Column width={13}>
              adfasdfas
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;