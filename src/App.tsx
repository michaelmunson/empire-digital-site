import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import themes from './utils/theme';
import { ThemeProvider } from '@mui/material/styles';

function App() {
    const [theme, setTheme] = useState<"light"|"dark">(themes.decide());

    return (
        <ThemeProvider theme={themes[theme]}>
            <Router>
                <NavBar/>
                <Routes>
                    <Route path={"/"} element={
                        <HomePage/>
                    }/>
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
