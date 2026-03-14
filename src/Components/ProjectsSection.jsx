import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Pulse",
    description: "A social media application with X-like features.",
    image: "Screenshot 2026-03-14 165052.png",
    tags: ["MERN", "shadcn ui"],
    demoUrl: "https://pulse-52s1.onrender.com/",
    githubUrl: "https://github.com/saketkumar28/Pulse",
  },
  {
    id: 2,
    title: "Diabetes Predictor",
    description:
      "A full-stack machine learning pipeline for predicting diabetes, built with clarity, reproducibility, and responsible deployment in mind. This project includes data cleaning, visualization, model benchmarking, and a user-friendly Streamlit app.",
    image: "/Screenshot 2026-03-14 163530.png",
    tags: ["python", "streamlit", "scikit-learn", "pandas"],
    demoUrl:
      "https://diabetes-health-indicatorforked-s2jdzhdx83aj3wpieuocv5.streamlit.app/",
    githubUrl: "https://github.com/saketkumar28/Diabetes-Health-Indicator",
  },
  {
    id: 3,
    title: "StockStack",
    description:
      "A simple yet functional Product Listing application built with the MERN stack. Track your List Of Items, manage your watchlist, and keep up with your daily requirements with CRUD operations.",
    image: "/public/Screenshot 2026-03-14 161845.png",
    tags: ["React", "Node.js"],
    demoUrl: "https://stockstack.onrender.com/",
    githubUrl: "https://github.com/saketkumar28/StockStack",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/saketkumar28"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
