import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DefaultButton = styled.button`
  color: ${(props) => (props.$color ? props.$color : '#000')};
  background-color: ${(props) =>
    props.$backgroundColor ? props.$backgroundColor : '#BF4F74'};
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
`;

/**
 * Primary UI component for user interaction
 */
export const Button = ({ color, backgroundColor, label, ...props }) => {
  return (
    <DefaultButton $color={color} $backgroundcolor={backgroundColor} {...props}>
      {label}
    </DefaultButton>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  color: null,
  onClick: undefined,
};
