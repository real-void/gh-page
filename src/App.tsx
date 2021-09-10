import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import Start from "./components/Start/Start";
import "./components/main.css"

const App = () => {
    const projectRef = React.createRef()
    const aboutRef = React.createRef()
    const quotesRef = React.createRef()
    const connectRef = React.createRef()
    return (
        <div>
            <Navbar refs={[aboutRef, quotesRef, projectRef, connectRef]}/>
            <Start refs={[aboutRef, quotesRef, projectRef, connectRef]}/>
        </div>
    );
}

export default App
