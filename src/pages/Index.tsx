import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const services = [
    {
      icon: "Settings",
      title: "Диагностика",
      description: "Компьютерная диагностика всех систем автомобиля с использованием современного оборудования"
    },
    {
      icon: "Wrench",
      title: "Ремонт двигателя",
      description: "Капитальный и текущий ремонт двигателей любой сложности"
    },
    {
      icon: "Car",
      title: "Ходовая часть",
      description: "Ремонт и замена элементов подвески, рулевого управления"
    },
    {
      icon: "Gauge",
      title: "ТО и сервис",
      description: "Регулярное техническое обслуживание, замена масла и расходников"
    },
    {
      icon: "Zap",
      title: "Электрика",
      description: "Диагностика и ремонт электрооборудования автомобиля"
    },
    {
      icon: "Wind",
      title: "Кондиционер",
      description: "Заправка, диагностика и ремонт климатических систем"
    }
  ];

  const advantages = [
    {
      icon: "Award",
      title: "Опытные мастера",
      description: "Наши специалисты имеют более 10 лет опыта работы"
    },
    {
      icon: "Clock",
      title: "Быстрое обслуживание",
      description: "Выполняем большинство работ за 1-2 дня"
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "Предоставляем гарантию на все виды работ"
    },
    {
      icon: "DollarSign",
      title: "Честные цены",
      description: "Прозрачное ценообразование без скрытых платежей"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Wrench" size={28} className="text-primary" />
            <span className="text-xl font-bold">АвтоСервис</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#advantages" className="hover:text-primary transition-colors">Преимущества</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="hidden md:block">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Профессиональный ремонт вашего автомобиля
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Качественное обслуживание и ремонт автомобилей любой сложности. 
                Современное оборудование, опытные мастера, гарантия на все работы.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg px-8">
                  Записаться на ремонт
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/44e816d4-b802-4b97-a04b-dbc69f446ec8/files/e58e9b3a-9df9-4e41-8cd3-23a61d61b4d5.jpg"
                alt="Автосервис"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по ремонту и обслуживанию автомобилей
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы гордимся нашим профессионализмом и индивидуальным подходом к каждому клиенту
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-xl hover:bg-muted/30 transition-colors"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://cdn.poehali.dev/projects/44e816d4-b802-4b97-a04b-dbc69f446ec8/files/0419ccab-116c-4225-a24e-7520daf95b5e.jpg"
                alt="Работа мастера"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">О нашем сервисе</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы работаем на рынке автомобильных услуг уже более 15 лет. За это время 
                мы помогли тысячам автовладельцев вернуть их автомобили в идеальное состояние.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Наш подход основан на честности, профессионализме и внимании к деталям. 
                Мы используем только качественные запчасти и современное диагностическое оборудование.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-sm text-muted-foreground">Клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">
                Оставьте заявку, и мы свяжемся с вами в ближайшее время
              </p>
            </div>
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input 
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea 
                      placeholder="Опишите вашу проблему или вопрос..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
                <div className="mt-8 pt-8 border-t grid md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-medium mb-1">Адрес</div>
                      <div className="text-sm text-muted-foreground">г. Москва, ул. Примерная, д. 123</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-medium mb-1">Телефон</div>
                      <div className="text-sm text-muted-foreground">+7 (999) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-medium mb-1">Режим работы</div>
                      <div className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 20:00</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Wrench" size={24} />
                <span className="text-lg font-bold">АвтоСервис</span>
              </div>
              <p className="text-sm opacity-80">
                Профессиональный ремонт и обслуживание автомобилей с 2009 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <div className="space-y-2 text-sm opacity-80">
                <div><a href="#services" className="hover:opacity-100 transition-opacity">Услуги</a></div>
                <div><a href="#advantages" className="hover:opacity-100 transition-opacity">Преимущества</a></div>
                <div><a href="#about" className="hover:opacity-100 transition-opacity">О нас</a></div>
                <div><a href="#contact" className="hover:opacity-100 transition-opacity">Контакты</a></div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm opacity-80">
                <div>+7 (999) 123-45-67</div>
                <div>info@autoservice.ru</div>
                <div>г. Москва, ул. Примерная, д. 123</div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm opacity-60">
            © 2024 АвтоСервис. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
