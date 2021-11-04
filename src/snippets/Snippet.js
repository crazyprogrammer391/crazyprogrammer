import React, { useEffect, useState } from 'react'
import './Snippet.css'
import SnippetList from './SnippetList'

function Snippet() {
    const [snippets, setSnippets] = useState([]);

    useEffect(() => {
        setSnippets(SnippetList);
    }, [])

    return (
        <div className="link-snippet-container">
            
            <h4 className="snippet-title">
                snippets
            </h4>

            <div className="snippet-container">
                
                {
                    snippets.map(snippet => {
                        return(
                            <p className="snippet-p">
                                <a className="snippet-anchor" href={snippet.url} target="_blank" rel="noreferrer">{snippet.linkTitle}</a>
                            </p>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Snippet
