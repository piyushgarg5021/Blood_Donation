import React from 'react';
import './faq.css'; // Add styles for the FAQ section

const FAQ = () => {
  const faqs = [
    {
      question: "Who can donate blood?",
      answer: "Most healthy adults aged 18-65 can donate blood, depending on certain health and eligibility criteria.",
    },
    {
      question: "How often can I donate blood?",
      answer: "You can donate whole blood every 8 weeks, or platelets every 7 days, up to 24 times a year.",
    },
    {
      question: "What should I eat before donating blood?",
      answer: "Eat a healthy meal and stay hydrated before donating. Avoid fatty foods as they can affect blood tests.",
    },
    {
      question: "Is the blood donation process safe?",
      answer: "Yes, blood donation is completely safe. Sterile equipment is used, and there’s no risk of infection.",
    },
    {
      question: "How long does the blood donation process take?",
      answer: "The entire process, including registration, medical screening, donation, and recovery, takes about an hour.",
    },
    {
      question: "Can I donate blood if I have a tattoo or piercing?",
      answer: "You may need to wait 6-12 months after getting a tattoo or piercing, depending on local regulations.",
    },
    {
      question: "What happens to my donated blood?",
      answer: "Your blood is tested, processed, and stored before being distributed to hospitals for patients in need.",
    },
  ];

  return (
    <section className="faq-section">
      <h2>Blood Donation FAQs</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
