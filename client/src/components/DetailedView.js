import React from 'react';
import  * as listActions from '../actions/index'

class DetailedView extends React.Component {
    constructor(props){
        super();
    }

    render() {
        return (
            <div className="detailedView">
                <h3>Currently Selected</h3>
                <div className="selected">
                    {this.props.selected.text}
                    <input type="text" onChange={this.props.updateText}></input>
                    <button onClick={this.props.updateItem}>Edit</button>
                </div>
            </div>
        )
    }
}

export default DetailedView;