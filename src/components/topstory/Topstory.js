import React from 'react'
import '../../window/Desktop.css'
import { Link } from 'react-router-dom'


class Topstory extends React.Component {

    render() {

        return (
            <div className="dcccma-top-story-container" style={{marginLeft: '20px'}}>
    
                <div className="dcccma-tsc-top">
    
                    <img src={this.props.URL} alt="" className="dcccma-tsc-img" />
                    
                    <h2 className="dcccma-tsc-quote">
                        {this.props.quote}
                    </h2>
    
                </div>
    
                <div className="dcccma-tsc-bottom">
    
                    <h1 className="dcccma-tsc-headline">
                        <Link style={{textDecoration: 'none', color: 'black', textAlign: 'center'}} to={this.props.path}>
                            {this.props.headline}
                        </Link>
                    </h1>
    
                    <p style={{padding: '0px', margin: '0px'}}>
                        {this.props.date}
                    </p>
    
                </div>
                
            </div>
        )
    }
    
}

export default Topstory
