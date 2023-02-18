import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { TextArea } from '../atoms/TextArea';
import { UserBorder } from '../atoms/UserBorder';
import { UserIconImg } from '../atoms/UserIconImg';

export const CommentAddForm = () => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const user = useSelector((state) => state.user.user);
  return (
    <SUserCommentBorder>
      <SUserImg src={PUBLIC_FOLDER + user.profileImg} />
      <SCommentContainer>
        <STextArea placeholder="コメント追加できません..."></STextArea>
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
