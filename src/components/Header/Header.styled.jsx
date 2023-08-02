import styled from 'styled-components';

export const MainHeader = styled.h1`
  margin-bottom: ${p => p.theme.space[4]}px;
  text-align: center;
  color: ${p => p.theme.colors.accent};
  text-shadow: ${p => p.theme.shadows.textShadow};
  font-size: ${p => p.theme.fontSizes.l};
`;