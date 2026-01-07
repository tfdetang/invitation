import React, { useState, useEffect } from 'react';
import { Camera, Calendar, MapPin, Gift, Music, Heart, Sparkles, Smile, Star, ArrowDown } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('cover');
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // 模拟各个阶段的成长数据
  const milestones = [
    { day: 1, title: "初次见面", desc: "你好，地球！", icon: "🌱" },
    { day: 50, title: "正在发芽", desc: "解锁技能：吃手手", icon: "🍼" },
    { day: 100, title: "熟透啦！", desc: "解锁技能：翻身 & 迷人微笑", icon: "🌰" }
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
              <div className="relative z-10 w-full h-full transform transition-transform duration-500 hover:-translate-y-2 hover:scale-105">
                 <img 
                  src="/img/栗子.png" 
                  alt="可爱的栗子宝宝" 
                  className="w-full h-full object-contain drop-shadow-2xl animate-float"
                />
              </div>

              {/* 装饰性光晕 - 让图片看起来更突出 */}
              <div className="absolute inset-0 bg-orange-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
              
              {/* 气泡 */}
              <div className="absolute -top-4 -right-2 z-20 bg-white px-3 py-1 rounded-lg rounded-bl-none shadow-md transform rotate-12 animate-bounce">
                <span className="text-xs font-bold text-orange-500">熟了！</span>
              </div>
            </div>

            <p className="text-amber-700/80 leading-relaxed mb-8 text-sm">
              在爸爸妈妈的精心"翻炒"下<br/>
              这颗小栗子已经"香甜软糯"<br/>
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
            <h3 className="text-3xl font-black text-gray-800 tracking-tighter">LEVEL UP!</h3>
            <div className="flex justify-between items-end mt-2">
              <span className="text-gray-400 text-sm font-mono">EARTH OBSERVATION LOG</span>
              <span className="text-4xl font-serif italic text-amber-600">100 <span className="text-base not-italic text-gray-400 font-sans">DAYS</span></span>
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
                    {/* 这里通常放照片，现在用文字/图标占位 */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                      <div className="text-center">
                        <Camera size={32} className="mx-auto mb-2 opacity-50" />
                        <span className="text-xs font-mono uppercase tracking-widest">Photo Day {item.day}</span>
                      </div>
                    </div>
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
              <Star size={14} /> Current Stats
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

            <button 
              onClick={() => alert("🎉 期待您的光临！(这里是演示按钮)")}
              className="w-full py-4 bg-amber-100 text-amber-900 font-bold rounded-xl shadow-lg transform active:scale-95 transition-all flex items-center justify-center gap-2 hover:bg-white"
            >
              <Heart size={20} className="text-red-500 fill-current" />
              我要去"吃栗子"
            </button>
            
            <p className="mt-8 text-xs text-amber-400/60 font-mono">
              RSVP by 2026.01.20
            </p>
          </div>
        </section>
        
        {/* 底部版权风格 */}
        <footer className="bg-amber-950 py-6 text-center text-amber-800/40 text-[10px] font-mono uppercase tracking-widest">
          Made with Love for Lizi
        </footer>

      </div>

      {/* 简单的CSS动画定义 */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes blink {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.1); }
        }
        .animate-blink {
          animation: blink 3s infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 40px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
