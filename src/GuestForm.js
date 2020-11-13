import React from 'react'
import './App.css'


class GuestForm extends React.Component {

    state = {
        first_name: '',
        last_name: '',
        phone_number: '',
        reservation_notes: '',
    }

    onClickHandler = () => {
        this.props.toggleGuestForm(null)
    }

    onChangeHandler = (e) => {
        if (e.target.name === "first-name") {
            this.setState({
                first_name: e.target.value
            })
        } else if (e.target.name === "last-name") {
            this.setState({
                last_name: e.target.value
            })
        } else if (e.target.name === "phone-number") {
            this.setState({
                phone_number: e.target.value
            })
        } else if (e.target.name === "reservation-notes") {
            this.setState({
                reservation_notes: e.target.value
            })
        }
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        const data = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            phone_number: this.state.phone_number,
        }

        const packet = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify(data)
        }

        fetch(this.props.url + "/guests/", packet)
            .then(res => res.json())
            .then(guest => this.updateSlot(guest))
    }

    updateSlot = (guest) => {
        const data = {
            booked: true,
            status: "booked",
            guest: guest.id,
            reservation_notes: this.state.reservation_notes,
        }

        const packet = {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify(data)
        }
        fetch(this.props.url + "/slots/" + this.props.slotId + '/', packet)
            .then(res => res.json())
            .then(console.log)
    }




    render() {
        console.log(this.props.slotId)
        return(
            <div id="overlay">
                <div className='guest-form-wrapper'>
                    <div id="close" onClick={this.onClickHandler}>Close</div>
                        <form onSubmit={this.onSubmitHandler}>

                            <input name="first-name" type="text" onChange={this.onChangeHandler}
                                   value={this.state.first_name || '' } placeholder="First Name" />
                            <input name="last-name" type="text" onChange={this.onChangeHandler}
                                   value={this.state.last_name || '' } placeholder="Last Name" /><br />
                            <input name="phone-number" type="text" onChange={this.onChangeHandler}
                                   value={this.state.phone_number || '' } placeholder="Phone Number" /><br />
                            <textarea name="reservation-notes" type="text" onChange={this.onChangeHandler}
                                   value={this.state.reservation_notes || ''} placeholder="Special Requests" /><br />
                            <input name="submit" type="submit"/>

                        </form>


                    </div>
            </div>
        )
    }
}
export default GuestForm