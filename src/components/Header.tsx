import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-3xl">🚲</div>
            <h1 className="text-2xl font-bold text-blue-600">
              ВелоБезопасность
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Смотреть
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Учиться
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Играть
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Родителям
            </a>
          </nav>

          <Button className="md:hidden" variant="outline" size="sm">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
