import React, {Component} from "react";
import './Element.css'

class Element extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: false
        };

        this.hideElement = this.hideElement.bind(this);
    }

    hideElement(){
        this.setState((state, prop) => {
            isHidden: !state.isHidden        }
    )};

    render() {
        return(
             <div className = {!this.state.isHidden && 'element_main'} onClick = {this.hideElement}> 
                 F
            </div>
        );
        
    }
}

export default Element;
