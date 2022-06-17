import { useEffect, useRef } from "react";
import { init } from "ityped";
import "./intro.css"

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Developer", "Designer", "Content Creator"],
        });
    }, []);
    return (
        <div className="intro">
            <div className="left">
                <div className="image-container">
                    <img src="https://github.com/safak/youtube/blob/react-portfolio/public/assets/man.png?raw=true" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2 >Hi There, I'm</h2>
                    <h1>Khalid El gamely</h1>
                    <h3>
                        Freelance <span className="job" ref={textRef}></span>
                    </h3>
                </div>
                <i class="down-arr fa-solid fa-arrow-down"></i>
            </div>
        </div>

    )
}
