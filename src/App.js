import { useState } from "react";

const faqs = [
  {
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    question: "Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];
function App() {
  return (
    <div className="accordion-card">
      <div className="image-wrapper">
        <div className="woman-online"></div>
        <img
          className="box"
          src="\images\illustration-box-desktop.svg"
          alt="box"
        />
      </div>
      <div className="faqs">
        <h1>FAQ</h1>
        <Accordion data={faqs} />
      </div>
    </div>
  );
}
function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div>
      {data.map((el, i) => (
        <AccordionItem question={el.question} answer={el.answer} curOpen={curOpen} onOpen={setCurOpen} num={i}/>
      ))}
    </div>
  );
}
function AccordionItem({ question, answer, curOpen, onOpen, num }) {
  const isOpen = num===curOpen;

  function handleToggle() {
    onOpen(isOpen ? null: num);
  }
  return (
    <div className="item">
      <div className={`title-icon ${isOpen && "open"}`} onClick={handleToggle}>
        <p className="red-active">{question}</p>
        <img
          className="toggle"
          src="/images/icon-arrow-down.svg"
          alt="toggle"
        />
      </div>
      <div className="answer">{isOpen && <p>{answer}</p>}</div>
      <hr></hr>
    </div>
  );
}

export default App;
