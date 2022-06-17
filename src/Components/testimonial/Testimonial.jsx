import "./testimonial.css"

export default function Testimonial() {

    const data = [
        {
            id: 1,
            name: "Tom Durden",
            title: "Senior Developer",
            img:
                "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/twitter.png",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        },
        {
            id: 2,
            name: "Alex Kalinski",
            title: "Co-Founder of DELKA",
            img:
                "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/youtube.png",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
            featured: true,
        },
        {
            id: 3,
            name: "Martin Harold",
            title: "CEO of ALBI",
            img:
                "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/linkedin.png",
            desc:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
    ];
    return (
        <div className='testimonial'>
            <h1>Testimonial</h1>
            <div className="test-container">
                {data.map(d => (
                    <div className={d.featured ? "test-item featured" : "test-item"}>
                        <div className="head">
                            <i class="fa-solid fa-arrow-right-long"></i>
                            <img src={d.img} alt="personal" />
                            <i class="fa-brands fa-twitter"></i>
                        </div>
                        <div className="center">
                            <p>{d.desc}</p>
                        </div>
                        <div className="foot">
                            <h3>{d.name}</h3>
                            <span>{d.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
