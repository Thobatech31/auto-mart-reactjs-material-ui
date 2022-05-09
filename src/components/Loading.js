import React from 'react';
import LaddaButton, { XL, SLIDE_UP } from 'react-ladda';

const Loading = ({
  children, type, className, loading, onClick,
}) => (
  <LaddaButton
    type={type}
    className={className}
    loading={loading || true}
    onClick={onClick}
    data-color="#FFF"
    data-size={XL}
    data-style={SLIDE_UP}
    data-spinner-size={30}
    data-spinner-color="#FFF"
    data-spinner-lines={15}
  >
    {children}
  </LaddaButton>
);

export default Loading;
