import styled from 'styled-components';

export const TextArea = styled.textarea`
  @media (max-width: 425px) {
    & {
      font-size: 18px;
    }
  }
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
