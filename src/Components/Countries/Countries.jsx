import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'
const Countries = () => {
    const [countries, setCountries] =useState([])
    const [visitedCountries, setVisitedCountries] =useState([]);
    const [visitedFlags, setVisitedFlags] =useState([])

useEffect(()=>{
fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => setCountries(data))
}, [])

const handlevisitedCountry =(country) =>{
    console.log('add this to your visited country')
    console.log(country)
    const newVisitedCountry =[...visitedCountries, country];
    setVisitedCountries(newVisitedCountry);
}

const handleVisitedFlags =flag=>{
    console.log('flag adding');
    const newVisitedFlags =[...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags)

}

    return (
        <div>
            <h3>Countries: {countries.length}</h3>

            <h5>Visited Countries:{visitedCountries.length}</h5>
            {/* visited counties */}
            <div style={{border: '2px solid black'}}>
            <ul>
           {
            visitedCountries.map(country => <li key={country.cca3} style={{listStyle: 'none', fontWeight:'bold'}}>{country.name.common}</li>)
           }
            </ul>
            </div>
            {/* display flags */}
            <div className="flag">
            {
                visitedFlags.map((flag, idx)=><img key={idx} src={flag}></img>)
            }
            </div>
{/* display country */}
            <div className="countries">
            {
                countries.map(country => <Country key={country.cca3} country ={country} handlevisitedCountry ={handlevisitedCountry}
                handleVisitedFlags= {handleVisitedFlags}
                >
                
                </Country>)
            }
            </div>
            
        </div>
    );
};

export default Countries;