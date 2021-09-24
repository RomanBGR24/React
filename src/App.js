import React, {Component} from "react";
import Element from './Element';
//import Clock from './Clock';

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

    function hideElement(){
      this.setState((state, prop) => {
          isHidden: !isHidden        }
    )};

    let array_of_elements = [];
    for (let i = 0; i < 5; i++){
      array_of_elements.push(<Element hideElementEvent = {this.hideElement} />);
    }
    return (
      <div >
        <h1> My headers </h1>
        <p> {this.props.greetings}, my friend. The author is {formatName(author)} </p>
        <br/>
        <br/>
        <p> And here some text from children: {child_text} </p>
        <ul>
            {array_of_element.map(elem=>{<li key={index}>{elem}</li>})}
        </ul>
      </div>
    );
  }

}

export default App;
