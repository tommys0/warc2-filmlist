import React from 'react';
import Movie from './Movie';

function MovieList() {
    return (
        <div className="movie-list">
            <Movie name="Rychle a Zbesile 1" author="Nom Nom" />
            <Movie name="Rychle a Zbesile 2" author="Joe Mama" />
            <Movie name="Rychle a Zbesile 3" author="Some Random Dude" />
        </div>
    );
}

export default MovieList;
