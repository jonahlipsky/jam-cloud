import React from 'react';


class Stream extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllUsers();
    this.props.fetchTracks();
  }

  render(){
    return(
      <div>

        <h1>Stream Page!</h1>
      </div>
    )
  }
} 

export default Stream;