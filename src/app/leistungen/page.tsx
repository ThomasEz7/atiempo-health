export default function Leistungen() {
  const services = [
    {
      title: "Individuelle Pflege",
      description: "Maßgeschneiderte Pflegepläne, die auf Ihre spezifischen Bedürfnisse und Wünsche abgestimmt sind.",
      features: [
        "Persönliche Betreuung",
        "Individuelle Pflegepläne",
        "Regelmäßige Anpassung der Pflege"
      ]
    },
    {
      title: "24/7 Betreuung",
      description: "Rund um die Uhr für Sie da - Tag und Nacht, an 365 Tagen im Jahr.",
      features: [
        "Notfallbetreuung",
        "Nachtwache",
        "Kontinuierliche Überwachung"
      ]
    },
    {
      title: "Medizinische Versorgung",
      description: "Professionelle medizinische Betreuung durch qualifiziertes Fachpersonal.",
      features: [
        "Medikamentenverwaltung",
        "Wundversorgung",
        "Vitalzeichenkontrolle"
      ]
    },
    {
      title: "Mobilitätsunterstützung",
      description: "Hilfe bei der Bewegung und Mobilität im Alltag.",
      features: [
        "Gehhilfe",
        "Transferunterstützung",
        "Bewegungstraining"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary-800 mb-8 text-center">Unsere Leistungen</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-primary-50 rounded-lg p-6 shadow-sm border border-primary-100">
                <h2 className="text-2xl font-semibold mb-4 text-primary-800">{service.title}</h2>
                <p className="text-primary-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-primary-600">
                      <svg className="w-5 h-5 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-primary-600 mb-4">
              Haben Sie Fragen zu unseren Leistungen oder benötigen Sie weitere Informationen?
            </p>
            <a
              href="/kontakt"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Kontaktieren Sie uns
            </a>
          </div>
        </div>
      </main>
    </div>
  );
} 