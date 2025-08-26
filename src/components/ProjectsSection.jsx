import { ArrowRight, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Health Meal Recipe',
    description:
      'Discover eight quick, whole-food recipes that you can cook tonight no processed junk, no guesswork.',
    image: '/projects/project1.png',
    tags: ['React', 'Vite', 'CSS'],
    demoUrl: 'https://heathly-recipe.vercel.app/',
    githubUrl: 'https://github.com/ONUOHA92/Heathly-Recipe',
  },
  {
    id: 2,
    title: 'E-commerces Website',
    description:
      'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
    image: '/projects/project2.png',
    tags: ['TypeScript', 'Vite', 'Reactjs', 'Tailwind'],
    demoUrl: 'https://react-ecommerce-theta-pearl.vercel.app/',
    githubUrl: 'https://github.com/ONUOHA92/React-ecommerce',
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    description:
      'Full-featured e-commerce platform with user authentication and payment processing.',
    image: '/projects/project3.png',
    tags: ['React', 'Node.js', 'Stripe'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Mortgage Calculator',
    description: 'An application to calculate Mortgage.',
    image: '/projects/project4.png',
    tags: ['Html', 'Css', 'JavaScript'],
    demoUrl: 'https://mortgage-calculator-five-pink.vercel.app/',
    githubUrl: 'https://github.com/ONUOHA92/Mortgage-calculator/tree/main',
  },
  {
    id: 5,
    title: 'Virtual Card Creation',
    description: 'An application to create virtual card.',
    image: '/projects/project5.png',
    tags: ['Html', 'Scss', 'JavaScript'],
    demoUrl: 'https://interactive-card-form-inky.vercel.app/',
    githubUrl: 'https://github.com/ONUOHA92/interactive-card-form/tree/main',
  },
  {
    id: 6,
    title: 'Escrow Pro',
    description:
      'An application that connect a buyer and a seller in other to aviod fraud',
    image: '/projects/project6.png',
    tags: ['Reactjs', 'Tailwind', 'Nextjs'],
    demoUrl: 'https://escrow-pro-frontend.vercel.app/',
    githubUrl: 'https://github.com/Techumbre/EscrowPro-frontend/tree/main',
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {' '}
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
            href="https://github.com/ONUOHA92"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
