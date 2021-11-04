import React from 'react'
import { Link } from 'react-router-dom'
import './BlockArticle.css'



class BlockArticle extends React.Component {

    render() {

        var story = this.props.index;
        console.log(story);
        var whole = this.props.object;
        console.log(whole);

        return (
            <div className="block-article-container">

                <img src={this.props.URL} alt="" className="bac-img" />

                <h1 className="bac-h2">
                    <Link style={{textDecoration: 'none', color: 'black'}} to={this.props.path}>
                        {this.props.headline}
                    </Link>
                </h1>

                <h3 className="bac-p">
                    {this.props.quote}
                </h3>

                <h4 style={{padding: 0, margin: 0}}>
                    {this.props.date}
                </h4>

            </div>
        )
    }
    
}

export default BlockArticle
