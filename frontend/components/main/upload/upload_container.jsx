import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import UploadForm from './upload_form';
import { NavLink } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../../util/route_util';


class Upload extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      
      <div className="upload-container">
        <nav>
          <NavLink exact to='/upload'>Upload</NavLink>
          <NavLink exact to='/you/tracks'>Your tracks</NavLink>
        </nav>
        <ProtectedRoute exact path="/upload" component={UploadForm}/>
        <ProtectedRoute exact path="/you/tracks" component={<h1>Your Tracks!</h1>}/>
      </div>
      
    ) 
  }
}


export default withRouter(connect(null, null)(Upload));