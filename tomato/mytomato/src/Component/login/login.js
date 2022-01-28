import React, { Component } from 'react';
import Header from '../Header';
// import './placeOrder.css'
// const loginUrl = "http://localhost:5000/api/auth/login";
const loginUrl = "https://developerjwt.herokuapp.com/api/auth/login";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            email:'example@example.com',
            password:'',
            message:''
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit =(event) => {
        fetch(loginUrl,{
            method: "POST",
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })

        .then((res) => res.json())
        .then((data) => {
            if(data.auth ===  false){
                this.setState({message:data.token});
            }else{
                localStorage.setItem('ltk',data.token)
                
                this.props.history.push('/')
            }
        })

    }


    render() {
        return (
            <>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header bg-success text-white">Login</div>
                            <div className="card-body">
                                <div className="row">
                                    <h5 className="text-danger">{this.state.message}</h5>
                                    <div className="col-6">
                                        <div className="form-control">
                                            <label>Email</label>
                                            <input className="form-control" name="email" value={this.state.email} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-control">
                                            <label>Password</label>
                                            <input className="form-control" name="password" value={this.state.password} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                
                                    <button className="btn btn-success" onClick={this.handleSubmit}>
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }

    componentDidMount() {
        
    }
}

export default Login;