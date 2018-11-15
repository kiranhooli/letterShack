import React from 'react';
import { Navbar, NavbarBrand,  Container, Fa } from 'mdbreact';
import { GoogleLogin } from 'react-google-login';
import Dashboard from './Dashboard';

const responseGoogleFailure = (response) => {
  console.log(response);
}

class NavBar extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
          posts:[],
          loggedIn : false,
          username : '',
          profileURL : '',
          email : ''
          
      };
}  componentWillMount(){
    fetch('https://letter-shack.herokuapp.com/getpost',{
            method: 'get',
            headers:{'Content-Type' : 'application/json'}
          })
          .then(response => response.json())
          .then(user =>{
            let posters = user.reverse().map(pst => 
            <div className="card-wrap m-4" >
                    <div className="card-desc">
                      <h4>{pst.postname}</h4>
                      <p>
                        {pst.postbody}
                      </p>
                      </div>
                            <div className="card-loc"><hr />
                      <p><Fa icon="google" />  Author : {pst.username}</p>
                    </div>
                </div>
               )
            this.setState({posts:posters});
          })
  }

render() {
  const responseGoogleSuccess = (response) => {
      this.setState({
        loggedIn : !this.state.loggedIn,
        username : response.w3.ig,
        profileURL : response.w3.Paa,
        email : response.w3.U3,
      });
    }

  return (
          <div>
          <header><div>
              <Navbar dark expand="md">
                <Container>
                 <NavbarBrand>
                       <h2 className="brand" style={{"color":"white"}}>LETTER SHACK</h2>
                  </NavbarBrand>
                </Container>
              </Navbar>
          </div>
          </header>

          <div>
            {
              (!this.state.loggedIn) ? 
              <div>
              <h3 className="m-4"><span className="m-3">Want to Upload your Posts? Login here </span>
              <GoogleLogin
              clientId="564517647225-c11gv53o6ch4m9vr6heqpul8u3pv61l1.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={responseGoogleSuccess}
              onFailure={responseGoogleFailure}
            >
              <span><Fa icon="google"></Fa> Login with Google</span>
            </GoogleLogin></h3><hr/>


            <div className="m-4 p-2">
              <h2>Recent Posts</h2>
            </div>
            <Container>
              <div className="row">
                {this.state.posts}
              </div>
            </Container>
            </div>
            :
            <Dashboard username={this.state.username} profileURL={this.state.profileURL} email={this.state.email}/>
            }
          </div>
        
      </div>
    );
  }
}

export default NavBar;