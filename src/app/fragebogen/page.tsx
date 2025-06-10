'use client';
import { useState } from 'react';

export default function Fragebogen() {
  const [answers, setAnswers] = useState({
    // Abschnitt 1
    koerperlich: '',
    bewegung: '',
    ernaehrung: '',
    beschwerden: '',
    // Abschnitt 2
    stress: '',
    abschalten: '',
    negativeGedanken: '',
    werteZiele: '',
    // Abschnitt 3
    verbundenheit: '',
    erfuellung: '',
    sozialeKontakte: '',
    selbstfuersorge: '',
    // Abschlussfragen
    verbessern: '',
    gewohnheit: '',
    kraft: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Antworten:', answers);
    // Hier später die Logik zum Speichern der Antworten implementieren
  };

  const RadioGroup = ({ name, options, value, onChange, label }: { 
    name: string; 
    options: string[]; 
    value: string; 
    onChange: (value: string) => void; 
    label: string;
  }) => (
    <div className="mb-8">
      <p className="font-medium text-lg mb-4 text-gray-800">{label}</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {options.map((option) => (
          <label 
            key={option} 
            className={`flex items-center p-3 rounded-lg border-2 cursor-pointer transition-colors ${
              value === option 
                ? 'border-blue-600 bg-blue-50' 
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={(e) => onChange(e.target.value)}
              className="mr-3"
            />
            <span className="text-gray-800">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-blue-900 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">Gesundheitsfragebogen</h1>
        
        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Abschnitt 1 */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-900 mb-8">Abschnitt 1 – Körper & Energie</h2>
            
            <div className="space-y-6">
              <RadioGroup
                name="koerperlich"
                label="Wie fühlst du dich körperlich im Alltag?"
                options={['energielos', 'eher müde', 'ausgeglichen', 'vital']}
                value={answers.koerperlich}
                onChange={(value) => setAnswers({...answers, koerperlich: value})}
              />

              <RadioGroup
                name="bewegung"
                label="Wie regelmäßig bewegst du dich?"
                options={['kaum', 'ab und zu', 'regelmäßig', 'sehr aktiv']}
                value={answers.bewegung}
                onChange={(value) => setAnswers({...answers, bewegung: value})}
              />

              <RadioGroup
                name="ernaehrung"
                label="Wie beurteilst du deine Ernährung insgesamt?"
                options={['ungesund', 'mittelmäßig', 'eher gesund', 'sehr bewusst']}
                value={answers.ernaehrung}
                onChange={(value) => setAnswers({...answers, ernaehrung: value})}
              />

              <RadioGroup
                name="beschwerden"
                label="Wie oft hast du körperliche Beschwerden?"
                options={['häufig', 'manchmal', 'selten', 'kaum jemals']}
                value={answers.beschwerden}
                onChange={(value) => setAnswers({...answers, beschwerden: value})}
              />
            </div>
          </section>

          {/* Abschnitt 2 */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-900 mb-8">Abschnitt 2 – Mental & Emotionen</h2>
            
            <div className="space-y-6">
              <RadioGroup
                name="stress"
                label="Wie oft fühlst du dich gestresst oder überfordert?"
                options={['täglich', 'mehrmals pro Woche', 'selten', 'fast nie']}
                value={answers.stress}
                onChange={(value) => setAnswers({...answers, stress: value})}
              />

              <RadioGroup
                name="abschalten"
                label="Wie gut kannst du abschalten und zur Ruhe kommen?"
                options={['kaum', 'schwer', 'manchmal gut', 'meistens gut']}
                value={answers.abschalten}
                onChange={(value) => setAnswers({...answers, abschalten: value})}
              />

              <RadioGroup
                name="negativeGedanken"
                label="Wie gehst du mit negativen Gedanken oder Emotionen um?"
                options={[
                  'ich vermeide sie',
                  'ich lenke mich ab',
                  'ich setze mich damit auseinander',
                  'ich kann sie gut regulieren'
                ]}
                value={answers.negativeGedanken}
                onChange={(value) => setAnswers({...answers, negativeGedanken: value})}
              />

              <RadioGroup
                name="werteZiele"
                label="Wie klar sind dir deine eigenen Werte und Ziele?"
                options={['gar nicht', 'eher vage', 'einigermaßen', 'sehr klar']}
                value={answers.werteZiele}
                onChange={(value) => setAnswers({...answers, werteZiele: value})}
              />
            </div>
          </section>

          {/* Abschnitt 3 */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-900 mb-8">Abschnitt 3 – Soziales & Sinn</h2>
            
            <div className="space-y-6">
              <RadioGroup
                name="verbundenheit"
                label="Wie verbunden fühlst du dich mit anderen Menschen?"
                options={['einsam', 'eher isoliert', 'verbunden', 'getragen']}
                value={answers.verbundenheit}
                onChange={(value) => setAnswers({...answers, verbundenheit: value})}
              />

              <RadioGroup
                name="erfuellung"
                label="Wie erfüllend empfindest du deinen Alltag?"
                options={['leer/chaotisch', 'durchwachsen', 'meist sinnvoll', 'sehr erfüllend']}
                value={answers.erfuellung}
                onChange={(value) => setAnswers({...answers, erfuellung: value})}
              />

              <RadioGroup
                name="sozialeKontakte"
                label="Wie oft nimmst du dir bewusst Zeit für soziale Kontakte?"
                options={['selten', 'gelegentlich', 'regelmäßig', 'sehr häufig']}
                value={answers.sozialeKontakte}
                onChange={(value) => setAnswers({...answers, sozialeKontakte: value})}
              />

              <RadioGroup
                name="selbstfuersorge"
                label="Wie viel Raum hat Selbstfürsorge in deinem Alltag?"
                options={['gar keinen', 'wenig', 'zunehmend', 'ist mir wichtig']}
                value={answers.selbstfuersorge}
                onChange={(value) => setAnswers({...answers, selbstfuersorge: value})}
              />
            </div>
          </section>

          {/* Abschlussfragen */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-900 mb-8">Abschlussfragen</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block font-medium text-lg mb-3 text-gray-800">
                  Was möchtest du gerade verbessern oder verändern?
                </label>
                <textarea
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-800"
                  rows={3}
                  value={answers.verbessern}
                  onChange={(e) => setAnswers({...answers, verbessern: e.target.value})}
                  placeholder="Deine Antwort hier..."
                />
              </div>

              <div>
                <label className="block font-medium text-lg mb-3 text-gray-800">
                  Welche Gewohnheit würdest du gern loslassen oder neu etablieren?
                </label>
                <textarea
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-800"
                  rows={3}
                  value={answers.gewohnheit}
                  onChange={(e) => setAnswers({...answers, gewohnheit: e.target.value})}
                  placeholder="Deine Antwort hier..."
                />
              </div>

              <div>
                <label className="block font-medium text-lg mb-3 text-gray-800">
                  Was gibt dir im Alltag Kraft und Orientierung?
                </label>
                <textarea
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-800"
                  rows={3}
                  value={answers.kraft}
                  onChange={(e) => setAnswers({...answers, kraft: e.target.value})}
                  placeholder="Deine Antwort hier..."
                />
              </div>
            </div>
          </section>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Absenden
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 