import React from 'react'
import "./App.css"

class Slot extends React.Component {

    render() {
        return(
            <div className="time-result">
                <button>{this.props.slot.time}</button>
            </div>
        )
    }
}

export default Slot