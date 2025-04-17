import React from 'react';
import './SectionDivider.scss';

const SectionDivider = ({ style = {}, className = '' }) => (
  <div className={`section-divider ${className}`} style={style}>
    {/* The divider now uses ::before and ::after pseudo-elements for the patterns */}
  </div>
);

export default SectionDivider;
