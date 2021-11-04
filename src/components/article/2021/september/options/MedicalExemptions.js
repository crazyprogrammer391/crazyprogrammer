import React from 'react'
import Ingredients from './Ingredients'
import './Options.css'

function MedicalExemptions() {
    return (
        <div>

            <h2 style={{textAlign: 'center', backgroundColor: 'lightblue', padding: '10px', fontVariant: 'small-caps'}}>
                Medical Exemptions
            </h2>

            <p>
                In the previous section we discussed the religious exemptions to getting the covid-19 vaccine. Those exemptions are strict in the sense that it 
                MUST be requested due solely to religious objections to the vaccine. It absolutely cannot have anything to do with your personal beliefs or on 
                medical grounds. However, U.S. law does allow for exemptions based on medical grounds. Like the religious exemptions, they stem from the Americans 
                with Disabilities Act and Title VII of the Civil Rights Act.
            </p>

            <p>
                Pursuing this strategy may be more difficult that obtaining a religious exemption. The consensus among companies and public health organizations 
                is that exemptions should be granted only for specific reasons. Currently there is only one widely accepted medical concern by the federal government 
                and by corporations: anaphylaxis. This results from a severe allergic reaction to the ingredients. Anaphylaxis is basically the same response that 
                happens when some people are stung by bees or is exposed to peanuts when they are allergic. The reaction can be severe and on some occasions, deadly. 
            </p>

            <p>
                If you have a history of allergic reactions like this, you may be able to obtain a medical exemption. If you know that you have allergies 
                to any of the ingredients to the vaccines, you may qualify for an exemption.
            </p>

            <p>
                Here is a list of the ingredients that have been disclosed:
            </p>

            <Ingredients />

            <p>
                If you have any known allergies to any of these ingredients, you may be able to obtain a medical exemption. You will likely need to document 
                any medical conditions to support your request for a medical exemption. 
            </p>

            <p>
                There are other medical avenues you may pursue in order to obtain an exemption. The CDC maintains a database called VAERS – the Vaccine Adverse Events 
                Reporting System – that documents all negative side effects of the vaccines. Some of the side effects have included Guillain-Barré syndrome and myocarditis. 
                Guillain-Barré syndrome is a neurological disorder similar to polio and has been known to be triggered as a result of receiving the covid-19 vaccines. 
                Myocarditis is caused by a viral infection and weakens the heart to the point of sometimes causing heart failure or other serious medical issues. 
            </p>

            <p>
                You may be able to obtain medical exemptions along these lines especially if you have a history of heart problems or a family history of polio 
                or other neurological disorders. Again, you would likely have to document these claims. This is less of a guarantee that documenting a likely 
                allergic reaction, but your employer may consider these as a factor for granting exemptions.
            </p>

            <p style={{fontWeight: 'bold'}}>
                To recap, medical exemptions are possibly more difficult to pursue over religious exemptions. Currently, it may be considered the only 
                acceptable exemption to be allowed is an employee with a specific severe allergy to the ingredients of the covid vaccines themselves. It’s possible 
                that even past anaphylactic episodes may not be sufficient to warrant an exemption. It is possible to argue there are other medical concerns related 
                to the vaccine, especially if you have a history of medical problems similar to the negative side effects reported to VAERS as a result of the 
                vaccine. You will have to document any medical objections you have and your employer may still not accept them. 
            </p>

            <a href="#back-to-top">Back to Top</a>

        </div>
    )
}

export default MedicalExemptions
