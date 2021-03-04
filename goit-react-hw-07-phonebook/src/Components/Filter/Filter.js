import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/phoneBook/phoneBook-actions';
import './Filter.css';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const Filter = ({ value, onChangeFilter, contacts }) => {
  return (
    <CSSTransition
      in={contacts.length > 1}
      timeout={250}
      classNames="Filter-fade"
      unmountOnExit
    >
      <form className="form">
        <label>
          <span className="title">Find contacts by name</span>
          <input
            className="input"
            type="text"
            value={value}
            onChange={onChangeFilter}
          />
        </label>
      </form>
    </CSSTransition>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
  contacts: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
  value: state.phoneBook.filter,
  contacts: state.phoneBook.contacts,
});

const mapDispatchToProps = (dispatsh) => ({
  onChangeFilter: (e) => dispatsh(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
