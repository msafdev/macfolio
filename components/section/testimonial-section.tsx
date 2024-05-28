import React from "react";
import Title from "../ui/title";
import TestimonialCard from "../component/testimonial-card";

const randomDescriptions = [
  "is a highly skilled professional in the field of software engineering. Known for their problem-solving abilities and innovative solutions.",
  "has made significant contributions to the tech industry with their expertise in developing efficient and scalable software systems.",
  "is recognized for their commitment to excellence and their ability to lead successful projects from conception to completion.",
  "brings a wealth of knowledge and experience to any team, with a track record of delivering high-quality software solutions.",
  "is an exceptional engineer with a passion for technology and a dedication to continuous learning and improvement.",
  "has a proven ability to work collaboratively in team environments, consistently achieving project goals and deadlines.",
  "is a forward-thinking engineer who excels at finding creative solutions to complex problems.",
  "is highly respected in the tech community for their technical skills and their ability to mentor and guide junior developers.",
  "is known for their strong work ethic and their ability to handle multiple tasks efficiently.",
  "has a deep understanding of modern software development practices and tools, making them an invaluable asset to any project.",
];

const Testimonials = [
  {
    name: "Nadia Lovely",
    subtitle: "Software Engineer",
    imageUrl: "https://github.com/msafdev.png",
    imageAlt: "Software Engineer",
    description: `
      ${
        randomDescriptions[
          Math.floor(Math.random() * randomDescriptions.length)
        ]
      }
    `,
  },
  {
    name: "Salman",
    subtitle: "Software Engineer",
    imageUrl: "https://github.com/msafdev.png",
    imageAlt: "Software Engineer",
    description: `
      ${
        randomDescriptions[
          Math.floor(Math.random() * randomDescriptions.length)
        ]
      }
    `,
  },
  {
    name: "Doan Carlos",
    subtitle: "Software Engineer",
    imageUrl: "https://github.com/msafdev.png",
    imageAlt: "Software Engineer",
    description: `
      ${
        randomDescriptions[
          Math.floor(Math.random() * randomDescriptions.length)
        ]
      }
    `,
  },
  {
    name: "Aufal Marom",
    subtitle: "Software Engineer",
    imageUrl: "https://github.com/msafdev.png",
    imageAlt: "Software Engineer",
    description: `
      ${
        randomDescriptions[
          Math.floor(Math.random() * randomDescriptions.length)
        ]
      }
    `,
  },
  {
    name: "Raffi Ahmad",
    subtitle: "Software Engineer",
    imageUrl: "https://github.com/msafdev.png",
    imageAlt: "Software Engineer",
    description: `
      ${
        randomDescriptions[
          Math.floor(Math.random() * randomDescriptions.length)
        ]
      }
    `,
  },
  {
    name: "Josh Brolin",
    subtitle: "Software Engineer",
    imageUrl: "https://github.com/msafdev.png",
    imageAlt: "Software Engineer",
    description: `
      ${
        randomDescriptions[
          Math.floor(Math.random() * randomDescriptions.length)
        ]
      }
    `,
  },
  {
    name: "Daniel Andhika",
    subtitle: "Software Engineer",
    imageUrl: "https://github.com/msafdev.png",
    imageAlt: "Software Engineer",
    description: `
      ${
        randomDescriptions[
          Math.floor(Math.random() * randomDescriptions.length)
        ]
      }
    `,
  },
  {
    name: "Pramudya Augustina",
    subtitle: "Software Engineer",
    imageUrl: "https://github.com/msafdev.png",
    imageAlt: "Software Engineer",
    description: `
      ${
        randomDescriptions[
          Math.floor(Math.random() * randomDescriptions.length)
        ]
      }
    `,
  },
  {
    name: "Krisna Wijaya",
    subtitle: "Software Engineer",
    imageUrl: "https://github.com/msafdev.png",
    imageAlt: "Software Engineer",
    description: `
      ${
        randomDescriptions[
          Math.floor(Math.random() * randomDescriptions.length)
        ]
      }
    `,
  },
];

const TestimonialSection = () => {
  return (
    <section
      className="flex flex-col w-full max-w-4xl items-center"
      id="testimonials"
    >
      <Title
        title="Testimonials"
        subtitle="What people say about me"
        className="mb-6 md:mb-12"
      />
      <div className="grid md:grid-cols-3 grid-rows-1 w-full gap-4 md:gap-6 relative">
        {/* 1-3 */}
        <div className="flex flex-col gap-4 md:gap-6">
          {Testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        {/* 4-6 */}
        <div className="flex flex-col gap-4 md:gap-6">
          {Testimonials.slice(3, 6).map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        {/* 7-9 */}
        <div className="flex-col gap-4 md:gap-6 hidden md:flex">
          {Testimonials.slice(6, 9).map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 md:h-[100%] bg-gradient-to-t from-background" />
      </div>
    </section>
  );
};

export default TestimonialSection;
