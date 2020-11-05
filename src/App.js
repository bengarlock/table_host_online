import './App.css';
import React from 'react'
import DateCalendar from "./DateCalendar";
import {Calendar} from "react-calendar";


class App extends React.Component {

    state = {
        calendarClicked: false,
        date: new Date(),
        party_size: 2,
        time: "7:00 PM",
    }

    componentDidMount() {
        this.setDate(new Date())
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

        const month = full_months[date.getMonth()]
        const day = date.getDate()
        const day_of_week = full_weekday[date.getDay() + 1]
        const year = date.getFullYear()
        const friendly_date = day_of_week + ', ' + month + ' ' + day + ', ' + year

        this.setState({
            friendly_date: friendly_date,
            date: date
        })
    }

    onChangeHandler = (e) => {
        if (e.target.name === 'party-size') {
            this.setState({
                party_size: e.target.value
            })
        } else if (e.target.name === "time") {
            this.setState({
                time: e.target.value
            })
        }
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
    }

    render(){
        console.log(this.state.date)
        return (
            <div className="App">

                <div className="wrapper">
                    <div className="header">
                        TableHost
                    </div>
                    <form onSubmit={this.onSubmitHandler} >
                        <div className="calendar-wrapper" onClick={this.toggleCalendar}>
                            {String(this.state.friendly_date)}
                            {this.state.calendarClicked ? <DateCalendar date={this.state.date} setDate={this.setDate}/> : null}
                        </div>
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
                        <input type="submit" value="Find a Table" />
                    </form>
                </div>
            </div>
        )}
}

export default App;
