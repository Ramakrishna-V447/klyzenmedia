import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Why choose Klyzen Media over other agencies?",
    answer: "We focus on bottom-line results, not just vanity metrics. Our team combines creative excellence with data-driven strategies to ensure every campaign drives real growth for your brand."
  },
  {
    question: "What industries do you work with?",
    answer: "We work across various industries including e-commerce, real estate, healthcare, technology, and local services. Our strategies are uniquely tailored to fit your specific market and audience."
  },
  {
    question: "How long does it take to see results?",
    answer: "While some services like Meta Ads can start generating momentum within days, organic strategies like SEO and Brand Building typically take 3-6 months to show compounding results."
  },
  {
    question: "Do you offer custom packages?",
    answer: "Absolutely. While we have standard pricing plans, we can consult with you to build a custom solution that perfectly aligns with your specific goals and budget constraints."
  },
  {
    question: "How do you measure success?",
    answer: "We track KPIs that matter to your business: Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), conversion rates, organic traffic growth, and overall revenue. You'll receive transparent updates on all performance metrics."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 border-b border-black/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-inherit">
            Frequently Asked <span className="text-gradient">Questions</span> 🤔
          </h2>
          <p className="text-inherit text-lg">
            Got questions? We've got answers. If you don't see your question here, feel free to reach out.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-2xl border border-black/10 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
              >
                <span className="font-semibold text-lg text-inherit pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`shrink-0 text-brand-primary transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
                  size={24} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-inherit opacity-70 leading-relaxed border-t border-black/10 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
