import useLocalStorage from "./useLocalStorage.js"
import React, { useEffect } from "react";

const useDarkMode = (key, initialValue) => {
    const [value, setValue] = useLocalStorage(key, initialValue);
    
    useEffect(() => {
        if (value==true) {
           document.querySelector('body').classList.add('dark-mode')
        } 
        
        else {
           document.querySelector('body').classList.remove('dark-mode')
        }
      }, [value]);
      
      return [value, setValue];
}

export default useDarkMode;