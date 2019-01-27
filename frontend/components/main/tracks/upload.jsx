import React from 'react';
import UploadFormContainer from './upload_form_container';
import { Route, Redirect, NavLink, Switch, Link, HashRouter} from 'react-router-dom';
import ShowTracks from './show_tracks';

class Upload extends React.Component{
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.fetchAllUsers();
  }

  handleRemove(track){
    return e => {
      this.props.removeTrack(track);
    };  
  }

  render(){
    // let tracks;
    // if(this.props.currentUserTracks){
    //   tracks = this.props.currentUserTracks.map((track, i) => {
    //       return <li key={i}> Track: {track.title}  
    //       <button onClick={this.handleRemove(track)}>Delete Track</button>
    //       <img className="image-test-class" src={track.image} />
    //       <audio src={track.track} />
    //         {/* <source src={track.track}></source>
    //       </audio> */}
    //       <UploadForm track={track} formType={"Update"} />
    //       </li>
    //   })
    // } else {
    //   tracks = ''
    // }
    return(
      
      <div className="upload-container page-centered-inner">
        <nav className='upload-nav-bar'>
          <NavLink exact to='/upload' activeClassName="upload-nav-selected">Upload</NavLink>
          <NavLink exact to='/you/tracks' activeClassName="upload-nav-selected">Your tracks</NavLink>
        </nav>
        
        <Switch>
          <Route path='/upload' render={(props) => <UploadFormContainer formType={'Upload'} {...props}/>} />
          <Route path='/you/tracks' render={(props) => <ShowTracks {...props}/>}/>
        </Switch>
        
        {/* <UploadForm formType={"Upload"}/> */}
        {/* <ProtectedRoute exact path="/you/tracks" component={UploadForm}/> */}
        {/* <ul>
          {tracks}
        </ul> */}
      </div>
      
    ) 
  }
}

export default Upload;