import React from 'react'
class Button1 extends React.Component{

    constructor(props){
        super(props);
        this.state={
        player:1,
        };
    }

    render(){
        return(
            <button style='color:red;' onClick='changePlayer'>|</button>
        );
    }
     changePlayer() {
        this.setState(state => {this.state.player = !this.state.player})
        
    }
}
export default Button1