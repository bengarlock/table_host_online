import './App.css';
import React from 'react'
import DateCalendar from "./DateCalendar";


class App extends React.Component {

    state = {
        calendarClicked: false,
        date: '',
        party_size: 2,
    }

    componentDidMount() {
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
        const today = new Date()
        const month = full_months[today.getMonth()]
        const day = today.getDate()
        const day_of_week = full_weekday[today.getDay() + 1]
        const year = today.getFullYear()
        const date = day_of_week + ', ' + month + ' ' + day + ', ' + year
        this.setState({
            date: date
        })
    }

    toggleCalendar = (e) => {
        console.log(e.target.className)
        if (e.target.className === "App") {
            this.setState({
                calendarClicked: false
            })
        } else if (e.target.className === "calendar-wrapper") {
            this.setState({
                calendarClicked: !this.state.calendarClicked
            })
        } else {
            this.setState({
                calendarClicked: false
            })
        }
    }

    onChangeHandler = (e) => {
        if (e.target.name === 'party-size') {
            this.setState({
                party_size: e.target.value
            })
        }
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render(){
      return (
          <div className="App" onClick={this.toggleCalendar}>
              <div className="wrapper">
                  <div className="header">
                      TableHost
                  </div>
                  <form onSubmit={this.onSubmitHandler} >
                      <div className="calendar-wrapper" onClick={this.toggleCalendar}>
                          {String(this.state.date)}
                          {this.state.calendarClicked ? <DateCalendar
                              date={this.state.date} setDate={this.setDate} toggleCalendar={this.toggleCalendar}/> : null}
                      </div>
                      <div className="party-size">
                          <select name="party-size" value={this.state.party_size || ''} onChange={this.onChangeHandler}>
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
                  </form>
              </div>
          </div>



      )
  }



}

export default App;
