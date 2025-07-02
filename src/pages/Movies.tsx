import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";

interface Episode {
  id: number;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  difficulty: "easy" | "medium" | "hard";
  topics: string[];
}

const Movies = () => {
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const episodes: Episode[] = [
    {
      id: 1,
      title: "Знакомство с велосипедом",
      description:
        "Петя получает свой первый велосипед и учится основам безопасной езды",
      duration: "8:30",
      thumbnail: "🚴‍♂️",
      videoUrl: "#",
      difficulty: "easy",
      topics: ["Основы", "Первая поездка", "Шлем"],
    },
    {
      id: 2,
      title: "Правила дорожного движения",
      description: "Изучаем дорожные знаки и правила для велосипедистов",
      duration: "10:15",
      thumbnail: "🚦",
      videoUrl: "#",
      difficulty: "medium",
      topics: ["ПДД", "Знаки", "Светофор"],
    },
    {
      id: 3,
      title: "Велодорожки и тротуары",
      description: "Где можно, а где нельзя ездить на велосипеде",
      duration: "7:45",
      thumbnail: "🛣️",
      videoUrl: "#",
      difficulty: "easy",
      topics: ["Велодорожки", "Тротуар", "Дорога"],
    },
    {
      id: 4,
      title: "Ночная езда",
      description: "Как безопасно кататься в темное время суток",
      duration: "9:20",
      thumbnail: "🌙",
      videoUrl: "#",
      difficulty: "hard",
      topics: ["Ночь", "Фонари", "Светоотражатели"],
    },
    {
      id: 5,
      title: "Поворот налево",
      description: "Учимся правильно поворачивать на перекрестках",
      duration: "6:55",
      thumbnail: "↩️",
      videoUrl: "#",
      difficulty: "medium",
      topics: ["Повороты", "Перекресток", "Сигналы"],
    },
    {
      id: 6,
      title: "Велосипед в дождь",
      description: "Особенности езды в плохую погоду",
      duration: "8:10",
      thumbnail: "🌧️",
      videoUrl: "#",
      difficulty: "hard",
      topics: ["Дождь", "Торможение", "Видимость"],
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "hard":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "Начальный";
      case "medium":
        return "Средний";
      case "hard":
        return "Продвинутый";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🎬 Мультики о велобезопасности
          </h1>
          <p className="text-xl text-gray-600">
            Изучай правила дорожного движения вместе с героями наших
            мультфильмов!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Видеоплеер */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-600 relative flex items-center justify-center">
                {selectedEpisode ? (
                  <div className="text-center text-white">
                    <div className="text-8xl mb-4">
                      {selectedEpisode.thumbnail}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      {selectedEpisode.title}
                    </h3>
                    <p className="text-blue-100 mb-4">
                      {selectedEpisode.description}
                    </p>
                    <Button
                      size="lg"
                      className="bg-white text-blue-600 hover:bg-blue-50"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      <Icon
                        name={isPlaying ? "Pause" : "Play"}
                        className="mr-2"
                        size={20}
                      />
                      {isPlaying ? "Пауза" : "Смотреть"}
                    </Button>
                  </div>
                ) : (
                  <div className="text-center text-white">
                    <div className="text-8xl mb-4">🎭</div>
                    <h3 className="text-2xl font-bold mb-2">Выберите серию</h3>
                    <p className="text-blue-100">
                      Кликните на любую серию слева, чтобы начать просмотр
                    </p>
                  </div>
                )}
              </div>

              {selectedEpisode && (
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">
                      {selectedEpisode.title}
                    </h2>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs text-white ${getDifficultyColor(selectedEpisode.difficulty)}`}
                      >
                        {getDifficultyText(selectedEpisode.difficulty)}
                      </span>
                      <span className="text-gray-500">
                        {selectedEpisode.duration}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">
                    {selectedEpisode.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {selectedEpisode.topics.map((topic, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          </div>

          {/* Список серий */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              📺 Все серии
            </h2>

            {episodes.map((episode) => (
              <Card
                key={episode.id}
                className={`cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${
                  selectedEpisode?.id === episode.id
                    ? "ring-2 ring-blue-500 shadow-lg"
                    : ""
                }`}
                onClick={() => setSelectedEpisode(episode)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-3xl">{episode.thumbnail}</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-800 truncate">
                        {episode.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {episode.description}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-gray-500">
                          {episode.duration}
                        </span>
                        <span
                          className={`px-2 py-1 rounded text-xs text-white ${getDifficultyColor(episode.difficulty)}`}
                        >
                          {getDifficultyText(episode.difficulty)}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Статистика просмотров */}
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          <Card className="text-center p-6">
            <div className="text-3xl mb-2">👀</div>
            <div className="text-2xl font-bold text-blue-600">12,543</div>
            <div className="text-gray-600">Просмотров</div>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-bold text-yellow-600">4.9</div>
            <div className="text-gray-600">Рейтинг</div>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-2xl font-bold text-green-600">89%</div>
            <div className="text-gray-600">Прошли тест</div>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-2xl font-bold text-purple-600">156</div>
            <div className="text-gray-600">Сертификатов</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Movies;
