/**
 * Created by Kevin on 2016/11/21.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/actions';
import QuestionPreview from '../components/QuestionPreview';
export const QuestionPreviewPage = (props) => {
  return (
    <QuestionPreview
      changeTitle = {props.actions.changeTitle}
      logQuestions = {props.actions.logQuestions}
      ui={props.ui}
      image={props.image}
      {...props}
    />
  );
};

QuestionPreviewPage.propTypes = {
  actions: PropTypes.object.isRequired,
  ui: PropTypes.object.isRequired,
  image:PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    ui: state.ui,
    image: state.image
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionPreviewPage);
