import React from 'react';
import propTypes from 'prop-types';
import s from '../Style.module.css';

function SectionTitle({ children }) {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Please leave feedback</h1>
      {children}
    </div>
  );
}

SectionTitle.propTypes = {
  children: propTypes.node,
};

export default SectionTitle;
