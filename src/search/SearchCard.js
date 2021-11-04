import React from 'react'

class SearchCard extends React.Component {

    render(){
        return (
            <div 
                style={{
                    padding: '20px',
                    backgroundColor: 'white',
                    border: '1px solid black',
                    marginTop: '20px',
                    display: 'flex',
                    width: '80%',
                    borderRadius: '20px'
            }}>

                <div>

                    <img style={{width: '150px', height: '150px'}} src={this.props.imgUrl} alt="" />
                    
                </div>

                <div style={{display: 'flex', flexDirection: 'column', marginLeft: '50px'}}>

                    <h1 style={{margin: '0px', padding: '0px', letterSpacing: '.25ch'}}>
                        {this.props.headline}
                    </h1>

                    <h3 style={{margin: '0px', padding: '0px', letterSpacing: '.25ch'}}>
                        {this.props.quote}
                    </h3>

                    <p>
                        {this.props.date}
                    </p>

                </div>

                
                
            </div>
        )
    }
    
}

export default SearchCard
