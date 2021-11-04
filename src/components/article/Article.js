import React from 'react'
import Navbar from '../../navbar/Navbar';
import './Article.css'
import ReferenceBlock from './references/ReferenceBlock';

class Article extends React.Component {

    componentDidMount(){
        window.scrollTo(0, 0);
    }

    render() {

        var story = this.props.article;
        console.log(story);
        const paragraphs = story.paragraphs;
        const references = story.references;

        return (
            <div className="article-container" id="home">

                <Navbar />

                <div className="ac-content">

                    <img src={story.url} alt="" className="acc-img" />

                    <div>
                        <h1 className="acc-headline">
                            {story.headline}
                        </h1>
                    </div>
                    

                    {
                        paragraphs.map((item, index) => {
                            if(item.t === 'h1'){
                                return(
                                    <h1 key={index}>
                                        {item.p}
                                    </h1>
                                )
                            }else if(item.t === 'text'){
                                return(
                                    <p key={index} className="acc-body-p">
                                        {item.p}
                                    </p>
                                )
                            }else if(item.t === 'sub-head'){
                                return(
                                    <h1 className="acc-subhead">
                                        {item.p}
                                    </h1>
                                )
                            }else if(item.t === 'blockquote'){
                                return(
                                    <p key={index} className="acc-body-blockquote">
                                        {item.p}
                                    </p>
                                )
                            }
                            return "";
                        }) 
                    }

                    {
                        references && references.length && (
                            <ReferenceBlock 
                                array={references}
                            />
                        )
                    }
                    
                    
                    <a href="#home">Back To Top</a>

                </div>

                {/* <div className="ac-content-container">
                    
                </div>

                
                 */}
            </div>
        )
    }
    
}

export default Article
