import React,{ useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTheme } from '../store/slices/ThemeSlice'

const Switcher = () => {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  useEffect(()=>{
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme)
  }, [ theme ]);

  const hadleThemeChange = () => {
    const toggledTheme = theme === 'dark' ? 'light' : 'dark'
    dispatch(setTheme(toggledTheme))
  }

  return (
    <button
      onClick={hadleThemeChange}>
      CLICK
    </button>
    // <div className="toggle-switch">
    // <input type="checkbox" className="toggle-switch-checkbox" name="toggleSwitch" id="toggleSwitch" />
    // <label className="toggle-switch-label" htmlFor="toggleSwitch"> <span className="toggle-switch-inner" />
    // <span className="toggle-switch-switch" />
    // </label>
    // </div>
  )
}

export default Switcher
