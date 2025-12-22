import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState<'home' | 'lessons' | 'practice'>('home');
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateImage = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedImage('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800');
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary glow-effect flex items-center justify-center">
              <Icon name="Sparkles" size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-heading font-bold gradient-text">AI PhotoCourse</h1>
          </div>
          
          <div className="flex gap-2">
            <Button
              variant={activeSection === 'home' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('home')}
              className="font-medium"
            >
              <Icon name="Home" size={18} className="mr-2" />
              Главная
            </Button>
            <Button
              variant={activeSection === 'lessons' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('lessons')}
              className="font-medium"
            >
              <Icon name="BookOpen" size={18} className="mr-2" />
              Уроки
            </Button>
            <Button
              variant={activeSection === 'practice' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('practice')}
              className="font-medium"
            >
              <Icon name="Wand2" size={18} className="mr-2" />
              Практика
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12">
        {activeSection === 'home' && (
          <div className="container mx-auto px-6 space-y-20">
            <section className="text-center space-y-6 py-20 animate-fade-in">
              <div className="inline-block">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-3xl opacity-30 animate-pulse-glow"></div>
                  <h2 className="relative text-6xl md:text-8xl font-heading font-extrabold gradient-text">
                    Фотосессия с AI
                  </h2>
                </div>
              </div>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Освойте искусство создания профессиональных фотосессий с помощью нейросетей
              </p>
              
              <div className="flex gap-4 justify-center pt-6">
                <Button 
                  size="lg" 
                  className="glow-effect text-lg font-semibold"
                  onClick={() => setActiveSection('lessons')}
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Начать обучение
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg font-semibold border-primary/50 hover:glow-effect"
                  onClick={() => setActiveSection('practice')}
                >
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  AI Генератор
                </Button>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: 'Brain',
                  title: 'AI-Технологии',
                  description: 'Используйте мощь нейросетей для создания уникальных концептов'
                },
                {
                  icon: 'Zap',
                  title: 'Быстрое обучение',
                  description: 'Практические уроки с мгновенной генерацией примеров'
                },
                {
                  icon: 'Award',
                  title: 'Профессиональный подход',
                  description: 'От новичка до профи за несколько недель'
                }
              ].map((feature, idx) => (
                <Card 
                  key={idx} 
                  className="p-8 bg-card/50 backdrop-blur border-border/50 hover:glow-effect transition-all duration-300 animate-fade-in group hover:scale-105"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary glow-effect-blue flex items-center justify-center mb-6 group-hover:animate-float">
                    <Icon name={feature.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </section>
          </div>
        )}

        {activeSection === 'lessons' && (
          <div className="container mx-auto px-6 space-y-8 animate-fade-in">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-5xl font-heading font-bold gradient-text">Курсы обучения</h2>
              <p className="text-xl text-muted-foreground">Выберите направление и начните учиться</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Основы работы с AI',
                  level: 'Начальный',
                  duration: '2 часа',
                  lessons: 8,
                  icon: 'GraduationCap',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  title: 'Создание концептов',
                  level: 'Средний',
                  duration: '3 часа',
                  lessons: 12,
                  icon: 'Lightbulb',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  title: 'Профессиональная обработка',
                  level: 'Продвинутый',
                  duration: '4 часа',
                  lessons: 15,
                  icon: 'Palette',
                  color: 'from-orange-500 to-red-500'
                },
                {
                  title: 'Стилизация и фильтры',
                  level: 'Средний',
                  duration: '2.5 часа',
                  lessons: 10,
                  icon: 'Sparkles',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  title: 'Портретная съемка AI',
                  level: 'Продвинутый',
                  duration: '3.5 часа',
                  lessons: 14,
                  icon: 'User',
                  color: 'from-violet-500 to-purple-500'
                },
                {
                  title: 'Коммерческая фотография',
                  level: 'Профессионал',
                  duration: '5 часов',
                  lessons: 20,
                  icon: 'Briefcase',
                  color: 'from-yellow-500 to-orange-500'
                }
              ].map((course, idx) => (
                <Card 
                  key={idx}
                  className="overflow-hidden bg-card/50 backdrop-blur border-border/50 hover:glow-effect transition-all duration-300 group hover:scale-105 cursor-pointer"
                >
                  <div className={`h-40 bg-gradient-to-br ${course.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon name={course.icon as any} size={64} className="text-white opacity-80 group-hover:animate-float" />
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-heading font-bold mb-2">{course.title}</h3>
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                        {course.level}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={16} />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="BookOpen" size={16} />
                        <span>{course.lessons} уроков</span>
                      </div>
                    </div>
                    <Button className="w-full glow-effect">
                      <Icon name="Play" size={16} className="mr-2" />
                      Начать курс
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'practice' && (
          <div className="container mx-auto px-6 max-w-6xl space-y-8 animate-fade-in">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-5xl font-heading font-bold gradient-text">AI Генератор изображений</h2>
              <p className="text-xl text-muted-foreground">Создавайте уникальные фотосессии с помощью нейросети</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-8 bg-card/50 backdrop-blur border-border/50 space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Опишите желаемую фотосессию</label>
                    <Textarea
                      placeholder="Например: Профессиональная портретная фотосессия в студии с мягким освещением, модель в деловом костюме на белом фоне"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      className="min-h-[200px] bg-input border-border/50 resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Стиль</label>
                      <select className="w-full p-2 rounded-lg bg-input border border-border/50">
                        <option>Реалистичный</option>
                        <option>Художественный</option>
                        <option>Киношный</option>
                        <option>Модный</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Освещение</label>
                      <select className="w-full p-2 rounded-lg bg-input border border-border/50">
                        <option>Студийное</option>
                        <option>Естественное</option>
                        <option>Драматическое</option>
                        <option>Мягкое</option>
                      </select>
                    </div>
                  </div>

                  <Button 
                    className="w-full glow-effect text-lg font-semibold"
                    size="lg"
                    onClick={handleGenerateImage}
                    disabled={isGenerating || !prompt.trim()}
                  >
                    {isGenerating ? (
                      <>
                        <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                        Генерация...
                      </>
                    ) : (
                      <>
                        <Icon name="Wand2" size={20} className="mr-2" />
                        Сгенерировать
                      </>
                    )}
                  </Button>
                </div>

                <div className="space-y-3 pt-4 border-t border-border/50">
                  <h4 className="font-heading font-semibold">Быстрые примеры:</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Портрет в студии',
                      'Уличная фотосессия',
                      'Fashion съемка',
                      'Природа на фоне'
                    ].map((example) => (
                      <Button
                        key={example}
                        variant="outline"
                        size="sm"
                        onClick={() => setPrompt(example)}
                        className="border-primary/30 hover:glow-effect"
                      >
                        {example}
                      </Button>
                    ))}
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
                <div className="space-y-4">
                  <h3 className="text-xl font-heading font-bold">Результат генерации</h3>
                  
                  {generatedImage ? (
                    <div className="space-y-4">
                      <div className="relative rounded-2xl overflow-hidden glow-effect group">
                        <img 
                          src={generatedImage} 
                          alt="Generated" 
                          className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                            <Button size="sm" className="flex-1">
                              <Icon name="Download" size={16} className="mr-2" />
                              Скачать
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1">
                              <Icon name="Share2" size={16} className="mr-2" />
                              Поделиться
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <Button variant="outline" size="sm" className="border-secondary/50 hover:glow-effect-blue">
                          <Icon name="RefreshCw" size={16} className="mr-2" />
                          Еще вариант
                        </Button>
                        <Button variant="outline" size="sm" className="border-secondary/50 hover:glow-effect-blue">
                          <Icon name="Settings" size={16} className="mr-2" />
                          Настройки
                        </Button>
                        <Button variant="outline" size="sm" className="border-secondary/50 hover:glow-effect-blue">
                          <Icon name="Heart" size={16} className="mr-2" />
                          Сохранить
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="h-[400px] rounded-2xl border-2 border-dashed border-border/50 flex flex-col items-center justify-center text-center p-8 space-y-4">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center animate-pulse-glow">
                        <Icon name="Image" size={40} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-lg mb-2">Готовы к созданию?</h4>
                        <p className="text-sm text-muted-foreground">
                          Опишите желаемую фотосессию слева<br />и нажмите "Сгенерировать"
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </div>

            <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
              <h3 className="text-2xl font-heading font-bold mb-6 gradient-text">Примеры работ нейросети</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400',
                  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400',
                  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400',
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400'
                ].map((img, idx) => (
                  <div 
                    key={idx}
                    className="relative rounded-xl overflow-hidden aspect-square group cursor-pointer hover:glow-effect transition-all duration-300 hover:scale-105"
                  >
                    <img 
                      src={img} 
                      alt={`Example ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <Button size="sm" variant="secondary" className="w-full">
                        <Icon name="Wand2" size={14} className="mr-2" />
                        Использовать стиль
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}
      </main>

      <footer className="border-t border-border/50 backdrop-blur-lg bg-background/80 py-8 mt-20">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p className="text-sm">© 2024 AI PhotoCourse. Создано с помощью нейросетей</p>
        </div>
      </footer>
    </div>
  );
}
