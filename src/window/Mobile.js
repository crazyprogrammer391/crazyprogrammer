import React from 'react'
import Navbar from '../navbar/Navbar'
import BlockArticle from '../components/block/BlockArticle.js';
import './Mobile.css'
import Snippet from '../snippets/Snippet';

function Mobile() {
    return (

        <div className="mobile-container">

            <div>
                <Navbar />
            </div>

            <div className="mc-content-container">

                <BlockArticle 
                    headline="The Meaning of 9/11"
                    URL="https://e3.365dm.com/21/09/768x432/skynews-rubble-world-trade-center_5506516.jpg?20210909180500"
                    quote="We have not acted rationally. We have neither lived freely nor loved deeply in the last two decades."
                    path="/articles/the-meaning-of-9-11"
                    date="10 September 2021"
                />

                <BlockArticle 
                    headline="No America, You Are Not Going to Win"
                    URL="https://live.staticflickr.com/1478/25263062234_16117e97bd_b.jpg"
                    quote="It doesn't really matter how much you want something. If you aren't willing to do something, to get it, you won't."
                    path="/articles/no-you-are-not-going-to-win"
                    date="8 September 2021"
                />

                <BlockArticle 
                    headline="Tell Your Vaccine Mandating Boss to Fuck Off"
                    URL="https://live.staticflickr.com/3563/3341814241_9f9d775bc1.jpg"
                    quote="New information about the 'approval' of the vaccine gives you a fighting chance to push back"
                    path='/articles/tell-your-boss-to-fuck-off'
                />

                <BlockArticle 
                    headline="How To Stop the Mandate at Work" 
                    URL="https://www.universal-rights.org/wp-content/uploads/2021/07/implementation.jpg"
                    quote="Extreme circumstances call for extreme measures. Here's a few ideas on how you can stop vaccine mandates at your job"
                    path="/articles/what-can-i-do"
                />

                <BlockArticle 
                    headline="Guide to Throwing a Protest" 
                    URL="https://www.thelocal.fr/wp-content/uploads/2019/03/7ee1bbd316a5e1bf120156189a2dfd4cc7b610c61e76e8e38d59e1d42aacbf32.jpg"
                    quote="Without burning down the country..."
                    path="/articles/how-to-organize-a-protest"
                />

                <BlockArticle 
                    headline="Ethics Professor's Final Lesson" 
                    URL="https://images.thestar.com/kJhYH2s066NtrQ4JAL9isKOR3t4=/1124x676/smart/filters:cb(1631202208894)/https://www.thestar.com/content/dam/thestar/news/gta/2021/09/08/western-university-professor-refuses-to-abide-by-schools-vaccine-mandate-in-the-name-of-ethics/julia_ponesse.jpg"
                    quote="SPOILER ALERT: She cries at the end"
                    path='/articles/ethics-professors-final-lesson'
                />

                <Snippet />

            </div>
            
        </div>
    )
}

export default Mobile
