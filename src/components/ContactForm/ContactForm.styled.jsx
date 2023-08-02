import styled from 'styled-components';
import { Form as FormikForm, Field, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.space[3]}px;
  margin-bottom: ${props => props.theme.space[4]}px;
  padding: ${props => props.theme.space[3]}px;

  max-width: 100%;
  width: 500px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.space[3]}px;

  max-width: 100%;
  width: 500px;

  color: ${props => props.theme.colors.text};
  text-shadow: ${props => props.theme.shadows.textShadow};
`;

export const LabelWrapper = styled.div`
  display: flex;
  gap: ${props => props.theme.space[3]}px;
  margin-left: ${props => props.theme.space[3]}px;
`;

export const FieldFormik = styled(Field)`
  padding: ${p => p.theme.space[3]}px;

  max-width: 100%;
  border-radius: ${props => props.theme.radii.fit};
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.white};
  text-shadow: ${props => props.theme.shadows.textShadow};
  font-size: ${props => props.theme.fontSizes.s};
`;

export const ErrorMessage = styled(FormikError)`
  max-width: 500px;
  font-style: italic;
  color: #9e0202;
`;

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.space[2]}px;

  padding: ${props => props.theme.space[3]}px;

  max-width: 100%;

  border: ${props => props.theme.borders.none};
  outline: none;
  border-radius: ${props => props.theme.radii.fit};

  box-shadow: ${props => props.theme.shadows.boxShadow};
  transition: all 0.2s ease-in-out;

  background-color: ${props => props.theme.colors.brown};
  color: ${props => props.theme.colors.white};
  cursor: pointer;
`;
