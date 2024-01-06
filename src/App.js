import React, {Component} from 'react';
import './App.css';
import Form from './Components/Form';
import Repos from './Components/Repos';

class App extends Component {
   
  state = {
    repoName: "",
    error: ""
  }

  

  getRepos = async (e) => {
    e.preventDefault();
    const repoName = e.target.elements.user.value;
    const api = await fetch(`https://api.github.com/users/${repoName}/repos`);
    const data = await api.json();
    console.log(data)
    if(repoName){
      this.setState({
        repoName: data.map((item) => {return(item.name)}),
        error: ""
      })
   } else {
      this.setState({
        repoName: "",
        error: "Please Write Github Username"
      })
    }
  }
  render(){
    return (
      <div className="App">
         <Form getRepos = {this.getRepos}/>
         <Repos repoName = {this.state.repoName} error = {this.state.error}/>
      </div>
    );
  }
  
}

export default App;
