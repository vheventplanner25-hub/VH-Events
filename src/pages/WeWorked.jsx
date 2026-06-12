import "./WeWorked.css";

export default function WeWorked() {

    const cities = [
        "Pune",
        "Mumbai",
        "Aurangabad",
        "Ahmednagar",
        "Igatpuri",
        "Nasik",
        "Hyderabad",
        "Khajuraho",
        "Jalgaon",
        "Bhusawal",
        "Mahableshwar",
        "Lonavala",
        "Daman",
        "Goa",
        "Delhi",
        "Raipur"
    ];



    const venues1 = [
  "The Corinthians Club",
  "JW Marriott",
  "Lemon Tree",
  "Tip Top International",
  "Santosa",
  "Elegant Waterfront Resort",
  "Courtyard By Marriott",
  "Oxford Gold Resort",
  "Pandit Farms",
  "Amanora Fern",
  "Hyatt",
  "Orchid Hotel",
  "Novotel Hotel",
  "Westin KP",
  "Sheraton Grand",
  "Della Resort",
  "Iksana Resort"
];

const venues2 = [
  "Lagoona Resort",
  "Novotel",
  "Radisson Blu",
  "The Forest Club Resort",
  "The Foresta",
  "GCC Club",
  "The St. Regis",
  "Sand & Sand",
  "Sula Wine Yard",
  "Enrise By Sayaji",
  "Bright Land",
  "Taj Fountain",
  "TGL Resort",
  "Evershine Resort & Spa",
  "The Lalit",
  "ITC Grand",
  "Hotel Chandela"
];

    return (
        <section className="worked-section">

            <div className="worked-heading">
                <span>OUR PRESENCE</span>

                <h2>
                    Cities & Venues We Worked At
                </h2>

                <p>
                    Delivering memorable events across India's most
                    prestigious destinations and venues.
                </p>
            </div>

            <div className="fade-left"></div>
            <div className="fade-right"></div>

            <MarqueeRow
                items={cities}
                icon="📍"
                direction="left"
            />

            <MarqueeRow
                items={venues1}
                icon="🏨"
                direction="right"
            />

            <MarqueeRow
                items={venues2}
                icon="🏨"
                direction="left"
            />

        </section>
    );
}

function MarqueeRow({ items, icon, direction }) {

    return (
        <div className="marquee-container">

            <div
                className={`marquee-track ${
                    direction === "right"
                        ? "marquee-reverse"
                        : "marquee"
                }`}
            >
                {[...items, ...items].map((item, index) => (
                    <div className="glass-card" key={index}>
                        <span>{icon}</span>
                        <p>{item}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}