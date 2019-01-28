import React from 'react';
import { connect } from 'react-redux';
import { fetchAllUsers } from '../../actions/session_actions';
import { fetchTracks } from '../../actions/track_actions';
import Stream from './stream';

const mapDispatchToProps = dispatch => ({
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchTracks: () => dispatch(fetchTracks())
});

export default connect(null, mapDispatchToProps)(Stream);