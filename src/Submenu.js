import React, { useState, useRef, useEffect } from 'react'
import { useGLobalContext } from './context'
const Submenu = () => {
  const{isSubmenuOpen,location}=useGLobalContext();
  const container=useRef(null);
  useEffect(()=>{
  const submenu=container.current;
  const{center, bottom}=location;
  submenu.style.left=`${center}px`;
  submenu.style.top=`${bottom}px`;
  },[location])
  return <aside  ref={container} className={`${isSubmenuOpen?"submenu show":"submenu"}`}>

  </aside>
}

export default Submenu
