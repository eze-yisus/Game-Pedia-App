import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, orderFilter, filterGenres, filterPlatform } from "../../Redux/Actions/index.js";
import './Filters.css';

export default function Filters() {

    const platformsFiltered = [
        { name: "PC" },
        { name: "PlayStation 1" },
        { name: "PlayStation 2" },
        { name: "PlayStation 3" },
        { name: "PlayStation 4" },
        { name: "PlayStation 5" },
        { name: "XBox 360" },
        { name: "XBox One" },
        { name: "XBox Series X" },
        { name: "Nintendo" },
        { name: "Wii" },
        { name: "Web" },
        { name: "Sega" },
    ];


    const dispatch = useDispatch();

    const genres = useSelector((state) => state.genres);

    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch]);

    function handleChange(e) {
        e.preventDefault();
        dispatch(orderFilter(e.target.value));
    }

    function handleGenres(e) {
        e.preventDefault();
        dispatch(filterGenres(e.target.value));
    }

    function handlePlat (e) {
        e.preventDefault();
        dispatch(filterPlatform(e.target.value));
    }

    return (
        <div className='divGlobal'>
            <div className='orderBy'>
                <select className='selecOrder' defaultValue={'DEFAULT'} name='Orders' onChange={handleChange}>
                    <option value='DEFAULT' disabled>Order by . . .</option>
                    <option value='ALL'>All</option>
                    <option value='A-Z'>A - Z</option>
                    <option value='Z-A'>Z - A</option>
                    <option value='ASC'>Higher rating</option>
                    <option value='DES'>Lower rating</option>
                    <option value='API'>Games from API</option>
                    <option value='DB'>Games from DB</option>
                </select>
            </div>
            <div className='filterByPlat'>
                <select className='selecPlat' defaultValue={'DEFAULT'} name='Filters Plat' onChange={handlePlat}>
                    <option value='DEFAULT' disabled>Filter by Platforms. . .</option>
                    <option value='ALL'>All</option>
                    {platformsFiltered?.map((g, i) => (
                        <option key={i} value={g.name}>{g.name}</option>
                    ))}
                </select>
            </div>
            <div className='filterBy'>
                <select className='selecFil' defaultValue={'DEFAULT'} name='Filters' onChange={handleGenres}>
                    <option value='DEFAULT' disabled>Filter by Genres . . .</option>
                    <option value='ALL'>All</option>
                    {genres?.map((g) => (
                        <option key={g.id} value={g.name}>{g.name}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}