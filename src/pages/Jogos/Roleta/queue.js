import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import store from '../../../config/store';
import { withRouter } from "react-router-dom";

class Queue extends Component{
    constructor(props) {
        super(props);
        this.state = {
            conexao : null,
            mensagem: "Você está na fila para Jogar!"

        };
    }

    handleRedirect = (newPath)=>{
        this.props.history.push(newPath);
    }

    componentDidMount(){
        const conexao = socketIOClient("http://localhost:4000")

        conexao.on('ready', (PLAYERS) =>{
            let aux = false;
            for (var i=0; i<PLAYERS.length; i++)
            {
                if(PLAYERS[i].id === conexao.id)
                {
                    aux = true;
                }
            }
            if(aux)
            {
                this.setState({
                    mensagem: "Partida encontrada!"
                })

                setTimeout(()=>{
                    store.dispatch({
                        type: "SET_CON",
                        payload: {
                            conexao : conexao,
                            player : PLAYERS
                        },
                      });
                      this.handleRedirect('/jogos/roleta/');
                      // QUERIDO PRA, FAVOR REDIRECIONAR A PAGINA, BEIJOS DA CORNETA 
                      // ASS. LUIZ HENRIQUE BELORIO
                }, 5000)
            }
        });

        //var cache = [];
        /*
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
        */
    }

    render(){
        return(
            <div>
                <h1>Fila</h1>
                <p>{this.state.mensagem}</p>
            </div>
        );
    }
}
export default withRouter(Queue);