import React, { useState } from 'react';
import { AppBar, Toolbar, Box, InputBase, styled, Menu, MenuItem } from '@mui/material';
import {
  Menu as MenuIcon,
  Tune,
  HelpOutlineOutlined,
  SettingsOutlined,
  AppsOutlined,
  AccountCircleOutlined,
  Search,
} from '@mui/icons-material';

import { gmailLogo } from '../constants/constant';

const StyledAppBar = styled(AppBar)`
  background: #f5f5f5;
  box-shadow: none;
`;

const SearchWrapper = styled(Box)`
  background: #eaf1fb;
  margin-left: 80px;
  border-radius: 8px;
  min-width: 690px;
  max-width: 720px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  & > div {
    width: 100%;
  }
`;

const OptionsWrapper = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: end;
  & > svg {
    margin-left: 20px;
    cursor: pointer;
  }
`;

const Header = ({ toggleDrawer }) => {
  const [appsMenuAnchorEl, setAppsMenuAnchorEl] = useState(null);

  const handleAppsClick = (event) => {
    setAppsMenuAnchorEl(event.currentTarget);
  };

  const handleAppsClose = () => {
    setAppsMenuAnchorEl(null);
  };

  const openHelpLink = () => {
    window.open(
      'https://support.google.com/a/users/answer/9259748?visit_id=01705292982740-4744490734191736081&p=gmail_training&rd=1',
      '_blank'
    );
  };

  const openAppLink = (url) => {
    window.open(url, '_blank');
    handleAppsClose();
  };

  const googleIconUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfW1WKr0DDg0AzSmaJ0WqEh32H7vlgRw5vAg&usqp=CAU';
  const youtubeIconUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoeGsW2X70rm9HZRrgNw2aQwbqGxdrPIXyGA&usqp=CAU';
  const newsIconUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5jMDSJ1Z69NWKlqtF-U9d2vxRTQKMN679uX2gbWYUFHXrpGxSqg5sOa1lIk02S1ZDaWA&usqp=CAU';
  const playstoreIconUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT797OfcQpQ54yZfv8deVaJvUVKOTOm0-7OKQ&usqp=CAU';

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <MenuIcon color="action" onClick={toggleDrawer} />
        <img src={gmailLogo} alt="logo" style={{ width: 110, marginLeft: 15 }} />
        <SearchWrapper>
          <Search color="action" />
          <InputBase />
          <Tune color="action" />
        </SearchWrapper>

        <OptionsWrapper>
          <HelpOutlineOutlined color="action" onClick={openHelpLink} />
          <SettingsOutlined color="action" />
          <AppsOutlined color="action" onClick={handleAppsClick} />

          <Menu
            anchorEl={appsMenuAnchorEl}
            open={Boolean(appsMenuAnchorEl)}
            onClose={handleAppsClose}
          >
            <MenuItem onClick={() => openAppLink('https://www.google.com/')}>
              <img src={googleIconUrl} alt="Google" style={{ width: 24, marginRight: 8 }} />
              Google
            </MenuItem>
            <MenuItem onClick={() => openAppLink('https://www.youtube.com/')}>
              <img src={youtubeIconUrl} alt="YouTube" style={{ width: 24, marginRight: 8 }} />
              YouTube
            </MenuItem>
            <MenuItem onClick={() => openAppLink('https://news.google.com/')}>
              <img src={newsIconUrl} alt="Google News" style={{ width: 24, marginRight: 8 }} />
              Google News
            </MenuItem>
            <MenuItem onClick={() => openAppLink('https://play.google.com/')}>
              <img src={playstoreIconUrl} alt="Play Store" style={{ width: 24, marginRight: 8 }} />
              Play Store
            </MenuItem>
          </Menu>

          <AccountCircleOutlined color="action" />
        </OptionsWrapper>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
