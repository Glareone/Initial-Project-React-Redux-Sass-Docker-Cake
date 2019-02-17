import React, { Component } from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSomething } from '../../../actions/asyncActions';
import styles from './Page.scss';

class Page extends Component {
  componentDidMount() {
    const { name } = this.props;
    this.props.actions.getSomething(name);
  }

  // Fake.
  isMobileViewport = () => false;

  render() {
    const { data } = this.props;
    const isMobileViewport = this.isMobileViewport();
    return (
      <div className={cx(isMobileViewport ? styles.mobileStyle : styles.desktopStyle)}>
        {`hello world! ${data}`}
      </div>
    );
  }
}

const mapStateToProps = ({ something: { data } }) => ({
  data,
});

const mapDispatchToProps = (dispatch) => {
  const actions = {
    getSomething,
  };
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
