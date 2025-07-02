import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-8xl mb-6 animate-bounce">🚴‍♂️</div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Безопасная езда —<br />
            <span className="text-blue-600">весёлая езда!</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Изучай правила дорожного движения для велосипедистов через
            интерактивные мультики, игры и квизы!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть мультики
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-orange-400 text-orange-600 hover:bg-orange-50"
            >
              <Icon name="Gamepad2" className="mr-2" size={20} />
              Играть в игры
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl mb-2">🎥</div>
              <p className="text-sm text-gray-600 font-medium">12 серий</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎮</div>
              <p className="text-sm text-gray-600 font-medium">8 игр</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">❓</div>
              <p className="text-sm text-gray-600 font-medium">15 квизов</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🏆</div>
              <p className="text-sm text-gray-600 font-medium">Награды</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
