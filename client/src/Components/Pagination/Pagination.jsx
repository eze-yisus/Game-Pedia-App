import React from "react";

export default function Pagination({ gameXpage, totalGames, pagination }) {

    const numXpage = [];

    for (let i = 1; i < Math.ceil(totalGames / gameXpage); i++) {
        numXpage.push(i + 1);
    }

    return (
        <nav>
            <ul>
                {numXpage &&
                    numXpage.map((num) => (
                        <li key={num}>
                            <button onClick={(e) => pagination(num)}>{num}</button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}