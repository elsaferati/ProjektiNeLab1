import React from "react";
import "./list.scss";

const List = () => {
    return (
        <div className="list">
            <div className="row">
                <h2 className="text-white title">AlbMovie</h2>
                <div className="col">
                    <div className="row_posters">
                        {Array.from({ length: 10 }).map((_, index) => (
                            <img
                                key={index}
                                className="row_poster row_posterLarge"
                                src="https://www.themoviedb.org/t/p/original/x8koe9M7NUGwBCMM7NJ6kCYmTuG.jpg"
                                alt=""
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;
