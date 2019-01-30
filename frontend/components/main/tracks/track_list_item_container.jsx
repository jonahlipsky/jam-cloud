import { removeTrack, editTrackNumber, noListItemFrozen, freezeListItem } from '../../../actions/track_actions';
import { pushTrackToQueue, pushToFrontOfQueue } from '../../../actions/sound_controller_actions';
import { connect } from 'react-redux';
import TrackListItem from './track_list_item';

const mapStateToProps = state => {
  let liSelected = state.io.li.liSelected;
  return({
    liSelected
  });
};

const mapDispatchToProps = dispatch => ({
  removeTrack: (track) => dispatch(removeTrack(track)),
  editTrackNumber: (id) => dispatch(editTrackNumber(id)),
  pushTrackToQueue: (trackId) => dispatch(pushTrackToQueue(trackId)),
  pushToFrontOfQueue: (trackId) => dispatch(pushToFrontOfQueue(trackId)),
  freezeListItem: (trackId) => dispatch(freezeListItem(trackId)),
  noListItemFrozen: () => dispatch(noListItemFrozen())
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackListItem);