import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image: string;
  side: "left" | "right";
}

const Timeline = () => {
  const timelineEvents: TimelineEvent[] = [
    {
      year: "September 10, 2025",
      title: "Pant Jayanti 2025",
      description: "Honouring the legacy of Pandit Govind Ballabh Pant.",
      image: "https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/ucs/events/Pant%20Jayanti%202025/PantJayanti.webp",
      side: "left",
    },
    {
      year: "October 10, 2025",
      title: "118th Kishan Mela",
      description: "Celebrating the hands that nourish the nation",
      image: "https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/ucs/events/118th%20Kishan%20Mela/KishanMela.webp",
      side: "right",
    },
    {
      year: "November 12, 2025",
      title: "Band Show 2025",
      description: "Where music lights up the night and talent takes the stage.",
      image: "https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/ucs/events/Band%20Show%202025/BandShow.webp",
      side: "left",
    },
    {
      year: "November 15, 2025",
      title: "Alumni Meet 2025",
      description: "Reconnecting memories and strengthening bonds.",
      image: "https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/ucs/events/Alumni%20Meet%202025/alumni.webp",
      side: "right",
    },
    {
      year: "February 24, 2026",
      title: "Inter University Sports Cultural Festival 2026",
      description: "A vibrant celebration of diversity and creativity.",
      image: "https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/ucs/events/StateLevelSportsMeet/statelevel.webp",
      side: "left",
    },
    {
      year: "March 13, 2026",
      title: "119th Kishan Mela",
      description: "Celebrating the hands that nourish the nation",
      image: "https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/ucs/events/119th%20Kishan%20Mela/119th%20Kishan%20Mela.webp",
      side: "right",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4 animate-title-reveal">
            A Legacy of Culture
          </h1>
          <div className="section-divider mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-luxurious-fade" style={{ animationDelay: "0.4s" }}>
            Journey through the decades of artistic excellence, unforgettable performances, and the vibrant history of the University Cultural Society.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary to-transparent hidden lg:block" />

            <div className="space-y-12 lg:space-y-20">
              {timelineEvents.map((event, index) => (
                <div
                  key={event.year}
                  className="animate-royal-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`grid lg:grid-cols-2 gap-8 items-center ${event.side === "right" ? "lg:direction-rtl" : ""}`}>
                    {/* Content */}
                    <div className={event.side === "right" ? "lg:order-2" : "lg:order-1"}>
                      <div className="royal-card bg-card p-8 rounded-2xl border border-border/50 card-glow">
                        <div className="inline-block mb-4">
                          <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary font-bold text-lg">
                            {event.year}
                          </span>
                        </div>
                        <h3 className="font-display text-3xl text-foreground mb-3">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    {/* Image */}
                    <div className={event.side === "right" ? "lg:order-1" : "lg:order-2"}>
                      <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-lg">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-[300px] lg:h-[400px] object-cover transition-transform duration-700 hover:scale-105"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>

                    {/* Timeline Dot - Hidden on mobile */}
                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary border-4 border-background rounded-full items-center justify-center" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      <Footer />
    </div>
  );
};

export default Timeline;
