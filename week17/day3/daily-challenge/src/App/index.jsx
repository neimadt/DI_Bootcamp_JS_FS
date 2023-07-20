import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { SearchMovies } from '../SearchMovies';
import { MovieDetails } from '../MovieDetails';
import { Footer } from '../Footer';


export const App = () => {

    return (
        <>
            <main className="min-h-full flex flex-col">
                <Navbar />
                <section className="flex-1 pt-20 px-10">
                    <Routes>
                        <Route exact path="/" element={<SearchMovies />} />
                        <Route path="/movie/:imdbID" element={<MovieDetails />} />
                    </Routes>
                </section>
                <Footer />
            </main>
        </>
    );
};
