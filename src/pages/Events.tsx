import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import eventDance from "@/assets/event-dance.jpg";
import eventMusic from "@/assets/event-music.jpg";
import eventWorkshop from "@/assets/event-workshop.jpg";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Nritya Utsav 2024",
      category: "Dance Festival",
      date: "March 15, 2024",
      time: "6:00 PM - 10:00 PM",
      venue: "Main Auditorium",
      description: "A grand celebration of classical and folk dance forms from across India. Witness mesmerizing performances by renowned artists and our talented students.",
      image: eventDance,
      attendees: 500,
      featured: true,
    },
    {
      id: 2,
      title: "Swar Sangam",
      category: "Music Concert",
      date: "March 22, 2024",
      time: "5:00 PM - 9:00 PM",
      venue: "Open Air Theatre",
      description: "An evening of soulful melodies featuring classical vocal and instrumental performances. Experience the magic of Indian classical music.",
      image: eventMusic,
      attendees: 350,
      featured: true,
    },
    {
      id: 3,
      title: "Kathak Masterclass",
      category: "Workshop",
      date: "March 28, 2024",
      time: "10:00 AM - 4:00 PM",
      venue: "Dance Studio, Block C",
      description: "An intensive workshop on Kathak fundamentals and advanced techniques conducted by Padma Shri awardee Guru Malini Devi.",
      image: eventWorkshop,
      attendees: 50,
      featured: false,
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Diwali Cultural Night",
      category: "Festival",
      date: "November 12, 2023",
      image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=800&h=500&fit=crop",
    },
    {
      id: 5,
      title: "Fusion Music Festival",
      category: "Music",
      date: "October 5, 2023",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=500&fit=crop",
    },
    {
      id: 6,
      title: "Rangoli Competition",
      category: "Art",
      date: "September 20, 2023",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=500&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary blur-3xl" />
          <div className="absolute bottom-0 left-10 w-64 h-64 rounded-full bg-primary blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Cultural Calendar
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Upcoming <span className="text-primary">Events</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover and participate in our vibrant cultural events celebrating the rich heritage of Indian arts and traditions
            </p>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-10">
            Featured Events
          </h2>

          <div className="grid gap-8">
            {upcomingEvents.filter(e => e.featured).map((event, index) => (
              <div
                key={event.id}
                className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-elegant"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  <div className="lg:w-2/5 aspect-video lg:aspect-auto relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-espresso/20 lg:bg-gradient-to-l" />
                    <span className="absolute top-4 left-4 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      {event.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="lg:w-3/5 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 line-clamp-2">
                      {event.description}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar size={16} className="text-primary" />
                        <span className="text-foreground/80">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock size={16} className="text-primary" />
                        <span className="text-foreground/80">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin size={16} className="text-primary" />
                        <span className="text-foreground/80">{event.venue}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users size={16} className="text-primary" />
                        <span className="text-foreground/80">{event.attendees}+ Expected</span>
                      </div>
                    </div>

                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors w-fit group/btn">
                      Register Now
                      <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Upcoming Events */}
      <section className="py-16 bg-espresso/5">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-10">
            All Upcoming Events
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-elegant"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {event.category}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap gap-3 text-xs text-foreground/70">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} className="text-primary" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-primary" />
                      {event.venue}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-10">
            Past Events
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-5 text-butter">
                  <span className="text-xs text-butter/70 uppercase tracking-wider">
                    {event.category} • {event.date}
                  </span>
                  <h3 className="font-display text-xl font-bold mt-1">
                    {event.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
