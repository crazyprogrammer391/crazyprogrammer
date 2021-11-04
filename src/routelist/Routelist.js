import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../window/Home'
import Options from '../components/article/2021/september/options/Options'
import WhatKindOfPerson from '../components/article/2021/september/WhatKindOfPerson'
import StartAProtest from '../components/article/2021/september/StartAProtest'
import EthicsProfessorFinalLesson from '../components/article/2021/september/EthicsProfessorFinalLesson'
import Search from '../search/Search'
import Curmudgeon from '../components/article/2021/september/Curmudgeon'
import Contact from '../components/contact/Contact'
import { September2021ArticleData } from '../search/data/September2021'
import Article from '../components/article/Article'

function Routelist() {

    const do_nothing = September2021ArticleData[0];
    const _911 = September2021ArticleData[1];
    const mandate = September2021ArticleData[2];
    const no_win = September2021ArticleData[3];
    const fuck_off = September2021ArticleData[4];

    return (
        <div>
            <Router>
                <Switch>

                    {/* /// PRIMARY ROUTES /// */}
                    <Route path='/' exact component={Home} />
                    <Route path='/search' exact component={Search} />
                    <Route path='/contact' exact component={Contact} />


                    {/* //september 2021 articles */}
                    <Route path='/articles/what-kind-of-person-do-you-want-to-be' exact component={WhatKindOfPerson} />
                    <Route path='/articles/how-to-organize-a-protest' exact component={StartAProtest} />
                    <Route path='/articles/ethics-professors-final-lesson' exact component={EthicsProfessorFinalLesson} />
                    <Route path='/articles/being-a-curmudgoen-in-america-today' exact component={Curmudgeon} />

                    

                    <Route path='/articles/americans-do-very-litte-to-get-what-they-want' render={ (props) => <Article article={do_nothing} {...props} /> } />
                    <Route path="/articles/the-meaning-of-9-11" render={ (props) => <Article article={_911} {...props} /> } />
                    <Route path='/articles/the-mandate-is-here' render={ (props) => <Article article={mandate} {...props} />  } />
                    <Route path='/articles/no-you-are-not-going-to-win' render={ (props) => <Article article={no_win} {...props} />  } />
                    <Route path='/articles/tell-your-boss-to-fuck-off' render={ (props) => <Article article={fuck_off} {...props} /> } />

                    <Route path='/articles/what-can-i-do' exact component={Options} />
                    
                    

                </Switch>
            </Router>
        </div>
    )
}

export default Routelist
