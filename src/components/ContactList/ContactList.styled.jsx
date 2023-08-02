import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: ${props => props.theme.space[3]}px;

  max-width: 100%;
  width: 300px;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${props => props.theme.space[4]}px;

  color: ${props => props.theme.colors.black};
  text-shadow: ${props => props.theme.shadows.textShadow};
  font-size: ${props => props.theme.fontSizes.s};
`;

export const Btn = styled.button`
  padding: ${props => props.theme.space[2]}px;

  border: none;
  outline: none;
  border-radius: ${props => props.theme.radii.round};

  background-color: ${props => props.theme.colors.brown};
  box-shadow: ${props => props.theme.shadows.boxShadow};
  transition: all 0.2s ease-in-out;
`;
