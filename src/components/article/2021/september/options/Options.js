import React, { useLayoutEffect } from 'react'
import Navbar from '../../../../../navbar/Navbar'
import Contents from './Contents'
import FinalThoughts from './FinalThoughts'
import JustSayNo from './JustSayNo'
import MandatoryTesting from './MandatoryTesting'
import MedicalExemptions from './MedicalExemptions'
import './Options.css'
import ReligiousExemption from './ReligiousExemption'
import Remotely from './Remotely'
import Sources from './Sources'
import Striking from './Striking'

function Options() {

    useLayoutEffect(() => {
        window.scrollTo(0,0);
    })

    return (
        <div className="options-container">
            
            {/* <Navbar /> */}

            <Navbar />

            <div className="oc-main-content">

                <div className="ocmc-title">
                    <h1 className="ocmc-h1">
                        What Can I Do?
                    </h1>
                </div>

                <div className="ocmc-text-area" id="back-to-top">
                    <div className="options-text-block">
                    <p>
                        So, you are being asked or required to attest to your vaccination status, provide repeated proof of negative 
                        covid-19 tests, or undergo vaccination. What do you do? Understanding your options is critical to avoiding being subjected to medical 
                        treatments you do not want. 
                    </p>

                    <p>
                        What we will outline below includes information that may help you. Depending on your exact circumstances and 
                        your relationship with your employer, different approaches may work while others may not be effective. If you choose 
                        to take any action to avoid mandatory vaccination or costly mandatory testing, consider all of your options carefully. 
                    </p>

                    <p className="disclaimer">
                        <span style={{fontWeight: 'bold'}}>Disclaimer: </span>This information is provided for your consideration and should not be considered legal advice. 
                        Ultimately, whatever you choose to do in the face of vaccine mandates, you must decide to do what is best for you. That may include
                        all, some of, or none of this advice, or something else entirely. This information is provided to help you start thinking about what 
                        your options are and what your strategies should be for dealing with mandates. It is for informational and educational purposes only. Always
                        do what you think is best for yourself and those you care about.
                    </p>
                    </div>
                    

                    <Contents />

                    <div className="options-text-block" id="just-say-no">

                        <JustSayNo />

                    </div>

                    <div className="options-text-block" id="religious-medical">

                        <ReligiousExemption />

                    </div>

                    <div className="options-text-block" id="medical">
                        <MedicalExemptions />
                    </div>

                    <div className="options-text-block" id="remotely">
                        <Remotely />
                    </div>

                    <div className="options-text-block" id="testing">
                        <MandatoryTesting />
                    </div>

                    <div className="options-text-block" id="strike">
                        <Striking />
                    </div>

                    <div className="options-text-block" id="conclusion">
                        <FinalThoughts />
                    </div>

                    <Sources />
                    
                </div>

            </div>

        </div>
    )
}

export default Options
