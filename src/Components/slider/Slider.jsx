import { useState } from "react";
import "./slider.css"

export default function Slider() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            icon: "./assets/mobile.png",
            title: "Web Design",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            img:
                "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
            id: "2",
            icon: "./assets/globe.png",
            title: "Mobile Application",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
                "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
            id: "3",
            icon: "./assets/writing.png",
            title: "Branding",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
                "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
    ];


    function handleClick(way) {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }
    return (
        <div className='slider'>
            <div className="slider-wrapper"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {data.map(d => (
                    <div className="slider-container">
                        <div className="slider-item">
                            <div className="slider-left">
                                <i class="fa-solid fa-mobile-screen"></i>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <span>Projects</span>
                            </div>
                            <div className="slider-right">
                                <img
                                    src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="arrow right"
                onClick={() => handleClick()}

            ><i class="fa-solid fa-arrow-right"></i></button>
            <button className="arrow left"
                onClick={() => handleClick("left")}

            ><i class="fa-solid fa-arrow-left"></i></button>
        </div>
    )
}
