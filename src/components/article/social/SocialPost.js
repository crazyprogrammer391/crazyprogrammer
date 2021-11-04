import React from 'react'
import { Link } from 'react-router-dom';
import './SocialPost.css'

class SocialPost extends React.Component {
    render(){

        const object = this.props.content;

        return (
            <div className="social-post-container">

                <img className="spc-img" src={object.url} alt="" />

                <Link to={object.path} style={{textDecoration: 'none'}}>
                    <h2 style={{textAlign: 'start', padding: '0px', margin: '0px', color: 'black', paddingTop: '5px', textDecoration: 'none'}}>
                        {object.headline}
                    </h2>
                </Link>

                {/* <h2 className="spc-h2">
                    {object.headline}
                </h2> */}

                <h4 className="spc-h5">
                    {object.quote}
                </h4>

                {/* <div className="spc-first-paragraph">

                </div> */}

                {/* <p className="spc-p">
                    {object.paragraphs[0].p.substring(0, 200)}...
                </p> */}
                
                {/* <Link to={object.path}>
                    <p style={{textAlign: 'end', fontSize: '18px', padding: '0px', margin: '0px', marginRight: '20px', color: 'blue', paddingTop: '5px'}}>
                        Read More
                    </p>
                </Link> */}

            </div>
        )
    }
    
}

export default SocialPost
