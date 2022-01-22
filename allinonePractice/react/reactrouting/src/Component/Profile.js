import React,{Component,Fragment} from 'react';

class Profile extends  Component{
    render() {

        return (
            <div className="row">
            <div className="col-12">
                <div class="card text-center">
                    <div class="card-header bg-success">
                        <h3>Profile</h3>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p class="card-text">This is Profile !!! </p>
                    </div>
                    <div class="card-footer text-muted">
                         Profile for best planning !!
                    </div>
                </div>
            </div>
        </div>
        )
        
    }
}

export default Profile