import React from 'react';
import './HomePage.css'
import { connect, useSelector } from 'react-redux'
import  * as listActions from '../actions/index'
import PropTypes from 'prop-types'


class HomePage extends React.Component {
    state = {
        input: {
            text: ""
        }
    }

    // Add a "checked" symbol when clicking on a list item
    closeListItem = () => {
        let close = document.getElementsByClassName("close");
        let i;
        for (i = 0; i < close.length; i++) {
            close[i].onClick = function() {
                let div = this.parentElement;
                div.style.display = "none";
            }
        }
    }
  
    addMessage = () => {
        console.log(this.props.list)
        let text = document.getElementById("text-input").value;
        console.log(text)
        if (text === "") 
            return
    
        let li = document.createElement("li")
        li.className = 'msg';
        li.textContent = text;
        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        document.getElementById("list").appendChild(li).appendChild(span)
    }
  
    clearMessage = () => {
        document.getElementById("text-input").value = "";
    }
  
    clearList = () => {
        let ul = document.getElementById("list");
        while(ul.firstChild) ul.removeChild(ul.firstChild);
    }
  
    loadDefaultMessages= () => {
        let defaultMessages = this.props.list;
        console.log(defaultMessages);
        for (let word of defaultMessages) {
            console.log(word)
            let li = document.createElement("li")
            li.className = 'msg';
            li.textContent = word;
        
            let span = document.createElement("SPAN");
            let txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.addEventListener("click", function() {
                let ul = document.getElementById("list");
                ul.removeChild(this.parentElement)
            });
            span.appendChild(txt);
            document.getElementById("list").appendChild(li).appendChild(span);
        }
    }

    handleChange = event => {
        const input = { ...this.state.input, text: event.target.value }
        console.log(input)
        this.setState({ input })
    }
 
    handleSubmit = event => {
        event.preventDefault();
        this.props.dispatch(listActions.addListItem(this.state.input))
        alert(this.state.input.text);
    }

    // list = useSelector(state => state.add);

    render() {
        return (
            <div id="container">
                <div className="form-container">
                    <h1>A group where we all pretend to be ants in an ant colony</h1>

                    <h3>Write a message!</h3>

                    <form onSubmit={this.handleSubmit}>
                        <input id="text-input" type="text" onChange={this.handleChange} value={this.state.input.text} />
                        
                        <input type="submit" value="Save" />
                        <input type="submit" value="Clear"/>
                    </form>
                    
                    {/* <button type="button" id="message" onClick={this.addMessage}>Add Message</button>
                    <button type="button" onClick={this.clearMessage}>Clear</button> */}
                </div>

                <div className="list-container">

                    <div>
                        <h3>Current Messages</h3>
                    </div>

                    <div>
                        <button type="button" onClick={this.clearList}>Clear list</button>

                        { this.props.inputs.map( i => (
                            <div key={i.text}>{i.text}</div>
                            )
                        )}
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