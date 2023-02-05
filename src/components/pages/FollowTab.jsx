import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { FollowerLists } from './FollowerLists';
import { FollowLists } from './FollowLists';

export const FollowTab = ({ isToPage, toFollowsPage }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <SBox isToPage={isToPage}>
      <SArrowBackIosNewIconBox>
        <SArrowBackIosNewIcon onClick={toFollowsPage} />
      </SArrowBackIosNewIconBox>
      <STabsOutline>
        <STabs centered value={tabIndex} onChange={handleTabChange}>
          <STab label="フォロー" />
          <STab label="フォロワー" />
        </STabs>
      </STabsOutline>

      {tabIndex === 0 && <FollowLists />}
      {tabIndex === 1 && <FollowerLists />}
    </SBox>
  );
};

const SArrowBackIosNewIconBox = styled.div`
  width: 92%;
  margin: 0 auto;
  max-width: 680px;
`;
const SArrowBackIosNewIcon = styled(ArrowBackIosNewIcon)`
  width: 92%;
  max-width: 680px;
  margin: 0 auto 20px;
`;
const SBox = styled.div`
  padding-top: 22px;
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  z-index: 100000;

  background-color: #fff;
  transition: transform 0.3s;
  transform: ${({ isToPage }) => (isToPage ? 'none' : 'translateX(100%)')};
`;
const STabsOutline = styled.div`
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
`;
const STabs = styled(Tabs)`
  max-width: 680px;
  width: 100%;
`;

const STab = styled(Tab)`
  max-width: 1300px;
  width: 50%;
  min-width: 150px;
`;
