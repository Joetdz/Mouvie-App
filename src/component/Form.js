import React, { Component } from 'react';

const Form = () => {
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

                <div className="resultat">
                </div>
            </div>
        </div>

    );
};

export default Form;