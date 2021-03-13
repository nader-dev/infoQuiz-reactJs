import React, { useRef, useEffect, useState } from 'react'

const Landing = () => {
    const refInfiQuiz = useRef(null)

    const [btn, setBtn] = useState(false)

    useEffect(() => {
        refInfiQuiz.current.classList.add("startingImg")
        setTimeout(() => {
            refInfiQuiz.current.classList.remove("startingImg")
            setBtn(true)
        }, 1000);
    }, [])


    return (
        <div>
            <main ref={refInfiQuiz} className="welcomePage">
                {btn ?
                    <>
                        <div className="leftBox">
                            <button className="btn-welcome">Inscription</button>
                        </div>
                        <div className="rightBox">
                            <button className="btn-welcome">Connexion</button>
                        </div>
                    </>
                    : null}
            </main>
        </div>
    )
}

export default Landing  
