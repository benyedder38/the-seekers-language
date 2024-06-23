import React from 'react';
import { Routes, Route } from 'react-router-dom';
//import { Box } from "@mui/material";
import Dashboard from './Dashboard/Dashboard';
import Irab from './Irab/Irab';
import Vocabulary from './Vocabulary/Vocabulary';

const PageList = () => { 
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/vocabulary" element={<Vocabulary />} />
        <Route path="/irab" element={<Irab />} />
      </Routes>
    </>
  )
}

export default PageList;
