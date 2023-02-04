import React from 'react';
import styled from 'styled-components';

export const SearchForm = () => {
  return <SSearchForm placeholder="検索" />;
};
const SSearchForm = styled.input`
  padding-left: 25px;
  padding-right: 25px;
  width: 100%;
  border-radius: 11px;
  background-color: #f0f0f0;
  border: none;
  outline: none;
`;
