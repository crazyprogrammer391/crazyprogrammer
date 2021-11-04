import React from 'react'
import './Options.css'

class Footnote extends React.Component {

    render() {
        return (
            <div>
                <div className="options-footnote" style={{marginBottom: '10px'}}>

                    <sup className="footnote-number">
                        {this.props.footnoteNumber}
                    </sup>

                    <div>

                        <p className="footnote-p" style={{margin: '0px', padding: '0px'} }>
                            {this.props.footnoteTitle}
                        </p>

                        <a 
                            href={this.props.link} 
                            referrerPolicy="no-referrer"
                            rel="noreferrer"
                            target="_blank"
                            className="footnote-a">
                                {this.props.link}
                        </a>

                    </div>

                </div>

            </div>
        )
    }
}

export default Footnote
