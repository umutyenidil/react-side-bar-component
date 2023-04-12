import React, {useEffect} from "react";
import './App.css';

const App = () => {
    useEffect(() => {
        const link = document.createElement("link");
        link.href = "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css";
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }, []);

    const tempLink = 'https://www.github.com/umutyenidil';


    return (
        <div className='main-box'>
            <input type='checkbox' id='check'/>
            <div className='btn-one'>
                <label for='check'>
                    <i className='bx bx-menu'></i>
                </label>
            </div>
            <div className='sidebar-menu'>

                <div className='logo'>
                    <a href={tempLink}>
                        Umut Yenidil
                    </a>
                </div>
                <div className='btn-two'>
                    <label htmlFor='check'>
                        <i className='bx bx-x'></i>
                    </label>
                </div>
                <div className='menu'>
                    <ul>
                        <li>
                            <a href={tempLink}>
                                <i className='bx bxs-dashboard'></i>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href={tempLink}>
                                <i className='bx bx-link'></i>
                                <span>Shortcuts</span>
                            </a>
                        </li>
                        <li>
                            <a href={tempLink}>
                                <i className='bx bx-spreadsheet'></i>
                                <span>Overview</span>
                            </a>
                        </li>
                        <li>
                            <a href={tempLink}>
                                <i className='bx bxs-calendar'></i>
                                <span>Events</span>
                            </a>
                        </li>
                        <li>
                            <a href={tempLink}>
                                <i className='bx bxs-help-circle'></i>
                                <span>About</span>
                            </a>
                        </li>
                        <li>
                            <a href={tempLink}>
                                <i className='bx bx-slider-alt'></i>
                                <span>Services</span>
                            </a>
                        </li>
                        <li>
                            <a href={tempLink}>
                                <i className='bx bxs-phone'></i>
                                <span>Contact</span>
                            </a>
                        </li>
                        <li>
                            <a href={tempLink}>
                                <i className='bx bxs-chat'></i>
                                <span>Feedback</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='social-media'>
                    <a href={tempLink}><i className='bx bxl-facebook'></i></a>
                    <a href={tempLink}><i className='bx bxl-twitter'></i></a>
                    <a href={tempLink}><i className='bx bxl-instagram-alt'></i></a>
                    <a href={tempLink}><i className='bx bxl-youtube'></i></a>
                </div>
            </div>

        </div>
    );
}

export default App;
