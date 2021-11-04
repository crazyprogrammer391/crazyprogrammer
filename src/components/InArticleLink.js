import React from 'react'

class InArticleLink extends React.Component {
    render(){
        return (
            <a href={this.props.targetURL} target="_blank" rel="noreferrer" style={{marginLeft: '2px'}}>
                {this.props.linkText}
            </a>
        )
    }
    
}

export default InArticleLink
