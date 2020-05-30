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
                    {this.props.selected}
                </div>
            </div>
        )
    }
}

export default DetailedView;