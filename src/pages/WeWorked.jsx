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
    "Raipur",
  ];

  const venues = [
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
    "Iksana Resort",
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
    "Hotel Chandela",
  ];

  const desktopVenues1 = venues.slice(0, 17);
  const desktopVenues2 = venues.slice(17);

  const chunkArray = (arr, size) =>
    Array.from(
      { length: Math.ceil(arr.length / size) },
      (_, i) => arr.slice(i * size, i * size + size)
    );

const mobileVenueRows = chunkArray(venues, Math.ceil(venues.length / 3));

  return (
    <section className="worked-section">
      <div className="worked-heading">
        <span>OUR PRESENCE</span>

        <h2>Cities & Venues We Worked At</h2>

        <p>
          Delivering memorable events across India's most prestigious
          destinations and venues.
        </p>
      </div>

      <div className="fade-left"></div>
      <div className="fade-right"></div>

      {/* Cities */}
      <MarqueeRow
        items={cities}
        icon="📍"
        direction="left"
      />

      {/* Desktop Venue Rows */}
      <div className="desktop-view">
        <MarqueeRow
          items={desktopVenues1}
          icon="🏨"
          direction="right"
        />

        <MarqueeRow
          items={desktopVenues2}
          icon="🏨"
          direction="left"
        />
      </div>

      {/* Mobile Venue Rows */}
      <div className="mobile-view">
  {mobileVenueRows.map((row, index) => (
    <MarqueeRow
      key={index}
      items={row}
      icon="🏨"
      direction={index % 2 === 0 ? "left" : "right"}
    />
  ))}
</div>
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