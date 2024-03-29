import React from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';

/*
class Home extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        isLoading: true,
        token: '',
        signUpError: '',
        signInError: '',
        signInEmail: '',
        signInPassword: '',
        signUpEmail: '',
        signUpPassword: '',
      };
  
      this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
      this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
      this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
      this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
      this.onSignUp = this.onSignUp.bind(this);
      
  
  
    }
  
    componentDidMount() {
      this.setState({
        isLoading: false
      });
   }
  
    onTextboxChangeSignInEmail(event) {
      this.setState({
        signInEmail: event.target.value,
      });
    }
  
    onTextboxChangeSignInPassword(event) {
      this.setState({
        signInPassword: event.target.value,
      });
    }
  
    onTextboxChangeSignUpEmail(event) {
      this.setState({
        signUpEmail: event.target.value,
      });
    }
  
    onTextboxChangeSignUpPassword(event) {
      this.setState({
        signUpPassword: event.target.value,
      });
    }
  
    onSignUp() {
      // Grab state
      const {
        signUpEmail,
        signUpPassword,
      } = this.state;
  
      this.setState({
        isLoading: true,
      });
  
      // Post request to backend
      fetch('/routes/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: signUpEmail,
          password: signUpPassword,
        }),
      }).then(res => res.json())
        .then(json => {
          console.log('json', json);
          if (json.success) {
            this.setState({
              signUpError: json.message,
              isLoading: false,
              signUpEmail: '',
              signUpPassword: '',
            });
          } else {
            this.setState({
              signUpError: json.message,
              isLoading: false,
            });
          }
        });
        console.log("in home")
    }
  
    render() {
      const {
        isLoading,
        token,
        signInError,
        signInEmail,
        signInPassword,
        signUpEmail,
        signUpPassword,
        signUpError,
      } = this.state;
      if (isLoading) {
        return (<div><p>Loading...</p></div>);
      }
      if (!token) {
        return (
          <div>
            <div>
              {
                (signInError) ? (
                  <p>{signInError}</p>
                ) : (null)
              }
              <p>Sign In</p>
              <input
                type="email"
                placeholder="Email"
                value={signInEmail}
                onChange={this.onTextboxChangeSignInEmail}
              />
              <br />
              <input
                type="password"
                placeholder="Password"
                value={signInPassword}
                onChange={this.onTextboxChangeSignInPassword}
              />
              <br />
              <button>Sign In</button>
            </div>
            <br />
            <br />
            <div>
              {
                (signUpError) ? (
                  <p>{signUpError}</p>
                ) : (null)
              }
              <p>Sign Up</p>
              <input
                type="email"
                placeholder="Email"
                value={signUpEmail}
                onChange={this.onTextboxChangeSignUpEmail}
              /><br />
              <input
                type="password"
                placeholder="Password"
                value={signUpPassword}
                onChange={this.onTextboxChangeSignUpPassword}
              /><br />
              <button onClick={this.onSignUp}>Sign Up</button>
            </div>
         </div>
        );
      }
      return (
        <div>
          <p>Signed in</p>
        </div>
      );
    }
  
  
  
  
  }
*/

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
            </header>
        </div>
    );
}

export default Home;