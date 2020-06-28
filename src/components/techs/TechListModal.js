import React, { useEffect } from 'react';
import TechItem from './TechItem';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';
import PropTypes from 'prop-types';

const TechListModal = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);

  return (
    <div id='tech-modal-list' className='modal'>
      <div className='modal-content'>
        <h4>Technicians List</h4>
        <ul className='collection'>
          {!loading && techs.length === 0 ? (
            <p className='center'>No techs to Show...</p>
          ) : (
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)
          )}
        </ul>
      </div>
    </div>
  );
};
TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
