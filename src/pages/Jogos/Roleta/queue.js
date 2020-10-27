import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class Queue extends Component{
    constructor(props) {
        super(props);
        this.state = {
            conexao : null
        };
    }
    componentDidMount(){
        this.setState({
            conexao : socketIOClient("http://localhost:4000")
        });
        var cache = [];
        var teste = JSON.stringify(this.state.conexao, (key, value) => {
            if (typeof value === 'object' && value !== null) {
                // Duplicate reference found, discard key
                if (cache.includes(value)) return;

                // Store value in our collection
                cache.push(value);
               console.log(cache);
            }
            return value;
        });
        localStorage.setItem("conPlayer", teste);
    }

    render(){
        console.log(this.state.conexao);

        return(
            <h1>OI</h1>
        );
    }
}
export default Queue;