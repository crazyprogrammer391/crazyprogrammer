import React from 'react'
import Footnote from '../../footnote/Footnote';
import './ReferenceBlock.css'
class ReferenceBlock extends React.Component {

    render(){

        const reference_array = this.props.array;
        console.log(reference_array);

        return (
            <div style={{
                backgroundColor: 'lightgray',
                padding: '20px',
                border: '1px solid black'
            }}>
                <h3 style={{fontVariant: 'small-caps', textDecoration: 'underline'}}>
                    References:
                </h3>
                {
                    reference_array.map((item, index) => {
                        return(
                            <Footnote 
                                footnoteNumber={index + 1}
                                footnoteTitle={item.title}
                                link={item.url}
                            />
                        )
                    })
                }
            </div>
        )
    }

}

export default ReferenceBlock
