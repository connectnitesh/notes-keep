import React, { useState } from "react";
import NoteIcon from './image.png';


function Header() {

  return (
    <header>
      <img src={NoteIcon} alt="" />
      <h1>Note Keep</h1>
    </header>
  );
}

export default Header;
