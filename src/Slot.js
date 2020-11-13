import React from 'react'
import "./App.css"


class Slot extends React.Component {

    onClickHandler = () => {
        this.props.toggleGuestForm(this.props.slot.id)
    }


    render() {
        return(
            <div className="time-result">
                <button onClick={this.onClickHandler}>{this.props.slot.time}</button>
            </div>
        )
    }
}

export default Slot