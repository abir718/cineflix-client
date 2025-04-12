import React, { useEffect, useState } from 'react'

function PopularPeople() {
    const [people, setPeople] = useState([]);
    const API_KEY = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/person/popular?language=en-US&page=1&api_key=${API_KEY}`)
            .then((res) => res.json())
            .then((data) => setPeople(data.results));
    }, [API_KEY]);

    return (
        <div>
            <div className="mx-auto w-[95%] flex gap-3 items-center py-6">
                <div className="w-[10px] h-[40px] bg-[#DD003F]"></div>
                <p className="text-3xl font-bold text-white">Popular People</p>
            </div>
            <div className='grid grid-cols-8 mx-auto w-[90%] gap-4'>
                {people.slice(0, 8).map((person) => (
                    <div key={person.id}>
                        <img className='w-40 h-40 object-cover rounded-full' src={`https://image.tmdb.org/t/p/h632${person.profile_path}`} alt={person.name} />                        
                        <h1 className='text-white text-lg w-40 mt-2 text-center'>{person.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PopularPeople
