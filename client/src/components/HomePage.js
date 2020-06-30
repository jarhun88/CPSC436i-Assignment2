import React from 'react';
import './HomePage.css'
import { connect } from 'react-redux'
import  * as listActions from '../actions/index'
import PropTypes from 'prop-types'
import DetailedView from './DetailedView'
import axios from 'axios'

class HomePage extends React.Component {
    state = {
        input: {
            text: "",
            _id: 2,
            date: ""
        },
        selected: ""
    }

    componentDidMount = async () => {
        await this.createMessage();
    }

    getMessage = async () => {
        try {
            const res = await axios.get('http://localhost:8000/messages/');
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    }

    createMessage = async () => {
        try {
            const res = await axios.post('http://localhost:8000/messages/createMessage');
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    }

    deleteMessage = async () => {
        try {
            const res = await axios.delete('http://localhost:8000/messages/deleteMessage');
            console.log(res);
        } catch (error) {
            console.error(error);
        }
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
        console.log(fullDate)
        const input = { ...this.state.input, text: event.target.value, date: fullDate };
        this.setState({ input });
    }
 
    handleSubmit = event => {
        event.preventDefault();
        this.props.dispatch(listActions.addListItem(this.state.input, this.state._id, this.state.date));
        
        // console.log(date);
        const input = { text: this.state.input.text, _id: this.state.input._id + 1};
        this.setState({ input });
    }

    deleteListItem(input) {
        this.props.dispatch(listActions.deleteListItem(input._id));
    }

    select = input => {
        const selected = input.text;
        console.log(selected);
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
                    <DetailedView selected={this.state.selected}></DetailedView>

                    <div>
                    <h3>Current Messages</h3>
                        <button type="button" onClick={this.clearList}>Clear list</button>
                        <ul id="list">
                        { this.props.inputs.map( i => (
                            <li key={i._id} onClick={() => this.select(i)}><span className="date">{i.date}</span>{i.text} <span className="close" onClick={() => this.deleteListItem(i)}>X</span></li>
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