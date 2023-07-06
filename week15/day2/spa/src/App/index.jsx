import './style.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import MyProjects from '../pages/MyProjects';
import Project from '../pages/Project';
import LetsCount from '../pages/LetsCount';
import Four0Four from '../pages/Four0Four';


const App = () => {

    return (
        <main>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about-music">About Music</Link>
                </li>
                <li>
                    <Link to="/about-food">About Food</Link>
                </li>
                <li>
                    <Link to="/projects">My Projects</Link>
                </li>
                <li>
                    <Link to="/project/javascript">My Javascript Project</Link>
                </li>
                <li>
                    <Link to="/project/React">My React Project</Link>
                </li>
                <li>
                    <Link to="/count">Let's Count</Link>
                </li>
            </ul>

            <section className="route-container">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about-music" element={<About hobby="music" />} />
                    <Route path="/about-food" element={<About hobby="food" />} />
                    <Route path="/projects" element={<MyProjects />} />
                    <Route path="/project/:name" element={<Project />} />
                    <Route path="/count" element={<LetsCount />} />
                    <Route path="*" element={<Four0Four />} />
                </Routes>
            </section>

            <footer style={{ width: '100%', backgroundColor: 'red', height: '30px' }}>
                My footer
            </footer>
        </main>
    );
};

export default App;
