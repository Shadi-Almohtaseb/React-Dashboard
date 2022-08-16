import React,{ createContext , useContext , useState } from "react";

const StateContext = createContext();

const initialSate = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({children}) => {
    const [activeMenu , setActiveMenu] = useState(true);
    const [isClicked , setIsClicked] = useState(initialSate);
    const [screenSize , setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
        setThemeSettings(false);
      };

      const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
        setThemeSettings(false);
      };
    
    
    const handleClick = (Clicked) => {
        setIsClicked({...initialSate, [Clicked]:true});
    }

    return(
        <StateContext.Provider 
            value={{activeMenu, setActiveMenu ,isClicked ,setIsClicked, handleClick , screenSize , setScreenSize , currentColor ,currentMode , setCurrentColor , setCurrentMode ,themeSettings, setThemeSettings , setMode , setColor}}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);


/*
    *To Create a your functions:
    import React,{ createContext , useContext , useState } from "react";


    1-create a context :> const MyContext = createContext();

    2-place your Functions inside ContextProvider :> export const ContextProvider = ({children}) => { ...... }

    3-return the Functions (children) inside your ContextProvider inside <StateContext.Provider> :>     return(
        <StateContext.Provider 
            value={{activeMenu, setActiveMenu}}
        >
            {children}
        </StateContext.Provider>
        )

    4-export your Functions :> export const useStateContext = () => useContext(MyContext);
    
*/