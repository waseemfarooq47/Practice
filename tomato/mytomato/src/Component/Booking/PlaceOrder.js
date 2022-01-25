import React, { Component } from 'react';

const menuUrl = "https://xomato.herokuapp.com/menuItem";
const placeOrder = "https://xomato.herokuapp.com/placeOrder"

class PlaceOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">Place Orders</div>
                            <div className="card-body">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-control">
                                                <label>Name</label>
                                                {/* <input className="form-control"  */}
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlaceOrder;