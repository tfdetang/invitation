import React, { useState, useEffect } from 'react';
import { Camera, Calendar, MapPin, Gift, Music, Heart, Sparkles, Smile, Star, ArrowDown } from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // 所有照片列表
  const galleryPhotos = [
    'IMG_9249.jpeg', 'IMG_9280.jpeg', 'IMG_9426.jpeg', 'IMG_9432.jpeg', 'IMG_9447.jpeg',
    'IMG_9454.jpeg', 'IMG_9487.jpeg', 'IMG_9598.jpeg', 'IMG_9612.jpeg', 'IMG_9615.jpeg',
    'IMG_9620.jpeg', 'IMG_9621.jpeg', 'IMG_9747.jpeg', 'IMG_9756.jpeg', 'IMG_9758.jpeg',
    'IMG_9760.jpeg', 'IMG_9762.jpeg', 'IMG_9765.jpeg', 'IMG_9767.jpeg', 'IMG_9775.jpeg',
    'IMG_9790.jpeg', 'IMG_9842.jpeg', 'IMG_9849.jpeg', 'IMG_9860.jpeg', 'IMG_9861.jpeg',
    'IMG_9865.jpeg', 'IMG_9866.jpeg', 'IMG_9871.jpeg', 'IMG_9904.jpeg', 'IMG_9905.jpeg',
    'IMG_9906.jpeg', 'IMG_9907.jpeg', 'P1143558.jpeg', 'P1143559.jpeg', 'P1143561.jpeg',
    'P1143563.jpeg', 'P1143567.jpeg', 'P1143580.jpeg', 'P1143834.jpeg', 'P1143835.jpeg',
    'P1143836.jpeg', 'P1143861.JPG', 'P1143869.JPG', 'P1143880.JPG', 'P1143895.JPG',
    'P1143897.JPG', 'P1143953.JPG', 'P1143960.JPG', 'P1143961.JPG', 'P1143962.JPG',
    'P1143968.JPG', 'P1143991.JPG', 'P1143994.JPG', 'P1143998.JPG', 'P1144001.JPG',
    'P1144004.JPG', 'P1144006.JPG', 'P1144012.JPG', 'P1144139.JPG', 'P1144140.JPG',
    'P1144145.JPG', 'P1144159.JPG', 'P1144161.JPG', 'P1144166.JPG', 'P1144169.JPG',
    'P1144172.JPG', 'P1144175.JPG', 'P1144182.JPG', 'P1144183.JPG', 'P1144188.JPG',
    'P1144189.JPG', 'P1144192.JPG', 'P1144195.JPG', 'P1144196.JPG', 'P1144203.JPG',
    'P1144205.JPG', 'P1144206.JPG', 'P1144207.JPG', 'P1144210.JPG', 'P1155097.JPG',
    'P1155109.JPG', 'P1155134.JPG', 'P1155156.JPG', '抗头.jpeg'
  ];

  // 模拟各个阶段的成长数据
  const milestones = [
    { day: 1, title: "初次见面", desc: "你好，地球！", icon: "🌱", image: "/img/出生.jpeg" },
    { day: 50, title: "正在发芽", desc: "解锁技能：挥舞小拳头", icon: "🍼", image: "/img/挥舞拳头.jpeg" },
    { day: 100, title: "熟透啦！", desc: "解锁技能：吃手手 & 迷人微笑", icon: "🌰", image: "/img/吃小手.jpeg" }
  ];

  const totalSlides = 1 + milestones.length + 1; // 封面 + 3张照片 + 邀请函

  // 处理滚轮和触摸滑动
  useEffect(() => {
    let touchStart = 0;
    let touchEnd = 0;

    const handleWheel = (e) => {
      if (isScrolling) return;
      
      e.preventDefault();
      setIsScrolling(true);

      if (e.deltaY > 0 && currentSlide < totalSlides - 1) {
        // 向下滚动
        setCurrentSlide(prev => prev + 1);
      } else if (e.deltaY < 0 && currentSlide > 0) {
        // 向上滚动
        setCurrentSlide(prev => prev - 1);
      }

      setTimeout(() => setIsScrolling(false), 800);
    };

    const handleTouchStart = (e) => {
      touchStart = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      touchEnd = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      if (isScrolling) return;
      
      const distance = touchStart - touchEnd;
      if (Math.abs(distance) > 50) {
        setIsScrolling(true);
        
        if (distance > 0 && currentSlide < totalSlides - 1) {
          setCurrentSlide(prev => prev + 1);
        } else if (distance < 0 && currentSlide > 0) {
          setCurrentSlide(prev => prev - 1);
        }

        setTimeout(() => setIsScrolling(false), 800);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSlide, isScrolling, totalSlides]);

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying);
  };

  return (
    <div className="min-h-screen bg-amber-50 font-sans text-amber-900 selection:bg-amber-200 overflow-hidden relative">

      {/* 音乐播放按钮 */}
      <button
        onClick={toggleMusic}
        className={`fixed top-4 right-4 z-50 p-3 rounded-full shadow-lg transition-all duration-700 ${musicPlaying ? 'bg-amber-500 text-white rotate-180' : 'bg-white text-amber-500'}`}
      >
        <Music size={20} className={musicPlaying ? "animate-pulse" : ""} />
      </button>

      {/* 进度指示器 */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2">
        {[...Array(totalSlides)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentSlide ? 'bg-amber-600 h-8' : 'bg-amber-300'
            }`}
          />
        ))}
      </div>

      <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl relative">

        {/* 封面 - 固定背景 */}
        <section className={`fixed inset-0 max-w-md mx-auto flex flex-col items-center justify-center bg-gradient-to-b from-orange-100 to-amber-50 p-6 text-center transition-opacity duration-500 ${
          currentSlide > 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}>

          {/* 装饰背景圆 */}
          <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

          {/* 飘落的栗子 */}
          <div className="absolute top-0 left-[8%] text-2xl animate-fall-rotate" style={{ animationDelay: '0s' }}>🌰</div>
          <div className="absolute top-0 left-[25%] text-xl animate-fall-rotate" style={{ animationDelay: '3s', animationDuration: '15s' }}>🌰</div>
          <div className="absolute top-0 left-[45%] text-3xl animate-fall-rotate" style={{ animationDelay: '6s', animationDuration: '14s' }}>🌰</div>
          <div className="absolute top-0 left-[65%] text-2xl animate-fall-rotate" style={{ animationDelay: '9s', animationDuration: '16s' }}>🌰</div>
          <div className="absolute top-0 right-[15%] text-xl animate-fall-rotate" style={{ animationDelay: '2s', animationDuration: '13s' }}>🌰</div>
          <div className="absolute top-0 right-[35%] text-2xl animate-fall-rotate" style={{ animationDelay: '8s', animationDuration: '17s' }}>🌰</div>
          <div className="absolute top-0 left-[15%] text-xl animate-fall-rotate" style={{ animationDelay: '5s', animationDuration: '18s' }}>🌰</div>
          <div className="absolute top-0 right-[50%] text-2xl animate-fall-rotate" style={{ animationDelay: '11s', animationDuration: '15s' }}>🌰</div>

          {/* 上浮的泡泡 */}
          <div className="absolute bottom-0 left-[15%] w-12 h-12 bg-orange-300/20 rounded-full animate-float-up" style={{ animationDelay: '0s' }}></div>
          <div className="absolute bottom-0 left-[45%] w-8 h-8 bg-yellow-300/20 rounded-full animate-float-up" style={{ animationDelay: '4s', animationDuration: '18s' }}></div>
          <div className="absolute bottom-0 right-[25%] w-10 h-10 bg-orange-300/20 rounded-full animate-float-up" style={{ animationDelay: '2s', animationDuration: '16s' }}></div>
          <div className="absolute bottom-0 right-[60%] w-14 h-14 bg-yellow-300/15 rounded-full animate-float-up" style={{ animationDelay: '6s', animationDuration: '20s' }}></div>

          <div className="z-10 animate-fade-in-up w-full">
            <div className="inline-block px-4 py-1 bg-amber-200 rounded-full text-amber-800 text-sm font-bold mb-6 tracking-widest shadow-sm">
              唐浚川 · Lizi
            </div>

            <h1 className="text-4xl font-black text-amber-800 mb-2 tracking-tight">
              举个<span className="text-orange-600 inline-block transform hover:scale-110 transition-transform">"栗"</span>子
            </h1>
            <h2 className="text-2xl font-bold text-amber-700 mb-8">
              我长大啦！
            </h2>

            {/* 核心视觉：用户上传的栗子形象 */}
            {/* ★ 重要：请将下方的 src 替换为您上传的图片地址 
                例如：src="my-chestnut-image.jpg" 
            */}
            <div className="relative w-64 h-64 mx-auto mb-8 group cursor-pointer flex items-center justify-center" onClick={() => setActiveTab('details')}>

              {/* 图片容器：带有浮动动画和阴影 */}
              <div className="relative z-10 w-full h-full transform transition-transform duration-500 hover:-translate-y-2 hover:scale-105 flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src="/img/栗子.png"
                    alt="可爱的栗子宝宝"
                    className="w-full h-full object-contain drop-shadow-2xl animate-float relative z-10"
                  />
                  {/* 栗子的脚下阴影 */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 h-6 bg-black/15 rounded-full blur-md"></div>
                </div>
                {/* 萝卜装饰 - 放在脚边 */}
                <div className="absolute bottom-0 right-0 z-20">
                  <img
                    src="/img/萝卜.png"
                    alt="胡萝卜"
                    className="w-16 h-16 object-contain animate-bounce"
                    style={{ animationDuration: '2s' }}
                  />
                  {/* 萝卜的脚下阴影 */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-3 bg-black/15 rounded-full blur-sm"></div>
                </div>
              </div>

              {/* 装饰性光晕 - 让图片看起来更突出 */}
              <div className="absolute inset-0 bg-orange-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
              {/* 多层扩散光圈 */}
              <div className="absolute inset-0 bg-orange-400 rounded-full filter blur-2xl opacity-30 animate-ripple"></div>
              <div className="absolute inset-0 bg-yellow-400 rounded-full filter blur-2xl opacity-20 animate-ripple" style={{ animationDelay: '1s' }}></div>
              <div className="absolute inset-0 bg-orange-300 rounded-full filter blur-xl opacity-25 animate-ripple" style={{ animationDelay: '2s' }}></div>

              {/* 气泡 */}
              <div className="absolute -top-4 -right-2 z-20 bg-white px-3 py-1 rounded-lg rounded-bl-none shadow-md transform rotate-12 animate-bounce">
                <span className="text-xs font-bold text-orange-500">熟了！</span>
              </div>
            </div>

            <p className="text-amber-700/80 leading-relaxed mb-8 text-sm">
              在爸爸妈妈的精心"翻炒"下<br />
              这颗小栗子已经"香甜软糯"<br />
              <span className="font-bold text-amber-900">100天啦！</span>
            </p>

            <div className="animate-bounce mt-4 text-amber-400">
              <ArrowDown size={32} />
            </div>
          </div>
        </section>

        {/* 拍立得照片卡片层 */}
        {milestones.map((item, index) => (
          <div
            key={index}
            className={`fixed inset-x-0 max-w-md mx-auto transition-all duration-800 ease-out ${
              currentSlide > index ? 
                `z-${10 + index} translate-y-0` : 
                `z-${10 + index} translate-y-full`
            }`}
            style={{
              transitionDelay: currentSlide > index ? `${index * 100}ms` : '0ms'
            }}
          >
            <div className="min-h-screen flex items-center justify-center p-6 bg-white/95 backdrop-blur-sm">
              <div className="w-full max-w-sm">
                {/* 拍立得样式卡片 */}
                <div className="bg-white rounded-lg shadow-2xl p-4 transform hover:scale-105 transition-transform">
                  {/* 照片区域 */}
                  <div className="aspect-square bg-gray-100 rounded overflow-hidden mb-4 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* 文字区域 - 拍立得白边 */}
                  <div className="p-4 bg-white">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-2xl">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-gray-400">Day {item.day}</div>
                        <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm font-mono">{item.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* 邀请详情卡片 */}
        <div
          className={`fixed inset-x-0 max-w-md mx-auto transition-all duration-800 ease-out ${
            currentSlide === totalSlides - 1 ? 
              'z-30 translate-y-0' : 
              'z-30 translate-y-full'
          }`}
        >
          <div className="min-h-screen bg-gradient-to-b from-amber-900 to-amber-950 text-amber-50 flex items-center justify-center p-8">
            <div className="text-center w-full">
              <Gift size={40} className="mx-auto mb-6 text-amber-300" />
              
              <h2 className="text-3xl font-black mb-4">诚邀您的光临</h2>
              <p className="text-amber-200 mb-8 leading-relaxed">
                我们诚挚地邀请您<br />
                一起见证小栗子成长的美好时刻
              </p>

              <div className="space-y-6 max-w-sm mx-auto">
                <div className="flex items-start gap-4 bg-amber-800/50 p-4 rounded-xl">
                  <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-amber-300 uppercase">Time</p>
                    <p className="font-bold">2026年1月18日 12:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-amber-800/50 p-4 rounded-xl">
                  <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-amber-300 uppercase">Location</p>
                    <p className="font-bold">常发广场同庆楼 · 黄山B厅</p>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-xs text-amber-400/60 font-mono">
                RSVP by 2026.01.20
              </p>

              {/* 查看更多照片按钮 */}
              {!showGallery && (
                <button
                  onClick={() => setShowGallery(true)}
                  className="mt-8 px-8 py-4 bg-amber-100 text-amber-900 font-bold rounded-full shadow-lg transform hover:scale-105 active:scale-95 transition-all flex items-center gap-2 mx-auto"
                >
                  <Camera size={20} />
                  查看更多照片
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 照片墙弹出层 (固定在最顶层) */}
        {showGallery && (
          <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
            <div className="py-16 px-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-black text-amber-800 mb-2">👶 小栗子的成长相册</h3>
                <p className="text-sm text-amber-600">记录每一个珍贵的瞬间</p>
              </div>

              {/* Instagram 风格的照片流 - 使用 Grid 布局 */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {galleryPhotos.map((photo, index) => (
                  <div 
                    key={photo} 
                    className="relative group overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow aspect-square"
                  >
                    <img
                      src={`/img/pics/${photo}`}
                      alt={`小栗子的照片 ${index + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* 悬停遮罩 */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                ))}
              </div>
              
              {/* 收起按钮 */}
              <button
                onClick={() => setShowGallery(false)}
                className="mx-auto mt-8 block px-8 py-3 bg-amber-500 text-white font-bold rounded-full shadow-md hover:bg-amber-600 transition-colors"
              >
                关闭相册
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
