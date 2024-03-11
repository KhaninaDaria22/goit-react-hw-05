import { toast } from "react-hot-toast";
import { useState } from "react";


const SearchMovies = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        if (!query.trim()) {
            toast.error('Please enter something');
            return;
        }

        onSubmit(query.trim());
        setQuery('');
    };

    const handleInputChange = e => {
        setQuery(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="query"
                type="text"
                placeholder="Search movies"
                value={query}
                onChange={handleInputChange}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchMovies;


// const SearchMovies = ({ onSubmit}) => {
//     const handleSubmit = e => {
//         e.preventDefault();

//         const query = e.target.elements.query.value;

//         if (!query) {
//             toast.error('Please enter something');
//             return
//         }

//         onSubmit(query);
//         e.target.reset();
//     };

//     return( 
//         <form onSubmit={handleSubmit}>
//             <input name="query" type="text" placeholder="Search movies" />
//             <button type="submit">
//                 button 
//             </button>
//         </form>
//     );
//  }

//  export default SearchMovies;