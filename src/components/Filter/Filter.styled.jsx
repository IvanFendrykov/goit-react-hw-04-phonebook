import styled from 'styled-components';

export const LabelDescr = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;

  color: ${p => p.theme.colors.text};
  text-shadow: ${p => p.theme.shadows.textShadow};
`;

export const LabelWrapper = styled.div`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
  margin-left: ${p => p.theme.space[3]}px;
`;

export const Input = styled.input`
  padding: ${p => p.theme.space[3]}px;

  max-width: 100%;
  width: 300px;

  border: none;
  outline: none;
  border-radius: ${p => p.theme.radii.fit};
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.white};

  text-shadow: ${p => p.theme.shadows.textShadow};
  font-size: ${p => p.theme.fontSizes.s};
`;
