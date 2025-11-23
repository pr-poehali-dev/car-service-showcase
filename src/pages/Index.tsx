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
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <nav className="container mx-auto px-4 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <Icon name="Wrench" size={24} className="text-primary" />
            </div>
            <span className="text-2xl font-bold tracking-tight">АвтоСервис</span>
          </div>
          <div className="hidden md:flex gap-10">
            <a href="#services" className="text-sm uppercase tracking-wider hover:text-primary transition-colors">Услуги</a>
            <a href="#advantages" className="text-sm uppercase tracking-wider hover:text-primary transition-colors">Преимущества</a>
            <a href="#about" className="text-sm uppercase tracking-wider hover:text-primary transition-colors">О нас</a>
            <a href="#contact" className="text-sm uppercase tracking-wider hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="hidden md:flex bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </nav>
      </header>

      <section className="relative pt-32 pb-32 px-4 min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-10"></div>
          <img 
            src="https://cdn.poehali.dev/projects/44e816d4-b802-4b97-a04b-dbc69f446ec8/files/8e553148-9d46-4579-81b8-56cdde3cbef7.jpg"
            alt="Автосервис"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto relative z-20">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Премиум автосервис</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-none">
              Профессиональный<br />
              <span className="text-primary">ремонт</span> автомобилей
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
              Качественное обслуживание и ремонт автомобилей любой сложности. 
              Современное оборудование, опытные мастера, гарантия на все работы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-10 py-7 bg-primary hover:bg-primary/90 group">
                Записаться на ремонт
                <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-border hover:bg-muted">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-32 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="mb-20">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Наши услуги</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Полный спектр услуг</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Профессиональный ремонт и обслуживание автомобилей любой марки
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-32 border-t border-border bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Преимущества</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы гордимся нашим профессионализмом и индивидуальным подходом к каждому клиенту
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="text-center p-8 rounded-2xl hover:bg-card/50 border border-transparent hover:border-border transition-all group"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon name={advantage.icon} size={36} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-32 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
              <img 
                src="https://cdn.poehali.dev/projects/44e816d4-b802-4b97-a04b-dbc69f446ec8/files/0419ccab-116c-4225-a24e-7520daf95b5e.jpg"
                alt="Работа мастера"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">О нас</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8">Наш подход к работе</h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Мы работаем на рынке автомобильных услуг уже более 15 лет. За это время 
                мы помогли тысячам автовладельцев вернуть их автомобили в идеальное состояние.
              </p>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Наш подход основан на честности, профессионализме и внимании к деталям. 
                Мы используем только качественные запчасти и современное диагностическое оборудование.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div className="border-l-2 border-primary pl-6">
                  <div className="text-5xl font-bold text-primary mb-3">15+</div>
                  <div className="text-muted-foreground uppercase text-sm tracking-wider">Лет опыта</div>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <div className="text-5xl font-bold text-primary mb-3">5000+</div>
                  <div className="text-muted-foreground uppercase text-sm tracking-wider">Клиентов</div>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <div className="text-5xl font-bold text-primary mb-3">98%</div>
                  <div className="text-muted-foreground uppercase text-sm tracking-wider">Довольных</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 border-t border-border bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Контакты</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">
                Оставьте заявку, и мы свяжемся с вами в ближайшее время
              </p>
            </div>
            <Card className="bg-card border-border">
              <CardContent className="p-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label className="block text-sm font-medium mb-3 uppercase tracking-wider">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-background border-border text-lg py-6"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-3 uppercase tracking-wider">Телефон</label>
                    <Input 
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-background border-border text-lg py-6"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-3 uppercase tracking-wider">Сообщение</label>
                    <Textarea 
                      placeholder="Опишите вашу проблему или вопрос..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-background border-border text-lg"
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full py-7 text-lg bg-primary hover:bg-primary/90 group">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                    <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
                <div className="mt-12 pt-12 border-t border-border grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-bold mb-2 uppercase text-sm tracking-wider">Адрес</div>
                      <div className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-bold mb-2 uppercase text-sm tracking-wider">Телефон</div>
                      <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-bold mb-2 uppercase text-sm tracking-wider">Режим работы</div>
                      <div className="text-muted-foreground">Пн-Пт: 9:00 - 20:00</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Icon name="Wrench" size={24} className="text-primary" />
                </div>
                <span className="text-2xl font-bold tracking-tight">АвтоСервис</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Профессиональный ремонт и обслуживание автомобилей с 2009 года
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Навигация</h4>
              <div className="space-y-3 text-muted-foreground">
                <div><a href="#services" className="hover:text-primary transition-colors">Услуги</a></div>
                <div><a href="#advantages" className="hover:text-primary transition-colors">Преимущества</a></div>
                <div><a href="#about" className="hover:text-primary transition-colors">О нас</a></div>
                <div><a href="#contact" className="hover:text-primary transition-colors">Контакты</a></div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Контакты</h4>
              <div className="space-y-3 text-muted-foreground">
                <div>+7 (999) 123-45-67</div>
                <div>info@autoservice.ru</div>
                <div>г. Москва, ул. Примерная, д. 123</div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 АвтоСервис. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
