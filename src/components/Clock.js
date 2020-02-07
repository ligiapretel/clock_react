import React from 'react';

export default class Clock extends React.Component{

    constructor(props){
        super(props)
            this.state={
                timer: new Date().toLocaleTimeString()
            }
    }

    // A cada segundo, atualizar o relógio. A função setInterval é um temporizador. A função que estamos passando é a cada segundo atualizar o state. O setState atualiza o estado e chama o render automaticamente.
    componentDidMount(){
        // O retorno da função é sempre um id, então armazeno numa variável para pode dar o clearInterval nesse id depois.
        let interval_id = setInterval(()=>{
            // this.state.timer = new Date().toLocaleTimeString()
            this.setState({
                timer: new Date().toLocaleTimeString()
            })
        }, 1000)

        this.setState({
            // mantendo o estado
            ...this.state,
            // atribuindo um interval_id
            interval_id: interval_id
        })
    }

    componentWillUnmount(){
        clearInterval(this.state.interval_id);
    }

    render(){
        return(
            <div>
                {this.state.timer}
            </div>
        )
    }

}