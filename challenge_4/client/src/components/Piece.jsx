import React from 'react';

class Piece extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'white'
        }
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor() {
        if (this.props.spot === 1) {
            return 'red'
        } else if (this.props.spot === 2) {
            return 'blue'
        }
    }

    render() {
        return (
        <div className ='boardrow' style={{backgroundColor: this.changeColor()}}></div>
        )
    }
}

export default Piece