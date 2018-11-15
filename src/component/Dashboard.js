import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props) {
      super(props);
      this.state = {
          
          postname: '',
          postbody:'',
          username:this.props.username,
          profileURL:this.props.profileURL,
          email:this.props.email
      };
    }

  onChangeName = (event) => {
      this.setState({postname: event.target.value})
    }
    onChangeBody = (event) => {
      this.setState({postbody: event.target.value})
    }

  onPosting = () => {
    if(this.state.postname === '' || this.state.postbody === ''){
      alert("Post Fields Cannot be Empty..!")
      return false;
    }
      fetch('https://letter-shack.herokuapp.com/putpost', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          postname: this.state.postname,
          postbody: this.state.postbody,
          username: this.state.username
        })
      })
        .then(response => {
          alert("Posted Successfully.");
          window.location.reload();
        })
    }
  render() {
    return (
      <div>
        <div className="coverpage">
          <img src={this.state.profileURL} alt="ProfileImage" />
          <h1>Hello, {this.state.username} </h1>
          <h5>Email : {this.state.email}</h5>
        </div>
        <div className="postform wrap container">
          <h1>Want to Post Something..? Do it</h1>
          <form>
            <table>
              <tr><h5>TITLE</h5></tr>
              <tr><input type="text" id="postname" onChange={this.onChangeName} /></tr>
              <tr><h5>CONTENT (40 words max)</h5></tr>
              <tr><textarea rows="5" id="postbody" onChange={this.onChangeBody} ></textarea></tr>
              <tr><input type="button" className="btn btn-warning btn-lg" onClick={this.onPosting} value="post"/></tr>
            </table>
          </form>
        </div>
      </div>

     
    );
  }
}

export default Dashboard;

 // {<div>
 //              <h1>Upload New Post</h1>
 //              <form>
 //              Post Name : <input type="text" id="postname" onChange={this.onChangeName} /><br/>
 //              Post Body : <textarea rows="5" id="postbody" onChange={this.onChangeBody} ></textarea>
 //              <input type="button" onClick={this.onPosting} value="post"/>
 //              </form>
 //            </div>}