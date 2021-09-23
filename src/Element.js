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
            this.setState({isHidden: !this.state.isHidden});
    }

    render() {
        let classValue = !this.state.isHidden && 'element_main';

        return(
             <div className = {classValue} onClick = {this.hideElement}> 
                 F
            </div>
        );
        
    }
}

export default Element;
