import React, {Component} from 'react'
import axios from 'axios'
import House from '../House/House'

export default class Dashboard extends Component{
    constructor(){
        super()

        this.state = {
            houses: []
        }
    }

    componentDidMount(){
        this.getHouses()
    }

    getHouses(){
        axios.get('/api/houses')
        .then(res => {
        this.setState({
          houses: res.data
        })
      })
    }

    deleteHouse(id) {
        axios.delete(`/api/houses/${id}`)
          .then(res => this.getHouses());
      }

    render(){
        return (
            <div>
                <h1>Dashboard</h1>
                <House />
                <button
                onClick={() => this.props.history.push('/wizard')} >Add New Property</button>
                <h3>Home Listings</h3>
                {this.state.houses.map(elem => {
                    return <House key={elem.id} house={elem} deleteHouse={this.deleteHouse} />
                })}        
            </div>
        )
    }
}