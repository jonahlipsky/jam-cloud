import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
  let userId = ownProps.match.params.userId;
  let user = state.entities.users[userId] || {};
  return({
    user
  });
};

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(UserShow));