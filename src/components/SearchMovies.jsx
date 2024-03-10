import { toast } from "react-hot-toast";

const SearchMovies = ({ onSubmit}) => {
    const handleSubmit = e => {
        e.preventDefault();

        const query = e.target.elements.query.value;

        if (!query) {
            toast.error('Please enter something');
            return
        }

        onSubmit(query);
        e.target.reset();
    };

    return( 
        <form onSubmit={handleSubmit}>
            <input name="query" type="text" placeholder="Search movies" />
            <button type="submit">
                button 
            </button>
        </form>
    );
 }

 export default SearchMovies;