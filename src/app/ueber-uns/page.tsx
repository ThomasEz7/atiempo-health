import Image from "next/image";

export default function UeberUns() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary-800 mb-8">Über uns</h1>
          
          {/* Bild-Sektion */}
          <div className="mb-12">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/about-us.jpeg"
                alt="Atiempo Health Team"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          <div className="prose prose-lg">
            <p className="text-xl text-primary-600 mb-6">
              Bei Atiempo Health verstehen wir, dass jeder Mensch einzigartig ist und seine eigenen Bedürfnisse hat. 
              Unser Name steht für diese Philosophie: "A tiempo" bedeutet "zur richtigen Zeit" - und genau das ist unser Versprechen an Sie.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-700">Unsere Vision</h2>
            <p className="text-primary-600 mb-6">
              Wir streben danach, die Gesundheitsversorgung zu revolutionieren, indem wir individuelle Betreuung 
              mit modernster Technologie verbinden. Unser Ziel ist es, jedem Menschen die bestmögliche 
              Gesundheitsversorgung zu bieten - genau dann, wenn sie benötigt wird.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-700">Unser Team</h2>
            <p className="text-primary-600 mb-6">
              Unser Team besteht aus erfahrenen Fachkräften, die sich durch ihre Expertise, 
              ihr Engagement und ihre Empathie auszeichnen. Wir arbeiten Hand in Hand, 
              um Ihnen die bestmögliche Betreuung zu bieten.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-700">Unsere Werte</h2>
            <ul className="list-disc pl-6 text-primary-600 space-y-2">
              <li>Individuelle Betreuung</li>
              <li>Professionelle Expertise</li>
              <li>Innovation und Fortschritt</li>
              <li>Menschlichkeit und Empathie</li>
              <li>Zuverlässigkeit und Vertrauen</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
} 