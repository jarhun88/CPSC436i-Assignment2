import React from 'react';

class DetailedView extends React.Component {
    constructor(props){
        super();
    }

    render() {
        return (
            <div className="detailedView">
                <h3>Currently Selected</h3>
                <div className="selected">
                    <div>
                        {this.props.selected.text}
                    </div>
                    <div>
                        <input id="edit" type="text" onChange={this.props.updateText} disabled={this.props.selected === ""}></input>
                        <button onClick={this.props.updateItem} disabled={this.props.selected === ""}>Edit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailedView;