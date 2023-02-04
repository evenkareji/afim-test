import React from 'react';
import styled from 'styled-components';
import { TextArea } from '../atoms/TextArea';
import { UserBorder } from '../atoms/UserBorder';
import { UserIconImg } from '../atoms/UserIconImg';

export const CommentAddForm = ({ src }) => {
  return (
    <SUserCommentBorder>
      <SUserImg src={src} />
      <SCommentContainer>
        <STextArea placeholder="コメントを追加..."></STextArea>
      </SCommentContainer>
    </SUserCommentBorder>
  );
};

const STextArea = styled(TextArea)`
  padding: 10px 0px 0px 0px;
  font-size: 20px;
  min-height: 26px;
  height: 50px;
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
`;
const SUserCommentBorder = styled(UserBorder)`
  align-items: center;
  width: 82%;
  margin: 0 auto;
  border: 1px solid #000;
`;

const SUserImg = styled(UserIconImg)`
  margin-right: 13px;
  width: 61;
  height: 61;
  text-align: left;
  background-color: #000;
  @media (min-width: 425px) {
    & {
      width: 71;
      height: 71;
    }
  }
`;
const SCommentContainer = styled.form`
  flex: 0.9;
  margin-left: 22px;
`;
