import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
        <Menu className="five item fixed inverted">
          <div className="ui container">
            <Menu.Item name="Produtos" active={true} link={true}/>
            <Menu.Item name="Lojas" link={true}/>
            <Menu.Item name="Older Brother" header={true} link={true} />
            <Menu.Item name="Entrar" link={true}/>
            <Menu.Item name="Carrinho" link={true}/>
          </div>
        </Menu >
      </div>
    );
  }
}

export default App;