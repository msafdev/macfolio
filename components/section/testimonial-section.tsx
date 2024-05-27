import React from "react";
import Title from "../ui/title";
import TestimonialCard from "../component/testimonial-card";

const Testimonials = [
  {
    name: "John Doe",
    title: "Software Engineer",
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    `,
  },
  {
    name: "Jane Doe",
    title: "Software Engineer",
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    `,
  },
  {
    name: "John Doe",
    title: "Software Engineer",
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    `,
  },
  {
    name: "Joe Doe",
    title: "Software Engineer",
    description: `
      Ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing elit. Lorem ipsum dolor sit amet. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    `,
  },
  {
    name: "Joe Doe",
    title: "Software Engineer",
    description: `
      Ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing elit. Lorem ipsum dolor sit amet. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    `,
  },
  {
    name: "Joe Doe",
    title: "Software Engineer",
    description: `
      Ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing elit. Lorem ipsum dolor sit amet. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    `,
  },
  {
    name: "Joe Doe",
    title: "Software Engineer",
    description: `
      Ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing elit. Lorem ipsum dolor sit amet. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    `,
  },
  {
    name: "Jane Doe",
    title: "Software Engineer",
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    `,
  },
  {
    name: "John Doe",
    title: "Software Engineer",
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
      <div className="grid md:grid-cols-3 grid-rows-1 w-full gap-6 relative">
        {/* 1-3 */}
        <div className="flex flex-col gap-6">
          {Testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        {/* 4-6 */}
        <div className="flex flex-col gap-6">
          {Testimonials.slice(3, 6).map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        {/* 7-9 */}
        <div className="flex-col gap-6 hidden md:flex">
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
