"use client"; // 

import Container from "../ui/Container";
import { useState } from "react";
import { MdExpandMore } from "react-icons/md";

const faqs = [
  { q: "How does FlowMetrics handle large-scale ingestion?", a: "We use a distributed horizontally scalable architecture..." },
  { q: "Can I integrate with Snowflake?", a: "Yes! Snowflake is one of our native destinations..." },
  { q: "Is there a limit to data transformations?", a: "In our Pro and Enterprise plans, you can chain unlimited SQL-based transformations..." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50 dark:bg-background-dark/30">
      <Container>
        <h2 className="text-4xl font-black text-center mb-16">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 cursor-pointer group"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-lg">{faq.q}</h4>
                <MdExpandMore className={`text-primary text-2xl transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
              </div>
              {openIndex === i && <p className="mt-4 text-gray-500 dark:text-gray-300">{faq.a}</p>}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
