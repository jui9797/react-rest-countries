import { useState } from 'react';
import './Country.css'

const Country = ({country, handlevisitedCountry, handleVisitedFlags}) => {
    // console.log(country)
    const {name, flags, population, capital, area, cca3} =country;

   const [visited, setVisited] =useState(false);
   const [text, setText] =useState(false);

   const handleVisited =()=>{
    setVisited(!visited);
    setText(!text)
   }

    return (
        <div className={`country ${visited? 'visited' : 'non-visited'}`}>
           <h3 style={{color:visited? 'purple' :'black'}}>Name: {name?.common}</h3> 
           <img className='img' src={flags.png} alt="" />
           <p>Capital: {capital}</p>
           <p>Popular:{population}</p>
           <p>Area:{area}</p>
           <p><small>Code:{cca3}</small></p>
           <button onClick={()=>handlevisitedCountry(country)}>Mark as visited</button>
           <br />
           <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add flag</button>
           <button className='button' onClick={handleVisited} >{visited? 'visited' : 'going'}</button>
            {text ? 'I have visited' : ''}
        </div>
    );
};

export default Country;