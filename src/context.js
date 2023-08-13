import React, { useState, useContext } from 'react'
import sublinks from './data'
import { createContext } from 'react';


const AppContext=createContext();

const AppProvider=(children)=>{
    const[isSidebarOpen,setIsSidebarOpen]=useState(true);
    const[isSubmenuOpen,setIsSubmenuOpen]=useState(true);


  const openSidebar=()=>{
    setIsSidebarOpen(true);
  }  
  const closesidebar=()=>{
    setIsSidebarOpen(false);
  }
  const openSubmenu=()=>{
    setIsSubmenuOpen(true);
  }  
  const closeSubmenu=()=>{
    setIsSubmenuOpen(false);
  }
    return(<AppContext.Provider value={{
        openSubmenu,
        openSidebar,
        closeSubmenu,
        closesidebar,
        isSubmenuOpen,
        isSidebarOpen
    }}>{children}</AppContext.Provider>)
}
export const useGLobalContext=()=>{return(useContext(AppContext))}

export {AppContext,AppProvider};

