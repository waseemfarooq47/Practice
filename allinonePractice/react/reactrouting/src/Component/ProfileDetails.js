import React,{Component,Fragment} from 'react';




const ProfileDetails=(props)=>{
    console.log(props.match.params.topic)
    return (
        <div className="row">
        <div className="col-12">
            <div className="card text-center">
                <div className="card-header bg-info">
                    <h3>{props.match.params.topic} Deatails</h3>
                </div>
                <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text">This is {props.match.params.topic} Deatils Page!!! </p>
                </div>

                <div className="card-footer text-muted">
                     looking for details!!
                </div>
            </div>
        </div>
    </div>

    )}







/*class ProfileDetails extends  Component{
    render(props) {
        console.log(props)

        return (
            <div className="row">
            <div className="col-12">
                <div className="card text-center">
                    <div className="card-header bg-info">
                        <h3>Profile Deatails</h3>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text">This is Profile Deatils!!! </p>
                    </div>

                    <div className="card-footer text-muted">
                         Profile for best planning !!
                    </div>
                </div>
            </div>
        </div>
        )
        
    }
}*/

export default ProfileDetails