import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const SectionCards = () => {
  const sections = [
    {
      title: "Смотреть",
      description: "Увлекательные мультики про приключения велосипедистов",
      icon: "🎬",
      color: "from-blue-400 to-blue-600",
      features: ["12 серий", "HD качество", "Субтитры"],
    },
    {
      title: "Учиться",
      description: "Правила дорожного движения в простой и понятной форме",
      icon: "📚",
      color: "from-green-400 to-green-600",
      features: ["Интерактивные уроки", "Тесты", "Сертификаты"],
    },
    {
      title: "Играть",
      description: "Весёлые игры для закрепления правил безопасности",
      icon: "🎮",
      color: "from-orange-400 to-orange-600",
      features: ["8 мини-игр", "Рейтинги", "Достижения"],
    },
    {
      title: "Родителям",
      description: "Полезная информация и советы для взрослых",
      icon: "👨‍👩‍👧‍👦",
      color: "from-purple-400 to-purple-600",
      features: ["Советы экспертов", "Статистика", "Рекомендации"],
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Выбери свой путь! 🛤️
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((section, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
            >
              <div
                className={`h-32 bg-gradient-to-br ${section.color} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-5xl group-hover:scale-110 transition-transform">
                    {section.icon}
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {section.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {section.description}
                </p>

                <ul className="space-y-1 mb-4">
                  {section.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-gray-500 flex items-center"
                    >
                      <Icon
                        name="Check"
                        size={12}
                        className="mr-1 text-green-500"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full group-hover:bg-blue-600 transition-colors"
                  variant="outline"
                >
                  Перейти
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionCards;
