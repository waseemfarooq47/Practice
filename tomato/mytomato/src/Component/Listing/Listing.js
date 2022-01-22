import React, { Component } from 'react'
import ListingDetails from './ListingDetails'
import './Listing.css'
import axios from 'axios'

const url="https://kashkart.herokuapp.com/filter"

class Listing extends Component {
    constructor(props){
        super(props)
        this.state={
            "restId":""
        }

    }
    render() {
        return (
            <>
                <div className="listing-container">
                    <div className="listing-cover">
                        <div className="list-eaterytag">
                            <span>Breakfast Places in Manali</span>
                        </div>
                        <div className="left-list">
                            <div className="filter-sort">
                                Filter / Sort
                            </div>
                            <div>
                                <input type="radio" />Item 1<br />
                                <input type="radio" />Item 2<br />
                                <input type="radio" />Item 3<br />
                                <input type="radio" />Item 4<br />
                                <input type="radio" />Item 5<br />
                            </div>

                        </div>
                        <div className="right-list">
                            <ListingDetails   restData={this.state.restId}/>
                        </div>

                    </div>
                </div>

            </>
        )
    }
    componentDidMount(){
        const mealId = this.props.match.params.id;
        axios.get(`${url}/${mealId}`)
        .then((res) =>{
            this.setState({restId:res.data})
        } )
    }

}



export default Listing