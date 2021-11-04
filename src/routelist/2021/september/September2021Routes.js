import React from 'react'
import { BrowserRouter as Route, Switch } from 'react-router-dom'
import Article from '../../../components/article/Article'
import { September2021ArticleData } from '../../../search/data/September2021'

function September2021Routes() {

    const do_nothing = September2021ArticleData[0];
    const _911 = September2021ArticleData[1];

    return (
        <div>
            <Switch>
                <Route path='/articles/americans-do-very-litte-to-get-what-they-want' render={ (props) => <Article article={do_nothing} {...props} /> } />
                <Route path="/articles/the-meaning-of-9-11" render={ (props) => <Article article={_911} {...props} /> } />
            </Switch>
        </div>
    )
}

export default September2021Routes
