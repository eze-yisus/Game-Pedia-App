import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, orderFilter, filterGenres } from "../../Redux/Actions/index.js";
import './Filters.css';

export default function Filters() {

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

    return (
        <div className='divGlobal'>
            <div className='orderBy'>
                <select defaultValue={'DEFAULT'} name='Orders' onChange={handleChange}>
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
            <div className='filterBy'>
                <select defaultValue={'DEFAULT'} name='Filters' onChange={handleGenres}>
                    <option value='DEFAULT' disabled>Filter by . . .</option>
                    <option value='ALL'>All</option>
                    {genres?.map((g) => (
                        <option key={g.id} value={g.name}>{g.name}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}