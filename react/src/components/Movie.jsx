import React, { useState } from 'react';

function Star({ selected, onSelect }) {
    return (
        <span
            style={{ color: selected ? "orange" : "gray" }}
            onClick={onSelect}
        >
      ★
    </span>
    );
}

function StarRating({ totalStars, initialRating, onRate }) {
    const [rating, setRating] = useState(initialRating);

    return (
        <div>
            {[...Array(totalStars)].map((n, i) => (
                <Star
                    style={{ cursor: "pointer" }}
                    key={i}
                    selected={i < rating}
                    onSelect={() => {
                        setRating(i + 1);
                        onRate(i + 1);
                    }}
                />
            ))}
        </div>
    );
}

function Movie(props) {
    const [rating, setRating] = useState(0);

    const handleRate = (newRating) => {
        setRating(newRating);
    };

    return (
        <div className="movie-card">
            <h2>{props.name}</h2>
            <p>Author: {props.author}</p>
            <div>
                <StarRating
                    totalStars={5}
                    style={{ cursor: "pointer" }}
                    initialRating={rating}
                    onRate={handleRate}
                />
            </div>
        </div>
    );
}

export default Movie;
