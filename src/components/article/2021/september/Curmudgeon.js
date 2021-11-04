import React, {useLayoutEffect} from 'react'
import Navbar from '../../../../navbar/Navbar'
import '../../Article.css'
import { ArticleData } from '../../../../search/ArticleData.js';

function Curmudgeon() {

    const curmudegon = ArticleData[8];
    const text = curmudegon.paragraphs;

    useLayoutEffect(() => {
        window.scrollTo(0,0);
    })

    return (
        <div className="article-container" id="home">
            
            <Navbar />

            <div className='ac-content'>

                <img src="https://blog.richmond.edu/writing/files/2018/05/old-man.jpg" alt="" className="acc-img" />

                <div className="acc-headline">
                    What is a Curmudgeon in America Today?
                </div>

                {
                    text.map((item, index) => {
                        if(item.t === 'text'){
                            return(
                                <p className="acc-body-p">
                                    {item.p}
                                </p>
                            )
                        }else if(item.t === 'sub-head'){
                            return(
                                <h2>
                                    {item.p}
                                </h2>
                            )
                        }else if(item.t === 'image'){
                            return(
                                <img className="acc-img" src={item.p} alt="" />
                            )
                        }else if(item.t === 'ad'){
                            return(
                                <h1>
                                    ADVERTISEMENT
                                </h1>
                            )
                        }
                        
                    })
                }

                <a href="#home">Back To Top</a>

            </div>

        </div>
    )
}

export default Curmudgeon
