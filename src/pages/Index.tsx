import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionCards from "@/components/SectionCards";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-green-100">
      <Header />
      <Hero />
      <SectionCards />

      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Почему это важно? 🚴‍♂️
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="font-semibold text-lg mb-2">Безопасность</h3>
              <p className="text-gray-600">
                Изучи правила и катайся без страха!
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="font-semibold text-lg mb-2">Интерактивно</h3>
              <p className="text-gray-600">Играй и учись одновременно!</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="font-semibold text-lg mb-2">Для всей семьи</h3>
              <p className="text-gray-600">Родители тоже найдут полезное!</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
