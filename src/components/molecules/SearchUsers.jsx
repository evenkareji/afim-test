import React from 'react';
import styled from 'styled-components';
import { Search } from '@mui/icons-material';
import { SearchForm } from '../atoms/SerachForm';
export const SearchUsers = () => {
  return (
    <SearchContainer>
      {/* <Search style={{ position: 'absolute', top: '5px', left: '5px' }} /> */}
      <SearchForm placeholder="検索" />
    </SearchContainer>
  );
};
const SearchContainer = styled.div`
  margin: 0 auto;
  width: 92%;
  position: relative;
  max-width: 680px;
  margin-bottom: 25px;
`;
