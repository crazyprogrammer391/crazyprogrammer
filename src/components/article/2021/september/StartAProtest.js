import React, {useLayoutEffect} from 'react'
import Navbar from '../../../../navbar/Navbar'
import InArticleLink from '../../../InArticleLink';
import '../../Article.css'

function StartAProtest() {
    useLayoutEffect(() => {
        window.scrollTo(0,0);
    })

    return (
        <div className="article-container">
            
            <Navbar />

            <div className='ac-content'>

                <img src="https://www.thelocal.fr/wp-content/uploads/2019/03/7ee1bbd316a5e1bf120156189a2dfd4cc7b610c61e76e8e38d59e1d42aacbf32.jpg" alt="" className="acc-img" />

                <div className="acc-headline">
                    How to Organize a Protest
                </div>

                <p className="acc-body-p">
                    Are you pissed off? Are you angry? Can you not take one more minute of this? That should be you. 
                </p>

                <p className="acc-body-p">
                    How in the name of hell can they cancel ‘The Good Place’ after only four seasons? I get it. There’s only so many episodes you could do or a story like 
                    that. Unlike life, TV doesn’t need to make you wait 70 years to find out if you get into Heaven. I already know I won’t, but that’s a whole different story. 
                </p>

                <p className="acc-body-p">
                    So, what are we talking about? Ah, yes. How asinine our society has become and what you can do about it. If you are steamed about everything from vaccine 
                    mandates, masks and testing to central bank digital currencies, inflation and the general deterioration of our society, there is still some time to do 
                    something about it if you wish. I can’t speak to how much good it will do. I write about that elsewhere.  But if you are the type that wants to DO something 
                    and have considered organizing a protest, we have compiled some information for you about how to do that.
                </p>

                <p className="acc-body-p">
                    
                    <li style={{marginLeft: '50px'}}>
                        <InArticleLink 
                            targetURL="https://www.huffpost.com/entry/the-art-of-protesting-how-to-organize-a-protest-that_b_588b2de1e4b0020b224b43a0"
                            linkText="The Art Of Protesting: How To Organize A Protest That Brings Results"
                        />
                    </li>

                    <li style={{marginLeft: '50px'}}>
                        <InArticleLink 
                            targetURL="https://streetcivics.com/an-organizers-guide-to-protests-and-political-change/"
                            linkText="An Organizer’s Guide to Protests and Political Change"
                        />
                    </li>

                    <li style={{marginLeft: '50px'}}>
                        <InArticleLink 
                            targetURL="https://www.aclu.org/know-your-rights/protesters-rights/#im-organizing-a-protest"
                            linkText="Know your rights Back to Know Your Rights Protesters’ Rights "
                        />
                    </li>

                </p>

                <p className="acc-body-p">
                    And if you need some motivation, here's a list of some who have already begun protesting and striking due to vaccine mandates:
                </p>

                <p className="acc-body-p">
                    
                    <li style={{marginLeft: '50px'}}>
                        <InArticleLink 
                            targetURL="https://www.nbcnews.com/tech/social-media/vaccine-mandates-spread-protests-follow-spurred-nurses-rcna1654"
                            linkText="As vaccine mandates spread, protests follow — some spurred by nurses"
                        />
                    </li>

                    <li style={{marginLeft: '50px'}}>
                        <InArticleLink 
                            targetURL="https://www.euronews.com/2021/08/11/resist-resign-and-play-for-time-french-health-workers-bid-to-avoid-compulsory-covid-vaccin"
                            linkText="Resist, resign and playing for time: French health workers bid to avoid compulsory COVID vaccination"
                        />
                    </li>

                    <li style={{marginLeft: '50px'}}>
                        <InArticleLink 
                            targetURL="https://patch.com/new-york/riverhead/protesters-decry-healthcare-worker-vaccine-mandate"
                            linkText="Protesters Decry Healthcare Worker Vaccine Mandate: 'My Choice'"
                        />
                    </li>

                    <li style={{marginLeft: '50px'}}>
                        <InArticleLink 
                            targetURL="https://www.ekathimerini.com/news/1167004/hospital-workers-union-steps-up-action/"
                            linkText="Hospital workers’ union steps up action"
                        />
                    </li>

                    <li style={{marginLeft: '50px'}}>
                        <InArticleLink 
                            targetURL="https://www.rochesterfirst.com/coronavirus/seven-finger-lake-counties-send-letter-to-governor-asking-she-revise-vaccine-mandate-for-healthcare-workers/"
                            linkText="Finger Lakes counties ask Gov. Hochul to revise vaccine mandate for health care workers"
                        />
                    </li>

                    <li style={{marginLeft: '50px'}}>
                        <InArticleLink 
                            targetURL="https://www.wlwt.com/article/greater-cincinnati-health-care-workers-join-national-protest-against-mandated-covid-19-vaccine/37286707#"
                            linkText="Greater Cincinnati health care workers join national protest against mandated COVID-19 vaccine"
                        />
                    </li>

                    <li style={{marginLeft: '50px'}}>
                        <InArticleLink 
                            targetURL="https://www.journal-advocate.com/2021/08/11/sterling-banner-employees-stage-walkout-over-vaccination-mandate/"
                            linkText="Sterling Banner employees stage walkout over vaccination mandate"
                        />
                    </li>

                </p>

                <p className="acc-body-p">
                    I’m not here to tell anyone what to do. Your life is your own. Insofar as you are a fellow human being and have a right to experience this existence as 
                    freely as possible, I care. On a more practical level, however, I really don’t care what you do with your life. It belongs to you. 
                </p>

                <p className="acc-body-p">
                    We offer this information to those who want to do something but don’t know what to do or how to do it. Hopefully it is helpful. If it’s not for you, that’s fine too.
                </p>

                <p className="acc-body-p">
                    Just try not to be that person. You know the one. The person who bitches and moans about things but does nothing to change things. 
                    If you’re pissed off at your company or your government but all you do is suck it up or post memes about it on Facebook – I truly wish you the best of luck. 
                </p>

                <p className="acc-body-p">
                    I will be appreciating what time we have left. Or at least trying to.
                </p>

            </div>

        </div>
    )
}

export default StartAProtest
