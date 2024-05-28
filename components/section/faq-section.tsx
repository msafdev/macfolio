import React from "react";
import Title from "../ui/title";
import Faq from "../component/faq";

const FAQ = [
  {
    question: "What is Lorem Ipsum?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Why do we use it?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    question: "Where does it come from?",
    answer:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    question: "Where can I get some?",
    answer: "There are many variations of passages of Lorem Ipsum available.",
  },
];

const FaqSection = () => {
  return (
    <section className="flex flex-col w-full max-w-4xl items-center" id="faq">
      <Title
        title="FAQ"
        subtitle="Frequently asked questions"
        className="mb-6 md:mb-12"
      />
      <div className="flex flex-col gap-y-4 w-full">
        {FAQ.map((faq, index) => (
          <Faq key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
