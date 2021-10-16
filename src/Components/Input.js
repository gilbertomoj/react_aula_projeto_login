import React, {Component} from "react"
import './styles.css'

export default class Input extends Component{
    render(){
    return(
        <div>
            <input placeholder={this.props.ph}/>
        </div>
    )
}
}

