'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Was sind KI-Tools?',
    answer: 'KI-Tools sind Softwareanwendungen, die künstliche Intelligenz und maschinelles Lernen nutzen, um Aufgaben zu automatisieren, Inhalte zu generieren oder komplexe Probleme zu lösen. Sie können in verschiedenen Bereichen wie Textgenerierung, Bildbearbeitung, Programmierung und mehr eingesetzt werden.',
  },
  {
    question: 'Wie wähle ich das richtige KI-Tool aus?',
    answer: 'Überlege dir zunächst, welches Problem du lösen möchtest. Schau dir dann die Tools in der entsprechenden Kategorie an und vergleiche sie anhand von Bewertungen, Preisen und Features. Viele Tools bieten kostenlose Testversionen an, mit denen du sie ausprobieren kannst.',
  },
  {
    question: 'Sind alle KI-Tools kostenpflichtig?',
    answer: 'Nein, viele KI-Tools bieten kostenlose Versionen oder Freemium-Modelle an. Du findest hier Tools mit verschiedenen Preismodellen: komplett kostenlos, Freemium (Basis kostenlos, Premium kostenpflichtig) und reine Bezahl-Tools.',
  },
  {
    question: 'Wie oft wird die Tool-Liste aktualisiert?',
    answer: 'Wir aktualisieren unsere Sammlung wöchentlich mit neuen Tools und überprüfen regelmäßig die vorhandenen Tools auf Aktualität. Neue Tools werden mit einem "NEU" Badge gekennzeichnet.',
  },
  {
    question: 'Kann ich ein Tool vorschlagen?',
    answer: 'Ja! Wir freuen uns über Vorschläge für neue KI-Tools. Sende uns einfach eine E-Mail mit dem Namen des Tools, einer kurzen Beschreibung und dem Link zur offiziellen Webseite.',
  },
  {
    question: 'Sind die Bewertungen vertrauenswürdig?',
    answer: 'Die Bewertungen basieren auf einer Kombination aus Nutzerfeedback, Expertenmeinungen und unseren eigenen Tests. Wir versuchen, eine objektive und faire Bewertung für jedes Tool bereitzustellen.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-xl text-slate-300">
            Alles, was du über KI-Tools wissen musst
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-800/70 transition-colors"
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
