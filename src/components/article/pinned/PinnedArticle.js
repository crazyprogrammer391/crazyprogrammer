import React from 'react'
import { Link } from 'react-router-dom';
import './Pinned.css'

class PinnedArticle extends React.Component {

    render() {

        const picture = this.props.img;
        const title = this.props.headline;
        const link = this.props.link;

        return (
            <div className="pinned-container">

                <div className="pc-img">

                    <h1 
                    style={
                        { textAlign: 'center', 
                        textDecoration: 'underline', 
                        fontVariant: 'small-caps',
                        fontSize: '40px', 
                        backgroundColor: 'lightgray', 
                        padding: '0px', 
                        margin: '0px',
                        paddingTop: '20px',
                        paddingBlock: '20px' }
                    }>
                        pinned article
                    </h1>

                    <img src={picture} alt="" style={{width: '100%'}} />
                    
                    <h2 style={{padding: '0px', margin: '0px', textAlign: 'center', fontSize: '28px'}}>
                        <Link style={{textDecoration: 'none', color: 'black', fontVariant: 'small-caps', fontSize: '30px'}} to={link}>
                            {title}
                        </Link>
                        
                    </h2>

                </div>
                
                

            </div>
        )
    }
}

export default PinnedArticle
