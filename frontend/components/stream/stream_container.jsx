import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/session_actions';
import { fetchTracks } from '../../actions/track_actions';
import Stream from './stream';

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchTracks: () => dispatch(fetchTracks())
});

export default connect(null, mapDispatchToProps)(Stream);