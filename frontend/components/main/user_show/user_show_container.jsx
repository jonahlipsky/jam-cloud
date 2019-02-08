import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {

  return({

  });
};

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(UserShow));