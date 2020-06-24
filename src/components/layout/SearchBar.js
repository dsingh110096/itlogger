import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchLogs } from '../../actions/logActions';
import { useRef } from 'react';

const SearchBar = ({ searchLogs }) => {
  const text = useRef('');

  const onChange = (e) => searchLogs(text.current.value);

  return (
    <nav style={{ marginBottom: '30px' }} className='orange'>
      <div className='nav-wrapper'>
        <form autoComplete='off'>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              placeholder='Seach Logs'
              ref={text}
              onChange={onChange}
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
};

export default connect(null, { searchLogs })(SearchBar);
