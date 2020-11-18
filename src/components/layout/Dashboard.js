
import React, { useState, useEffect } from 'react';
import Login from '../../pages/Login';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from '../GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';

//หน้าหลลักแสดงในส่วนของหลัก Login
const Dashboard = () => {

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {routing}
      </ThemeProvider>
    </div>
  );
};

export default Dashboard;