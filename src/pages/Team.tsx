import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamMemberCard from "@/components/TeamMemberCard";
import { Mail, Phone } from "lucide-react";

const Team = () => {
  const staffCounsellor = {
    name: "Dr. Kiran Rana",
    designation: "Staff Counsellor",
    department: "Department of Communication",
    college: "College of Agriculture",
    email: "kiranagricommunication@gmail.com",
    phone: "+91 7535881397",
    imageUrl: "https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/ucs/kiran_arya.webp",
  };

  const teamMembers = [
    {
      name: "Harshit Upreti",
      role: "President",
      college: "College of Agriculture",
      imageUrl: "https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/ucs/team/Harshit%20Sir.webp",
    },
    {
      name: "Devasish Nath",
      role: "General Secretary",
      college: "College of Veterinary and Animal Sciences",
      imageUrl: "https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/ucs/team/Devashish%20Sir.webp",
    },
    {
      name: "Ayushi Saklani",
      role: "Joint Secretary",
      college: "College of Agriculture",
      imageUrl: "https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/ucs/team/Ayushi%20Mam.webp",
    },
    {
      name: "Aditi Rawat",
      role: "Joint Secretary",
      college: "College of Technology",
      imageUrl: "https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/ucs/team/aditi%20mam.webp",
    },
    {
      name: "Priyanshi Singh",
      role: "Media Secretary",
      college: "College of Fisheries",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=800&fit=crop&crop=face",
    },
    {
      name: "Vanshita",
      role: "Media Secretary",
      college: "College of Basic Science and Humanities",
      imageUrl: "https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/ucs/team/Vanshita%20Mam.webp",
    },
    {
      name: "Shambhavi",
      role: "Managerial Secretary",
      college: "College of Agriculture",
      imageUrl: "https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/ucs/team/shambhavi%20Mam.webp",
    },
    {
      name: "Gayatri Joshi",
      role: "Vice President",
      college: "College of Community Science",
      imageUrl: "https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/ucs/team/gayatri.webp",
    },
    {
      name: "Deepanshu Devtalla",
      role: "Treasurer",
      college: "College of Technology",
      imageUrl: "https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/ucs/team/Deepanshu.webp",
    },
    {
      name: "Ashutosh Pal",
      role: "Media Head",
      college: "College of Agriculture",
      imageUrl: "https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/ucs/team/ashutosh.webp",
    },
    {
      name: "Vivek Jadli",
      role: "Event Management Head",
      college: "College of Agriculture",
      imageUrl: "https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/ucs/team/vivek.webp",
    },
    {
      name: "Astha Chand",
      role: "Event Management Head",
      college: "College of Basic Science and Humanities",
      imageUrl: "https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/ucs/team/ashtha.webp",
    },
    {
      name: "Aditya Pramod",
      role: "Logistic Head",
      college: "College of Agriculture",
      imageUrl: "https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/ucs/team/aditya.webp",
    },
    {
      name: "Pranjali Tamta",
      role: "Logistic Head",
      college: "College of Community Science",
      imageUrl: "https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/ucs/team/Pranjali.webp",
    },
    {
      name: "Rudraksh",
      role: "Technical Head",
      college: "College of Technology",
      imageUrl: "https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/ucs/team/rudraksh.webp",
    },
    {
      name: "Tanishka Rajput",
      role: "Member",
      college: "College of Basic Science and Humanities",
      imageUrl: "https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/ucs/team/tanishka.webp",
    },
    {
      name: "Shivangi Dutta",
      role: "Member",
      college: "College of Agriculture",
      imageUrl: "https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/ucs/team/Shivii.webp",
    },
    {
      name: "Raghav Kohli",
      role: "Member",
      college: "College of Fisheries",
      imageUrl: "https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/ucs/team/raghav.webp",
    },
    {
      name: "Kshitij Vats",
      role: "Member",
      college: "College of Agriculture",
      imageUrl: "https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/ucs/team/kshitij.webp",
    },
    {
      name: "Gauri Mittal",
      role: "Member",
      college: "College of Technology",
      imageUrl: "https://pub-b9cd201fbde6424783fdf034160caaab.r2.dev/ucs/team/gauri.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section - Staff Counsellor */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-primary blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Meet Our Team
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              The People Behind
              <span className="block text-primary">University Cultural Scoiety</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Dedicated individuals working together to celebrate and promote our rich cultural heritage
            </p>
          </div>
          
          {/* Staff Counsellor Card */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-card rounded-3xl overflow-hidden border border-border/50 shadow-elegant">
              <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
              
              <div className="relative flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-2/5 aspect-square md:aspect-auto">
                  <img
                    src={staffCounsellor.imageUrl}
                    alt={staffCounsellor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                  <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground text-sm font-medium rounded-full mb-4 w-fit">
                    Staff Counsellor
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {staffCounsellor.name}
                  </h2>
                  <p className="text-primary font-medium mb-2">{staffCounsellor.department}</p>
                  <p className="text-muted-foreground mb-6">{staffCounsellor.college}</p>
                  
                  <div className="space-y-3">
                    <a 
                      href={`mailto:${staffCounsellor.email}`}
                      className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
                    >
                      <Mail size={18} className="text-primary" />
                      <span>{staffCounsellor.email}</span>
                    </a>
                    <a 
                      href={`tel:${staffCounsellor.phone}`}
                      className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors"
                    >
                      <Phone size={18} className="text-primary" />
                      <span>{staffCounsellor.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Members Section */}
      <section className="py-20 bg-espresso/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Committee
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The passionate leaders who drive our cultural initiatives forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={member.name}
                {...member}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Team;
