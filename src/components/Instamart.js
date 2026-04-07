import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-[#ddd] p-5 m-5 rounded-md shadow-sm">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      
      {isVisible ? (
        <button
          className="py-2.5 px-5 border-none bg-red-700 text-white rounded-sm cursor-pointer hover:bg-red-800"
          onClick={() => setIsVisible(false)} >Hide</button>
        ) : (
        <button
          className="py-2.5 px-5 border-none bg-[#267919] text-white rounded-sm cursor-pointer hover:bg-[#1b5613]"
          onClick={() => setIsVisible(true)}
        >
          Show
        </button>
      )}

      {isVisible && <p className="mt-5 text-gray-700">{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");

  const sections = [
    {
      id: "about",
      title: "About Instamart",
      description: "This is the About section. Only one of these can be open at a time!",
    },
    {
      id: "team",
      title: "Team Instamart",
      description: "Our team is world-class. Notice how the About section closed automatically?",
    },
    {
      id: "careers",
      title: "Careers",
      description: "We are hiring! Join us to build the future of delivery.",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-3xl font-extrabold px-5">Instamart</h2>
      
      {sections.map((s) => (
        <Section
          key={s.id}
          title={s.title}
          description={s.description}
          isVisible={visibleSection === s.id}
          setIsVisible={(show) => setVisibleSection(show ? s.id : null)}
        />
      ))}
      <div className="h-20"></div>
    </div>
  );
};

export default Instamart;