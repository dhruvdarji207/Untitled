'use client';

import { useState } from 'react';

const questions = [
  {
    q: 'What is the preferred defense against SQL injection when inserting values into a query?',
    options: ['Longer passwords', 'Parameterized queries', 'Hidden form fields'],
    answer: 1,
  },
  {
    q: 'What should happen to untrusted text before placing it into HTML text content?',
    options: ['Encode it for the output context', 'Base64 it', 'Put it in a comment'],
    answer: 0,
  },
  {
    q: 'Why is the XSS preview placed in a sandboxed iframe?',
    options: ['To make it faster', 'To isolate demo script behavior', 'To connect to other sites'],
    answer: 1,
  },
] as const;

export default function QuizPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const score = questions.reduce((sum, item, index) => sum + (answers[index] === item.answer ? 1 : 0), 0);

  return (
    <div className="container page-space narrow">
      <div className="page-heading"><span className="eyebrow">CHECKPOINT</span><h1>SecureLab Quiz</h1><p>Three questions on the defensive ideas used in the labs.</p></div>
      <div className="stack">
        {questions.map((item, index) => (
          <section className="card quiz-card" key={item.q}>
            <h2>{index + 1}. {item.q}</h2>
            <div className="stack small-gap">
              {item.options.map((option, optionIndex) => (
                <label className="option" key={option}>
                  <input type="radio" name={`q-${index}`} checked={answers[index] === optionIndex} onChange={() => { setAnswers((old) => ({ ...old, [index]: optionIndex })); setSubmitted(false); }} />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </section>
        ))}
      </div>
      <button className="button primary" onClick={() => setSubmitted(true)}>Check score</button>
      {submitted && <div className="notice safe-note"><strong>Score: {score}/{questions.length}</strong> — {score === questions.length ? 'Great. You identified all three defensive patterns.' : 'Review the labs and try again.'}</div>}
    </div>
  );
}
