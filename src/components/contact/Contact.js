import React from 'react'
import Navbar from '../../navbar/Navbar'

function Contact() {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>

            <div>
                <Navbar />
            </div>

            <div style={{marginTop: '64px'}}>
                
                <div style={{marginTop: '100px', paddingLeft: '20%', paddingRight: '20%'}}>
                    Contact us here: catv@protonmail.com
                </div>

            </div>
        </div>
    )
}

export default Contact
