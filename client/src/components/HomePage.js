import React from 'react';
import './HomePage.css'
import { connect } from 'react-redux'
import  * as listActions from '../redux/actions/index'
import PropTypes from 'prop-types'
import DetailedView from './DetailedView'

class HomePage extends React.Component {
    state = {
        input: {
            _id: "",
            text: "",
            date: ""
        },
        selected: "",
        updatedText: ""
    }

    componentDidMount = () => {
        this.getMessage();
    }

    updateItem = event => {
        event.preventDefault();
        console.log('updating')
        this.props.dispatch(listActions.updateItem(this.state.selected, this.state.updatedText));
        window.location.reload(false);
    }

    getMessage = () => {
        this.props.dispatch(listActions.getListItems());
    }
  
    clearInput = event => {
        event.preventDefault();
        const input = {  text: "", _id: this.state.input._id };
        this.setState({ input });
    }
  
    clearList = event => {
        event.preventDefault();
        this.props.dispatch(listActions.clearListItem());
    }

    handleChange = event => {
        let today = new Date();
        let day = today.getDate()
        let month = today.getMonth() + 1;
        let fullDate = day + "/" + month + "/" + today.getFullYear(); 
        const input = { ...this.state.input, text: event.target.value, date: fullDate };
        this.setState({ input });
    }

    handleUpdateTextChange = event => {
        const updatedText = event.target.value;
        this.setState({updatedText})
        console.log(this.state.updatedText)
    }
 
    handleSubmit = event => {
        event.preventDefault();
        this.props.dispatch(listActions.addListItem(this.state.input, this.state._id, this.state.date));
        
        const input = { text: this.state.input.text};
        this.setState({ input });
    }

    deleteListItem(input) {
        console.log(input._id)
        this.props.dispatch(listActions.deleteListItem(input._id));
    }

    select = input => {
        const selected = input;
        // console.log(selected);
        this.setState({ selected });
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
                    <DetailedView selected={this.state.selected} updateItem={this.updateItem}
                    updateText={this.handleUpdateTextChange}></DetailedView>

                    <div>
                        <h3>Current Messages</h3>
                        <button type="button" onClick={this.clearList}>Clear list</button>
                        <ul id="list">
                        { this.props.inputs.map( i => (
                            <li key={i._id} onClick={() => this.select(i)}>
                                <span className="date">{i.date}</span>{i.text} 
                                <span className="close" onClick={() => this.deleteListItem(i)}>X</span>
                            </li>
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