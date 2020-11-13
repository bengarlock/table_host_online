import React from 'react'
import './App.css'


class GuestForm extends React.Component {

    onClickHandler = () => {
        this.props.toggleGuestForm(null)
    }

    render() {
        console.log(this.props.slotId)
        return(
            <div id="overlay">
                <div className='guest-form-wrapper'>
                    <div id="close" onClick={this.onClickHandler}>Close</div>
                    guest form</div>
            </div>
        )
    }
}
export default GuestForm