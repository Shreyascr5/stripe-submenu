import React, { useState, useRef, useEffect } from 'react'
import { useGLobalContext } from './context'
const Submenu = () => {
  const{isSubmenuOpen,
    location,
    page:{page,links}}=useGLobalContext();
  const container=useRef(null);
  useEffect(()=>{
  const submenu=container.current;
  const{center, bottom}=location;
  submenu.style.left=`${center}px`;
  submenu.style.top=`${bottom}px`;
  },[location])
  return <aside  ref={container} className={`${isSubmenuOpen?"submenu show":"submenu"}`}>
  <h4>{page}</h4>
  </aside>
}

export default Submenu
