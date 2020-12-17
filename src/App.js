import './App.css';
import React from 'react'
import DateCalendar from "./DateCalendar";
import Calendar from "react-calendar";
import Slot from "./Slot";
import GuestForm from "./GuestForm";


class App extends React.Component {

    state = {
        url: "https://www.bengarlock.com:8080",
        slot_id: '',
        calendarClicked: false,
        date: new Date(),
        party_size: 2,
        time: "7:00 PM",
        render_guest_form: false,
        slots: [],
    }

    componentDidMount() {
        this.setState({
            date: new Date()
        }, () => this.setDate(this.state.date))
    }

    toggleCalendar = (e) => {
        this.setState({
            calendarClicked: !this.state.calendarClicked
        })
    }

    setDate = (date) => {
        const full_months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ]
        const full_weekday = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ]

        let new_date = new Date(date)

        if (typeof new_date === 'object') {
            const month = full_months[new_date.getMonth()]
            const day = new_date.getDate()
            const day_of_week = full_weekday[new_date.getDay()]
            const year = new_date.getFullYear()
            const friendly_date = day_of_week + ', ' + month + ' ' + day + ', ' + year
            this.setState({
                friendly_date: friendly_date,
                date: new_date
            }, () => this.renderSearchResults(new_date.getFullYear(), new_date.getMonth() + 1, new_date.getDate()))
        }
    }

    onChangeHandler = (e) => {
        if (e.target.name === 'party-size') {
            this.setState({
                party_size: Number(e.target.value)
            }, () => this.renderSearchResults())
        } else if (e.target.name === "time") {
            this.setState({
                time: e.target.value
            }, () => this.renderSearchResults())
        } else if (e.target.name === "date") {
            this.setState({
                date: e.target.value
            }, () => this.renderSearchResults())
        }
    }

    toggleGuestForm = (slotId) => {
        this.setState({
            render_guest_form: !this.state.render_guest_form,
            slot_id: slotId
        })
    }

    renderSearchResults = (year, month, day) => {
        const url = `${this.state.url}/books?date=${year}-${month}-${day}`

        fetch(url)
            .then(res => res.json())
            .then(book => {
                if (book[0]) {
                    this.setState({
                        slots: book[0].slots
                    })
                }
            })
    }

    renderSlots = () => {
        // let timesArray = this.state.slots.map(slot => slot.time).sort()
        // let timesArrayFinal = [...new Set(timesArray)]
        // let primaryIndex = timesArrayFinal.indexOf(this.state.time)
        // let earlierTimeIndex = timesArrayFinal[primaryIndex - 1]
        // let laterTimeIndex = timesArrayFinal[primaryIndex + 1]


        const bookedCheck = this.state.slots.filter(slot => slot.booked === false)

        const partySizeCheck = bookedCheck.filter(slot => slot.party_size === this.state.party_size)
        const timeCheck = partySizeCheck.filter(slot => slot.time === this.state.time)
        if (timeCheck[0]) {
            let final = timeCheck[0]
            return <Slot key={final.id} slot={final} toggleGuestForm={this.toggleGuestForm} />
        } else {
            return <div className="no-available">No Available Tables</div>
        }
    }


    render(){
        return (
            <div className="App">
                <div className="wrapper">
                    <div className="header">
                        TableHost
                    </div>
                    <form>
                        <Calendar onChange={this.setDate} value={this.state.date} name="date" />
                        <div className="party-size">
                            <select
                                name="party-size"
                                value={this.state.party_size || ''}
                                onChange={this.onChangeHandler}>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                              <option value="11">11</option>
                              <option value="12">12</option>
                              <option value="13">13</option>
                              <option value="14">14</option>
                              <option value="15">15</option>
                              <option value="16">16</option>
                              <option value="17">17</option>
                              <option value="18">18</option>
                              <option value="19">19</option>
                              <option value="20">20</option>
                          </select>
                        </div>
                        <div className="time">
                            <select name="time" value={this.state.time || ''} onChange={this.onChangeHandler}>
                              <option value="5:00 PM">5:00 PM</option>
                              <option value="5:15 PM">5:15 PM</option>
                              <option value="5:30 PM">5:30 PM</option>
                              <option value="5:45 PM">5:45 PM</option>
                              <option value="6:00 PM">6:00 PM</option>
                              <option value="6:15 PM">6:15 PM</option>
                              <option value="6:30 PM">6:30 PM</option>
                              <option value="6:45 PM">6:45 PM</option>
                              <option value="7:00 PM">7:00 PM</option>
                              <option value="7:15 PM">7:15 PM</option>
                              <option value="7:30 PM">7:30 PM</option>
                              <option value="7:45 PM">7:45 PM</option>
                              <option value="8:00 PM">8:00 PM</option>
                              <option value="8:15 PM">8:15 PM</option>
                              <option value="8:30 PM">8:30 PM</option>
                              <option value="8:45 PM">8:45 PM</option>
                              <option value="9:00 PM">9:00 PM</option>
                              <option value="9:15 PM">9:15 PM</option>
                              <option value="9:30 PM">9:30 PM</option>
                              <option value="9:45 PM">9:45 PM</option>
                          </select>
                        </div>
                    </form>
                    <div className='search-results'>
                        {this.renderSlots()}
                    </div>
                    {this.state.render_guest_form ? <GuestForm
                        url={this.state.url}
                        key={this.state.slot_id}
                        slotId={this.state.slot_id} toggleGuestForm={this.toggleGuestForm}/> : null}
                </div>
            </div>
        )}
}

export default App;
