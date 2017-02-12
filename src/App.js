import React, {Component} from 'react';
import {
  Menu,
  Grid,
  Container,
  Input,
  Icon,
  Segment,
  Card
} from 'semantic-ui-react';
import ProductCard from './components/ProductCard'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'product',
      productTab: 'card',
      products: [{
        _id: 1, name: 'Produto 1', category: 'Categoria 1', price: 100.00, image: 'https://placehold.it/290', rating: 3, description: 'Praesent in mauris eu tortor porttitor accumsan. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus.Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metusMauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. .Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metusMauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. .Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metusMauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus'
      }, {
        _id: 2, name: 'Produto 2', category: 'Categoria 1', price: 100.00, image: 'https://placehold.it/290', rating: 3, favorite: true, description: 'Praesent in mauris eu tortor porttitor accumsan. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. '
      }, {
        _id: 3, name: 'Produto 3', category: 'Categoria 1', price: 100.00, image: 'https://placehold.it/290', rating: 3, favorite: true, description: 'Praesent in mauris eu tortor porttitor accumsan. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. '
      }, {
        _id: 4, name: 'Produto 4', category: 'Categoria 1', price: 100.00, image: 'https://placehold.it/290', rating: 3, favorite: true, description: 'Praesent in mauris eu tortor porttitor accumsan. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. '
      }, {
        _id: 5, name: 'Produto 5', category: 'Categoria 1', price: 100.00, image: 'https://placehold.it/290', rating: 3, favorite: true, description: 'Praesent in mauris eu tortor porttitor accumsan. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. '
      }, {
        _id: 6, name: 'Produto 6', category: 'Categoria 1', price: 100.00, image: 'https://placehold.it/290', rating: 3, favorite: true, description: 'Praesent in mauris eu tortor porttitor accumsan. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. '
      }, {
        _id: 7, name: 'Produto 7', category: 'Categoria 1', price: 100.00, image: 'https://placehold.it/290', rating: 3, favorite: true, description: 'Praesent in mauris eu tortor porttitor accumsan. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. '
      }, {
        _id: 8, name: 'Produto 8', category: 'Categoria 1', price: 100.00, image: 'https://placehold.it/290', rating: 3, favorite: true, description: 'Praesent in mauris eu tortor porttitor accumsan. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. '
      }, {
        _id: 9, name: 'Produto 9', category: 'Categoria 1', price: 100.00, image: 'https://placehold.it/290', rating: 3, favorite: true, description: 'Praesent in mauris eu tortor porttitor accumsan. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. '
      }, {
        _id: 10, name: 'Produto 10', category: 'Categoria 1', price: 100.00, image: 'https://placehold.it/290', rating: 3, favorite: true, description: 'Praesent in mauris eu tortor porttitor accumsan. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. '
      }]
    };
  }

  render() {
    return (
      <div>
        <Menu className='five item inverted' stackable>
          <Container text>
            <Menu.Item name='Produtos' active={this.state.page === 'product'} link={true}/>
            <Menu.Item name='Lojas' active={this.state.page === 'store'} link={true}/>
            <Menu.Item name='Older Brother' header={true} link={true}/>
            <Menu.Item name='Entrar' link={true}/>
            <Menu.Item name='Carrinho' link={true}/>
          </Container>
        </Menu>
        <Grid centered>
          <Grid.Row>
            <Grid.Column width={13}>
              <Input
                fluid
                icon={< Icon name='search' inverted circular link />}
                placeholder='Pesquisar...'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid centered>
          <Grid.Row>
            <Grid.Column width={15}>
              <Menu attached='top' tabular>
                <Menu.Item
                  active={this.state.productTab === 'card'}>
                  Cartões
                </Menu.Item>
              </Menu>

              <Segment attached='bottom'>
                <Grid textAlign='left'>
                  <Grid.Row >
                    <Grid.Column width={16}>
                      <Card.Group>
                        {this.state.products.map( (it) => (
                          <ProductCard 
                            key={it._id} 
                            prodInfo={it}
                          />
                        ))}
                      </Card.Group>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;