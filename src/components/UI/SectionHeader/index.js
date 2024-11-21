import React from 'react';
import './SectionHeader.scss';

const SectionHeader = ({ subtitle, title, className = '' }) => {
  return (
    <div className={`section-header ${className}`}>
      <p className="section-header__subtitle">{subtitle}</p>
      <h2 className="section-header__title">{title}</h2>
      <div className="section-header__underline"></div>
    </div>
  );
};

export default SectionHeader;
