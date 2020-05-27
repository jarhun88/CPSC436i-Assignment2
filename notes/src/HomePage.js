import React from 'react';

class HomePage extends React.Component {

    render() {
        return (
            <div>
                <div class="form-container">
                    <h1>Home Page</h1>

                    <h3>Write a message!</h3>

                    <form>
                        <input id="text-input" type="text"></input>
                    </form>

                    <button type="button" id="message" onclick="addMessage();">Add Message</button>
                    <button type="button" onclick="clearMessage()">Clear</button>
                </div>


                <div class="list-container">

                    <div>
                        <h3>Current Messages</h3>
                    </div>

                    <div>
                        <button type="button" onclick="clearList()">Clear list</button>
                        <ul id="list" onload="loadDefaultMessages()"></ul>
                    </div>
            
                </div>
            </div>
        )
    }
}

export default HomePage;