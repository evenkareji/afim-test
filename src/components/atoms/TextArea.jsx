import styled from 'styled-components';

export const TextArea = styled.textarea`
  padding: 14px 3px;
  width: 100%;
  max-width: 500px;
  font-size: 24px;
  resize: none;
  border: none;
  outline: none;
  height: auto;
  min-height: 122px;
  &::placeholder {
    color: #ce936c;
  }
`;
