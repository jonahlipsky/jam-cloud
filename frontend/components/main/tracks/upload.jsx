import React from 'react';
import UploadFormContainer from './upload_form_container';
import { Route, Redirect, NavLink, Switch, Link, HashRouter} from 'react-router-dom';
import ShowTracks from './show_tracks';

class Upload extends React.Component{
  constructor(props){
    super(props);

  }

  handleRemove(track){
    return e => {
      this.props.removeTrack(track);
    };  
  }

  render(){
    return(
      
      <div className="upload-container page-centered-inner">
        <nav className='upload-nav-bar'>
          <NavLink exact to='/upload' activeClassName="upload-nav-selected">Upload</NavLink>
          <NavLink exact to='/you/tracks' activeClassName="upload-nav-selected">Your tracks</NavLink>
        </nav>
        
        <Switch>
          <Route exact path='/upload' render={(props) => <UploadFormContainer formType={'Upload'} {...props}/>} />
          <Route exact path='/you/tracks' render={(props) => <ShowTracks {...props}/>}/>
        </Switch>
        
      </div>
      
    ) 
  }
}

export default Upload;