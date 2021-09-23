import React, {Component} from "react";
import Element from './Element';
import Clock from './Clock';

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

    let array_of_elements = [];
    for (let i = 0; i < 5; i++){
      array_of_elements.push(<Element />);
    }
    return (
      <div >
        <h1> My headers </h1>
        <p> {this.props.greetings}, my friend. The author is {formatName(author)} </p>
        <br/>
        <br/>
        <p> And here some text from children: {child_text} </p>
            {array_of_elements}

      </div>
    );
  }

}

export default App;
