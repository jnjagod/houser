import React, {Component} from 'react'
import axios from 'axios'

export default class Wizard extends Component{
    constructor(){
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = e => {
        let { value, name } = e.target
    
        this.setState({
          [name]: value
        })
    }

    addHouse() {
        axios.post('/api/houses', this.state)
          .then(res => {
            this.props.history.push('/')
          })
      }

    render(){
        return (
            <div>
                <h1>Wizard</h1>
                <button onClick={() => this.props.history.push('/')} >Cancel</button>
                <p>Property Name</p>
                <input
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.name} />
                <p>Address</p>
               <input
                type="text"
                name="address"
                onChange={this.handleChange}
                value={this.state.address} />
                <p>City</p>
               <input
                type="text"
                name="city"
                onChange={this.handleChange}
                value={this.state.city} />
                <p>State</p>
               <input
                type="text"
                name="state"
                onChange={this.handleChange}
                value={this.state.state} />
                <p>Zip</p>
                <input
                type="number"
                name="zipcode"
                onChange={this.handleChange}
                value={this.state.zipcode} />
                <button onClick={this.addHouse} >Complete</button>
            </div>
        )
    }
}