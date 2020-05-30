import React from 'react';
import './HomePage.css'
import { connect } from 'react-redux'
import  * as listActions from '../actions/index'
import PropTypes from 'prop-types'


class HomePage extends React.Component {
    state = {
        input: {
            text: "",
            id: 2,
        },
        selected: ""
    }
  
    clearInput = event => {
        event.preventDefault()
        const input = {  text: "", id: this.state.input.id }
        this.setState({ input })
    }
  
    clearList = event => {
        event.preventDefault();
        this.props.dispatch(listActions.clearListItem())
    }

    handleChange = event => {
        const input = { ...this.state.input, text: event.target.value }
        console.log(input)
        this.setState({ input })
    }
 
    handleSubmit = event => {
        event.preventDefault();
        this.props.dispatch(listActions.addListItem(this.state.input, this.state.id))
        const input = { text: this.state.input.text, id: this.state.input.id + 1}
        this.setState({ input })
    }

    deleteListItem(input) {
        this.props.dispatch(listActions.deleteListItem(input.id))
    }

    select = input => {
        const selected = input.text
        console.log(selected)
        this.setState({ selected })
    }

    render() {
        return (
            <div id="container">
                <div className="form-container">
                    <h1>A group where we all pretend to be ants in an ant colony</h1>

                    <h3>Write a message!</h3>

                    <form>
                        <input id="text-input" type="text" onChange={this.handleChange} value={this.state.input.text} />
                        
                        <input type="submit" value="Save" onClick={this.handleSubmit}/>
                        <input type="submit" value="Clear" onClick={this.clearInput}/>
                    </form>
                </div>

                <div className="list-container">

                    <div className="detailedView">
                        <h3>Currently Selected</h3>
                        <div className="selected">
                            {this.state.selected}
                        </div>
                    </div>

                    <div>
                        <h3>Current Messages</h3>
                    </div>

                    <div>
                        
                        <button type="button" onClick={this.clearList}>Clear list</button>
                        <ul id="list">
                        { this.props.inputs.map( i => (
                            <li key={i.id} onClick={() => this.select(i)}>{i.text} <span className="close" onClick={() => this.deleteListItem(i)}>X</span></li>
                            )
                        )}
                        </ul>
                    </div>
            
                </div>
            </div>
        )
    }
}

HomePage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    inputs: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return { inputs: state.input};
}

export default connect(mapStateToProps)(HomePage);
// export default HomePage;