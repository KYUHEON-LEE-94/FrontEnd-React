import { createContext, useContext, useEffect, useState } from "react";

const DarkNodeContext = createContext();

//전달받는 children 인자로 전달받음
export function DarkModeProvider({ children }) {
    //useState선언
    const [darkMode, setdarkMode] = useState(false);

    const toggleDarkMode = () => {
        setdarkMode(!darkMode);
        updateDarkMode(!darkMode);
    }

    useEffect(() => {

        const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)

        setdarkMode(isDark)
        updateDarkMode(isDark)
    }, [])

    return (
        <DarkNodeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkNodeContext.Provider>
    );

}
//
//

const updateDarkMode = (darkMode) => {
    if (darkMode) {
        //htmldp .dark Class 부여
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
    } else {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
    }
}

//useContext(넘길 createContext()변수명)
export const useDarkMode = () => useContext(DarkNodeContext);