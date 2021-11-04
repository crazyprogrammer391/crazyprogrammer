import React, {useLayoutEffect} from 'react'
import Navbar from '../../../../navbar/Navbar'
import '../../Article.css'

function EthicsProfessorFinalLesson() {

    const url = "https://images.thestar.com/kJhYH2s066NtrQ4JAL9isKOR3t4=/1124x676/smart/filters:cb(1631202208894)/https://www.thestar.com/content/dam/thestar/news/gta/2021/09/08/western-university-professor-refuses-to-abide-by-schools-vaccine-mandate-in-the-name-of-ethics/julia_ponesse.jpg"

    useLayoutEffect(() => {
        window.scrollTo(0,0);
    })

    return (
        <div className="article-container">
            
            <Navbar />

            <div className='ac-content'>

                <img src={url} alt="" className="acc-img" />

                <div className="acc-headline" id="home">
                    Ethics Professor Julie Ponsee Delivers Tearful Final Lesson
                </div>

                <p className="acc-body-p">
                    Canadian ethics professor Julie Ponsee was recently dismissed from her position of twenty years at the University of Western Ontario for refusing 
                    to comply with the university’s vaccine mandate. 
                </p>

                <p className="acc-body-p">
                    Dismissed is a euphemism for fired. You may be tempted to try and unravel the irony of firing an ethics professor for rejecting an unwanted and 
                    experimental medical treatment that has been mandated on her. Don’t. You’ll be up all night. If you’re a guy, you’ll think so hard all the blood 
                    will evacuate from your penis and there will be nothing left of it. If you’re a woman, your neurons will be generating so much friction, your 
                    boobs may catch on fire. You don’t want to deal with that. 
                </p>

                <p className="acc-body-p">
                    But this is the world we live in now. There is a wave of resentful acceptance of this reality sweeping across the planet. We get outraged by 
                    the day but little seems to change. She is not the first decent soul to be rolled over nor will she be the last. What follows is a transcript 
                    of a video she made explaining what happened to her. At the end she is tearful. I can only speculate as to why. For myself, I imagine it is a 
                    combination of the stress of losing a job she probably loves and the hurt of seeing the world turned upside down like this. But who knows?
                </p>

                <p className="acc-body-p">
                You can find the complete video here if you wish to watch: <a style={{marginLeft: '2px'}} href="https://banned.video/watch?id=61390c5492973d1364372cdb">Julie Ponsee Banned.Video</a>
                </p>

                <p style={{height: '2px', backgroundColor: 'black', marginTop: '20px', marginBottom: '20px'}}>

                </p>

                <p className="acc-body-blockquote">
                <p className="acc-body-p">
                    This message is about mandatory vaccinations. I am a professor of ethics at Huron College at the University of Western Ontario. It’s one of the largest 
                    universities in Canada.  Today I’m going to teach you a short lesson on the universally accepted ethics of coercing people into medical procedures. 
                    I’ll be the example.
                </p>

                <p className="acc-body-p">
                    My employer has just mandated that I must get a vaccine for covid-19. If I want to keep working at my job as a professor, I have to take this vaccine. 
                    Here’s my conundrum. My school employs me to be an authority on the subject of ethics. I hold a Ph.D. in ethics and ancient philosophy. 
                </p>

                <p className="acc-body-p">
                    And I am here to tell you it’s ethically wrong to coerce someone to take a vaccine. If it happens to you, you don’t have to do it. If you don’t want a 
                    covid vaccine, don’t take one, end of discussion. It’s your own business. 
                </p>

                <p className="acc-body-p">
                    But that is not the approach of the University of Western Ontario, which has suddenly required that I be vaccinated immediately or not report for work. 
                    So, with the school year beginning, in a few days, I am facing imminent dismissal after twenty years on the job because I will not submit to having an 
                    experimental vaccine injected into my body. 
                </p>

                <p className="acc-body-p">
                    I’ve had plenty of vaccines in my life, but I’ve never been forced to take one. It’s always been my choice. I don’t work in a high-risk 
                    environment. I’m not a doctor in an emergency room. I’m a teacher. I’m a university professor. My job is to teach students how to think 
                    critically, to ask questions that might expose a false argument. Questions like ‘says who?’ or ‘Who is the authority giving this order?’ 
                    ‘Should I trust them with control over my body. 
                </p>

                <p className="acc-body-p">
                    As a professor, I don’t have to watch the news to find out the covid vaccines are safe. I read medical journals and I consult my colleagues 
                    who are professors of science and medicine. I’ve learned from doctors that there are serious questions about how safe these vaccines really are. 
                    There are questions about how well they work. Nobody’s promising that I won’t get covid or transmit covid if I get the vaccine. 
                </p>

                <p className="acc-body-p">
                    But ultimately, none of that matters to me because I am a professor of ethics and I’m a Canadian. I’m entitled to make choices about what 
                    does and does not enter my body regardless of my reasons. 
                </p>

                <p className="acc-body-p">
                    If I’m allowed back into my university, it’s my job to teach my students that this is wrong. I’m hired to teach them that it is ethically 
                    wrong to impose and experimental medical procedure as a condition of employment. 
                </p>

                <p className="acc-body-p">
                    This is my first, and potentially my last lesson of the year. Ethics 101. In the spirit of Socrates, who was executed for asking questions, 
                    this lesson will consist of only one question. The answer is multiple choice. Please listen carefully. 
                </p>

                <p className="acc-body-p">
                    When a person has done the same job to the satisfaction of her employer for twenty years, is it right, or is it wrong to suddenly 
                    demand that they submit to an unnecessary medical procedure in order to keep their job?
                </p>

                <p className="acc-body-p">
                    To my first year students, is this right, or is this wrong? I already know the answer. 
                </p>
                </p>

                <a href="#home">Back To Top</a>

            </div>

        </div>
    )
}

export default EthicsProfessorFinalLesson
