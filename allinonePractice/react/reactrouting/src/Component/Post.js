import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom'
class Post extends  Component{
    render() {

        return (
            <div className="row">
            <div className="col-12">
                <div class="card text-center">
                <div class="card-header bg-warning">
                        <h3>Post Page</h3>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p class="card-text">This is Post Page !!! </p>
                    </div>
                    <div class="card-footer text-muted">
                         <Link to="post/javascript" className="btn btn-success">JavaScript</Link>
                         <Link to="post/react" className="btn btn-warning">React</Link>
                         <Link to="post/node" className="btn btn-danger">Node</Link>
                    </div>
                </div>
            </div>
        </div>
        )
        
    }
}

export default Post