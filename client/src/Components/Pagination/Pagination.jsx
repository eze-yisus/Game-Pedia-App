import React from "react";
import './Pagination.css';

export default function Pagination({ postsPerPage, totalPosts, setCurrentPage }) {

    const p = [];

    let calculo = Math.ceil(totalPosts / postsPerPage);

    for (let i = 1; i <= calculo; i++) {
        p.push(i);
    };

    const paginate = (num) => {
        setCurrentPage(num);
    };

    return (
        <nav className='naval'>
            <div>
                {p.map((num) => (
                    <button className='navalBut' key={num} onClick={() => paginate(num)}>{num}</button>
                ))}
            </div>
        </nav>
    );
}