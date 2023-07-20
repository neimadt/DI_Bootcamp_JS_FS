import { Link } from 'react-router-dom';
import { IconReact } from './IconReact';
import { IconImdb } from './IconImdb';

export const Navbar = () => {

    return (
        <nav className="fixed flex items-center top-0 left-0 right-0 h-20 bg-gray-700 px-10 z-50">
            <Link to="/" className="text-white text-xl">
                Movies Series Info
            </Link>
            <div className="flex-1 flex items-center justify-end h-full py-2">
                <IconImdb className="h-full w-auto text-yellow-400" />
                <IconReact className="h-full w-auto text-blue-600 ml-3" />
            </div>
        </nav>
    );
};
