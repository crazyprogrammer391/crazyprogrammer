import React, { useState, useEffect } from 'react'
import Desktop from './Desktop';
import Mobile from './Mobile';

function Home() {

    const [isDesktop, setDesktop] = useState(window.innerWidth > 1200);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 1200);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return() => {
            window.removeEventListener("resize", updateMedia);
        }
    }, []);

    return (
        <div>
      {isDesktop ? (
        <div>
          <Desktop />
        </div>
      ) : (
        <div>
          <Mobile />
        </div>
      )}
    </div>
    )
}

export default Home
