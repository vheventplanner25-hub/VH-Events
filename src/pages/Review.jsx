import { Quote } from "lucide-react";
import { useEffect, useState } from "react";
import "./Home.css";

const reviews = [
    {
        name: "Shubham Chechani",
        role: "Wedding Client",
        quote:
            "VH Event Planner exceeded our expectations. Every detail was meticulously handled, the decor was breathtaking, and the outcome was exceptional."
    },
    {
        name: "Nikhil Oswal",
        role: "Corporate Gala Host",
        quote:
            "Professional, creative, and extremely responsive. VH made our annual corporate event completely seamless and highly successful."
    },
    {
        name: "Shubham Jain",
        role: "Family Event",
        quote:
            "Flawless execution and thoughtful coordination. VH made my brother's destination wedding stress-free and a truly memorable occasion for everyone!"
    },
    {
        name: "Tanvi ji",
        role: "Wedding Client",
        quote:
            "A heartfelt thank you to VH Event Planner for making Manali & Darpan’s wedding truly beautiful and memorable. 💍✨ Your amazing décor, smooth management, and attention to every detail gave our family memories we’ll cherish forever. Wishing you continued success ahead! 🌸"
    },
    {
        name: "Oswal Family",
        role: "Wedding Client",
        quote:
            "Dear Vansh, Harshal & Team, Thank you so much for your kind words and heartfelt wishes. We truly appreciate the effort, dedication, and creativity your entire team put into making the wedding celebrations so seamless and memorable."
    },
];

export default function Review() {

    const [current, setCurrent] = useState(0);

    // AUTO SLIDER
    useEffect(() => {

        const interval = setInterval(() => {

            setCurrent((prev) => {
                return (prev + 1) % reviews.length;
            });

        }, 4000);

        return () => clearInterval(interval);

    }, []);

    return (
        <section className="testimonials-section">

            <div className="testimonial-slider-container">

                <div className="testimonial-quote-icon">
                    <Quote size={50} />
                </div>

                <p className="testimonial-quote">
                    "{reviews[current].quote}"
                </p>

                <h4 className="testimonial-name">
                    {reviews[current].name}
                </h4>

                <p className="testimonial-role">
                    {reviews[current].role}
                </p>

                <div className="testimonial-dots">

                    {reviews.map((_, index) => (

                        <button
                            key={index}
                            className={`dot-btn ${current === index ? "active" : ""}`}
                            onClick={() => setCurrent(index)}
                        />

                    ))}

                </div>

            </div>

        </section>
    );
}