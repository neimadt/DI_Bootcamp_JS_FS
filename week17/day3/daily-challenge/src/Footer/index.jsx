import { IconReact } from '../Navbar/IconReact';

export const Footer = () => {

    return (
        <footer className="w-full h-12 flex items-center justify-center bg-gray-700 text-white">
            Using <IconReact className="h-5 mx-1 w-auto" /> React JS & Redux JS integrated with external movies data API <a className="ml-1 text-blue-600 hover:underline" target="_blank" href="https://www.omdbapi.com">OMDB</a>
        </footer>
    );
};
