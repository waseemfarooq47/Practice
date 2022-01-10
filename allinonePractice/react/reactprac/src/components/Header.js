import react,{Component} from 'react';
import './header.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state={
            title:"put your logo here",
            input:"User Input Here"
        };
    }

    handleChange=(event)=>{
        this.setState({input:event.target.value?event.target.value:"User Input Here"});
        this.props.userInput(event.target.value)
    }

    render() {
        // var myStyle={
        //     header:{
        //         backgroundColor: 'tomato'
        //     },

        //     logo:{
        //         fontSize:'20px',
        //         color: 'white',
        //     }

        // }


        return(
            <react.Fragment>
                <header className="m-0 bg-dark">
                    <div className="logo text-white">{this.state.title}</div>
                    <center>
                        <div class="col-lg-3 m-auto">
                            <input type="text" className="form-control col-lg-3" onChange={this.handleChange}/> 
                            <button className="btn btn-primary mt-4"> Click here </button>
                            <h6 className="mt-2 text-white">{this.state.input}</h6> <hr/>
                        </div>
                        
                    </center>
                </header>
            
            </react.Fragment> 
        )
    }
}

/*
const Header=()=>{
    return(
        <react.Fragment>
        <h3><center>This is header</center> </h3> <hr/>
        </react.Fragment> 
    )
}*/

export default Header