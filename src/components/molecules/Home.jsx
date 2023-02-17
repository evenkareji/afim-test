import React from 'react';
import { Icon } from '../atoms/Icon';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import styled from 'styled-components';
// import { useDispatch } from 'react-redux';
// import { changeIsIcon } from '../../features/isIconSlice';
// import { useSelector } from 'react-redux';
export const Home = ({ isIcon }) => {
  // const reloadHome = () => {
  //   window.location.reload();
  // };
  // const dispatch = useDispatch();
  // const isFooter = useSelector((state) => state.isIcon);
  return (
    // onClick={dispatch(changeIsIcon())}
    <div>
      <Icon link={'/'}>
        {isIcon ? (
          <HomeIcon style={{ width: '32', height: '32' }} />
        ) : (
          <HomeOutlinedIcon style={{ width: '32', height: '32' }} />
        )}
        <SIconText isIcon={isIcon}>ホーム</SIconText>
      </Icon>
    </div>
  );
};

const SIconText = styled.small`
  font-weight: ${({ isIcon }) => (isIcon ? '800' : 'normal')};
  flex: 1;
  width: 120px;

  @media (min-width: 768px) {
    display: none;
  }
  @media (min-width: 1264px) {
    display: block;
    margin-left: auto;
    margin-left: 30px !important;
  }
`;
