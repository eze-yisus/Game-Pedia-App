import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllGames } from "../../Redux/Actions";
import SearchBar from "../SearchBar/SearchBar";
import CardGame from "../CardGame/CardGame";
import Filters from "../Filters/Filters";
import Pagination from "../Pagination/Pagination";
import './Home.css';


export default function Home() {

    const dispatch = useDispatch();

    const allGames = useSelector((state) => state.videogames);

    // FILTRADO y PAGINADO (componente) ---

    const [posts, setPosts] = useState(allGames);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const filteredGames = useSelector((state) => state.filteredGames);
    const orderBy = useSelector((state) => state.orderedBy);
    const filteredBy = useSelector((state) => state.filteredBy);

    useEffect(() => {
        if (filteredBy === 'ALL' && orderBy === 'ALL') {
            setPosts(allGames);
        } else {
            setPosts(filteredGames);
        }
        setCurrentPage(1);
    }, [allGames, filteredGames, filteredBy, orderBy]);

    // FILTRADO y PAGINADO (componente) ---

    useEffect(() => {
        dispatch(getAllGames())
    }, [dispatch]);

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getAllGames())
    };

    return (
        <div className='back_image'>
            <Link to='/videogame/add'><button className='create'>Add your video game!</button></Link>
            <Link to='/'><button className='toHome'>HOME</button></Link>
            <div className='titulaso'>
                <label>VIDEOGAMES!!!</label>
            </div>
            <br />
            <br />
            <br />
            <br />
            <SearchBar />
            <br />
            <button onClick={(e) => handleClick(e)} >Reset filters</button>
            <Filters />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                setCurrentPage={setCurrentPage}
            />
            <div className='contenedor'>
                {currentPosts && currentPosts?.map((a) => {
                    return (
                        <div key={a.id}>
                            <Link to={`/videogame/${a.id}`}>
                                <CardGame
                                    id={a.id}
                                    image={a.image}
                                    name={a.name}
                                    genres={a.genres}
                                    rating={a.rating}
                                />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}