import React, { useEffect, useState } from 'react'

const Search = () => {
    const [search, setSearch] = useState();
    
    return (
        <div>
            <input type="text"
                className="form-control"
                placeholder="...search"
                onChange={(event) => {
                   setSearch(event.target.value) 
                }}/>
        </div>
    )
}

export default Search
