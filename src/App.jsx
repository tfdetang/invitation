import React, { useState, useEffect } from 'react';
import { Camera, Calendar, MapPin, Gift, Music, Heart, Sparkles, Smile, Star, ArrowDown } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('cover');
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

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

  // 简单的页面切换动画效果
  useEffect(() => {
    if (activeTab === 'invite') {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [activeTab]);

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying);
  };

  return (
    <div className="min-h-screen bg-amber-50 font-sans text-amber-900 selection:bg-amber-200 overflow-x-hidden relative">

      {/* 音乐播放按钮 (模拟) */}
      <button
        onClick={toggleMusic}
        className={`fixed top-4 right-4 z-50 p-3 rounded-full shadow-lg transition-all duration-700 ${musicPlaying ? 'bg-amber-500 text-white rotate-180' : 'bg-white text-amber-500'}`}
      >
        <Music size={20} className={musicPlaying ? "animate-pulse" : ""} />
      </button>

      {/* 这是一个长页面结构，模拟手机端滑动的体验 */}
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl relative pb-20">

        {/* --- 第一部分：可爱谐音梗封面 --- */}
        <section className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-100 to-amber-50 p-6 text-center overflow-hidden">

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

            <button
              onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}
              className="animate-bounce mt-4 text-amber-400"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </section>

        {/* --- 第二部分：极简成长记录 (Magazine Style) --- */}
        <section id="gallery" className="py-16 px-6 bg-white">
          <div className="mb-12 border-b-2 border-black/5 pb-4">
            <h3 className="text-3xl font-black text-gray-800 tracking-tighter">成长升级！</h3>
            <div className="flex justify-between items-end mt-2">
              <span className="text-gray-400 text-sm font-mono">地球观察日志</span>
              <span className="text-4xl font-serif italic text-amber-600">100 <span className="text-base not-italic text-gray-400 font-sans">天</span></span>
            </div>
          </div>

          <div className="space-y-12">
            {milestones.map((item, index) => (
              <div key={index} className="flex gap-4 group">
                {/* 左侧时间轴 */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-xl shadow-inner group-hover:bg-amber-100 transition-colors">
                    {item.icon}
                  </div>
                  {index !== milestones.length - 1 && <div className="w-0.5 h-full bg-gray-100 my-2"></div>}
                </div>

                {/* 右侧内容卡片 */}
                <div className="flex-1 pb-8">
                  <div className="aspect-[4/3] bg-gray-100 rounded-xl mb-4 overflow-hidden relative shadow-sm hover:shadow-md transition-shadow">
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      /* 占位图标 */
                      <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                        <div className="text-center">
                          <Camera size={32} className="mx-auto mb-2 opacity-50" />
                          <span className="text-xs font-mono uppercase tracking-widest">Photo Day {item.day}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <h4 className="font-bold text-lg text-gray-800">{item.title}</h4>
                  <p className="text-gray-500 text-sm mt-1 font-mono">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 技能卡片 */}
          <div className="bg-amber-50 p-6 rounded-2xl mt-4 border border-amber-100">
            <h4 className="text-xs font-bold text-amber-800 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Star size={14} /> 当前状态
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                <div className="text-2xl mb-1">💤</div>
                <div className="text-xs text-gray-500 font-bold">睡眠力</div>
                <div className="w-full bg-gray-100 h-1.5 mt-2 rounded-full overflow-hidden">
                  <div className="bg-blue-400 h-full w-[80%]"></div>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                <div className="text-2xl mb-1">🥰</div>
                <div className="text-xs text-gray-500 font-bold">可爱值</div>
                <div className="w-full bg-gray-100 h-1.5 mt-2 rounded-full overflow-hidden">
                  <div className="bg-pink-400 h-full w-[100%] animate-pulse"></div>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                <div className="text-2xl mb-1">🍼</div>
                <div className="text-xs text-gray-500 font-bold">奶量</div>
                <div className="w-full bg-gray-100 h-1.5 mt-2 rounded-full overflow-hidden">
                  <div className="bg-orange-400 h-full w-[100%]"></div>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                <div className="text-2xl mb-1">💪</div>
                <div className="text-xs text-gray-500 font-bold">抬头</div>
                <div className="w-full bg-gray-100 h-1.5 mt-2 rounded-full overflow-hidden">
                  <div className="bg-green-400 h-full w-[70%]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 第三部分：邀请详情 (Action) --- */}
        <section className="bg-amber-900 text-amber-50 py-16 px-8 rounded-t-[3rem] -mt-10 relative z-10">
          <div className="text-center">
            <Gift size={40} className="mx-auto mb-6 text-amber-300 animate-bounce" />
            <h2 className="text-2xl font-bold mb-2">百日尝鲜大会</h2>
            <p className="text-amber-200/80 text-sm mb-8">来见证我这颗"大栗子"的里程碑时刻！</p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 text-left space-y-4 border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center text-amber-300">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-xs text-amber-300 uppercase">Time</p>
                  <p className="font-bold">2026年1月31日 (周六)</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center text-amber-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-amber-300 uppercase">Location</p>
                  <p className="font-bold">甜蜜温馨大酒店 · 宴会厅</p>
                </div>
              </div>
            </div>

            <p className="mt-8 text-xs text-amber-400/60 font-mono">
              RSVP by 2026.01.20
            </p>
          </div>
        </section>

        {/* 照片墙区域 */}
        <section className="py-16 px-6 bg-gradient-to-b from-white to-amber-50">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-amber-800 mb-2">👶 小栗子的成长相册</h3>
            <p className="text-sm text-amber-600">记录每一个珍贵的瞬间</p>
          </div>

          {!showGallery ? (
            <button
              onClick={() => setShowGallery(true)}
              className="mx-auto block px-8 py-4 bg-amber-500 text-white font-bold rounded-full shadow-lg transform hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <Camera size={20} />
              查看更多照片 ({galleryPhotos.length} 张)
            </button>
          ) : (
            <div>
              {/* Instagram 风格的照片流 */}
              <div className="columns-2 md:columns-3 gap-2 space-y-2">
                {galleryPhotos.map((photo, index) => (
                  <div 
                    key={photo} 
                    className="break-inside-avoid relative group overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <img
                      src={`/img/pics/${photo}`}
                      alt={`小栗子的照片 ${index + 1}`}
                      loading="lazy"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* 悬停遮罩 */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                ))}
              </div>
              
              {/* 收起按钮 */}
              <button
                onClick={() => setShowGallery(false)}
                className="mx-auto mt-8 block px-8 py-3 bg-amber-100 text-amber-800 font-bold rounded-full shadow-md hover:bg-amber-200 transition-colors"
              >
                收起照片
              </button>
            </div>
          )}
        </section>

        {/* 底部版权风格 */}
        <footer className="bg-amber-950 py-6 text-center text-amber-800/40 text-[10px] font-mono uppercase tracking-widest">
          Made with Love for Lizi
        </footer>

      </div>
    </div>
  );
}
