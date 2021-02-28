import React from 'react';
import styled from 'styled-components';

const StyledSubHeading = styled.span`
  padding: 0 10px;
  border-bottom: 1px solid #c1c1c1;
  margin-bottom: 10px;
`;

const SubHeading = ({ children }) => (
  <StyledSubHeading>
    {children}
  </StyledSubHeading>
);

export default SubHeading;
