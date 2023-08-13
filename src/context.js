import React, { useState, useContext } from 'react'
import sublinks from './data'
import { createContext } from 'react';


const AppContext=createContext();

const AppProvider=({children})=>{
    const[isSidebarOpen,setIsSidebarOpen]=useState(false);
    const[isSubmenuOpen,setIsSubmenuOpen]=useState(false);
const [location,setLocation]=useState({});
const [page,setPage]=useState({page:"",links:[]})

  const openSidebar=()=>{
    setIsSidebarOpen(true);
  }  
  const closeSidebar=()=>{
    setIsSidebarOpen(false);
  }
  const openSubmenu=(text,coordinates)=>{
    const page=sublinks.find((link)=>link.page===text);
    setPage(page);
    setIsSubmenuOpen(true);
    setLocation(coordinates)
  }  
  const closeSubmenu=()=>{
    setIsSubmenuOpen(false);
  }
    return(<AppContext.Provider value={{
        openSubmenu,
        openSidebar,
        closeSubmenu,
        closeSidebar,
        isSubmenuOpen,
        isSidebarOpen,
        location,
        page
    }}>{children}</AppContext.Provider>
    )
}
export const useGLobalContext=()=>{return(useContext(AppContext))}

export {AppContext,AppProvider};

