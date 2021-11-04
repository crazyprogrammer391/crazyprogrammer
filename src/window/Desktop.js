import React from 'react'
import Navbar from '../navbar/Navbar.js'
import './Desktop.css'
import Snippet from '../snippets/Snippet.js';
import { September2021ArticleData } from '../search/data/September2021.js';
import SocialPost from '../components/article/social/SocialPost.js';
import SimpleAccordion from '../sidebar/Sidebar.js';

function Desktop() {

    const do_nothing = September2021ArticleData[0];
    const _911 = September2021ArticleData[1];
    const mandate = September2021ArticleData[2];
    const no_winning = September2021ArticleData[3];
    const fuck_off = September2021ArticleData[4];
    const stopping_work_mandates = September2021ArticleData[5];

    return (
        <div className="desktop-container">

            <div>
                <Navbar />
            </div>

            <div className="dc-content-container">

                <div className="dccc-main-area">

                    <div className="dccma-sidebar">
                        <SimpleAccordion />
                        {/* <h1>
                            Sidebar
                        </h1> */}
                    </div>

                    <div className="dcccma-left">

                        <div className="dcccma-left1">

                            <SocialPost 
                                content={_911}
                            />

                            <SocialPost 
                                content={no_winning}
                            />

                        </div>

                        <div className="dcccma-left2">

                            <SocialPost 
                                content={do_nothing}
                            />

                            <SocialPost 
                                content={fuck_off}
                            />

                        </div>

                        <div className="dcccma-left3">

                            <SocialPost 
                                content={mandate}
                            />

                            <SocialPost 
                                content={stopping_work_mandates}
                            />

                        </div>

                            
                    </div>

                    <div className="dcccma-right">

                        <Snippet />

                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default Desktop
