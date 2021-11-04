import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import './Search.css'
import { ArticleData } from './ArticleData.js'
import SearchCard from './SearchCard'
import { Link } from 'react-router-dom'

function Search() {

        const [search, setSearch] = useState(ArticleData);
        const handleInputChange = (e) => {
            var dm = e.target.value;
            var str = dm.toString();
            var debug = ArticleData.filter(x => x["headline"].toLowerCase().includes(str));
            setSearch(debug);
        }

        return (
            <div className="search-container">
                
                <div>
                    <Navbar />
                </div>
    
                <div className="sc-card-container">
    
                    <input placeholder="Search..." className="sccc-input" onChange={handleInputChange} />
                    <div>
                        {
                            search.map((item, index) => {
                                return(
                                    <Link style={{color: 'black', textDecoration: 'none'}} to={item.path}>
                                        <SearchCard 
                                            key={index}
                                            headline={item.headline}
                                            date={item.date}
                                            imgUrl={item.url}
                                            quote={item.quote}
                                        />
                                    </Link>
                                )
                            })
                        }
                    </div>
    
                </div>
                
            </div>
        
        )

}

// function Search() {
    // return (
    //     <div className="search-container">
            
    //         <div>
    //             <Navbar />
    //         </div>

    //         <div className="sc-card-container">

    //             <input placeholder="Search..." className="sccc-input" onChange={captureText} />

    //             {/* {
    //                 ArticleData.map((item, index) => {
    //                     return(
    //                         <SearchCard 
                                // key={index}
                                // headline={item.headline}
                                // date={item.date}
                                // imgUrl={item.url}
                                // quote={item.quote}
    //                         />
    //                     )
    //                 })
    //             } */}

    //         </div>
            
    //     </div>
    // )
// }

export default Search
