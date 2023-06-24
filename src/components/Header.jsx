<<<<<<< HEAD
import React, { useState } from "react";
import NoteIcon from './image.png';


function Header() {

  return (
    <header>
      <img src={NoteIcon} alt="" />
      <h1>Note Keep</h1>
      
=======
import React from "react";
import EditNoteIcon from '@mui/icons-material/EditNote';

function Header() {
  return (
    <header>
      <h1><EditNoteIcon />Note Making</h1>
>>>>>>> efd236931db00b5982e6884bc28145af6b4ca1ac
    </header>
  );
}

export default Header;
