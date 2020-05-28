import React from 'react';
import './HomePage.css'

class HomePage extends React.Component {
    constructor() {
        super();
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
        let defaultMessages = ["apple", "banana", "carrot"];
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
            document.getElementById("list").appendChild(li).appendChild(span)
      
        }
    }

    render() {
        return (
            <div id="container">
                <div className="form-container">
                    <h1>A group where we all pretend to be ants in an ant colony</h1>

                    <h3>Write a message!</h3>

                    <form>
                        <input id="text-input" type="text"></input>
                    </form>

                    <button type="button" id="message" onClick={this.addMessage}>Add Message</button>
                    <button type="button" onClick={this.clearMessage}>Clear</button>
                </div>

                <div className="list-container">

                    <div>
                        <h3>Current Messages</h3>
                    </div>

                    <div>
                        <button type="button" onClick={this.clearList}>Clear list</button>
                        <ul id="list" onLoad={this.loadDefaultMessages}></ul>
                    </div>
            
                </div>
            </div>
        )
    }
}

export default HomePage;