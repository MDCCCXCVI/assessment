import React,{ Component } from 'react';
import services from '../services';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      users: null
    }
  }

  componentDidMount() {
    services.getPhpDevelopers()
    .then(res => {
      console.log(res.items);
      this.setState({users: res.items});
      return res;
    });
  }

  componentWillUpdate(nextState) {
    return true;
  }

  renderUsers(users) {
    return users.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.login}</td>
          <td><a href={'https://github.com/' + user.login}>{'https://github.com/' + user.login}</a></td>
        </tr>
      )
    })
  }

  render() {
    return(
      <div className="container">
        <h2>Php Users in Nairobi</h2>
        { this.state.users ? (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Login</th>
                <th>Url</th>
              </tr>
            </thead>
            <tbody>
              { this.renderUsers(this.state.users) }
            </tbody>
          </table>
        ) : <h5>Loading...</h5>
        }
      </div>
    );
  }
}

export default App;
