import   axios  from 'axios';
import React, { Component, useEffect, useState } from 'react';




const Form = () => {
    const [movieData , setMovieData]= useState([]);
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=30cebead6d0c2f485c5f9e726944818c&query=star&language=fr-FR&page=1&include_adult=false')
        .then((res) => setMovieData(res.data.results) )
    }, [])

    return (
        <div className="form-component">
            <div className="form-container">
                <form action="">
                    <input type="text"
                        placeholder='entrez le nom du film'
                        id='search-input' >
                    </input>
                    <input type="submit" value="Recherchez" />
                </form>

                <div className="btn-sort-container">
                    <div className="btn-sort" id="goodToBad">
                        Top <span>?</span>
                    </div>
                    <div className="btn-sort" id="badToGood">
                        Top <span>?</span>
                    </div>
                </div>

                <div className="result">
                    {movieData.map((movie)=>(
                        <h2>{movie.title}</h2>
                    
                   ) )}
                </div>
            </div>
        </div>

    );
};

export default Form;