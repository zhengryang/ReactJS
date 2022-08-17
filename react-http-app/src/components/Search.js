import React from 'react';
import jsonDATA from '../MOCK_DATA.json'
import { useState } from 'react';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <div >
            <input type="text" placeholder="search" 
            onChange={event => setSearchTerm(event.target.value)}></input>
            
            {jsonDATA.filter((val)=>{
                if(val == "" )
                    return val
                else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase()))
                    return val
            }).map((val, key) => {
                return <p className='myP' >{val.first_name} </p>

            })}
        </div>
        
    );   
    
};

export default Search;