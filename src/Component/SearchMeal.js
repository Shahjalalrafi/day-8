import React, { useEffect, useState } from 'react';

const SearchMeal = () => {
    const [search, setSearch] = useState('')
    const [meal, setMeal] = useState([])
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMeal(data.meals))
    }, [search])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div>
            <input type="text" onChange={handleChange} placeholder="search anything" />
            <p>searching: {search}</p>
            <p>meal found: {meal?.length || 0}</p>
            {
                meal?.map(ml =><li>{ml.strMeal}</li>)
            }
        </div>
    );
};

export default SearchMeal;