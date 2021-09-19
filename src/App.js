import React, {Component} from "react";

class App extends Component {
  render() {

    function formatName (user){
      return user.name;
    }

    const author = {
      name: 'Roman',
      age: '33',
    };
    
    const child_text = this.props.children;

    return (
      <div >
        <h1> My headers </h1>
        <p> {this.props.greetings}, my friend. The author is {formatName(author)} </p>
        <br/>
        <br/>
        <p> And here some text from children: {child_text} </p>
      </div>
    );
  }

}

export default App;
