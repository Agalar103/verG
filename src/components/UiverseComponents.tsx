import React from 'react';

export const ProCard = () => (
  <div className="u-pro-card">
    <div className="card">
      <span className="title">Pro
        <p className="pricing">$8 <span className="pricing-time">/ month</span></p>
        <span className="sub-title">Everything on Basic plus:
          <ul className="list">
            <li className="list-item"><span className="check">✓</span> Feature</li>
            <li className="list-item"><span className="check">✓</span> Feature</li>
            <li className="list-item"><span className="check">✓</span> Feature</li>
            <li className="list-item"><span className="check">✓</span> Feature</li>
            <li className="list-item"><span className="check">✓</span> Feature</li>
          </ul>
          <button className="button">
            <span className="text-button">Get pro now</span>
          </button>
        </span>
      </span>
    </div>
  </div>
);

export const StarBanner = () => (
  <div className="u-star-banner">
    <div className="card">
      <h2>WORLD</h2>
    </div>
  </div>
);

export const CarAnimation = () => (
  <div className="u-car-anim">
    <div className="container">
      <div className="car"></div>
    </div>
  </div>
);

export const MasterCard = () => (
  <div className="u-mastercard">
    <div className="card">
      <div className="logo">
        <div className="circle red"></div>
        <div className="circle yellow"></div>
      </div>
      <div className="mt-12">
        <p className="text-xs opacity-50 uppercase tracking-widest">Card Holder</p>
        <p className="font-bold tracking-widest">JOHNNY SILVERHAND</p>
      </div>
      <div className="mt-4 flex justify-between items-end">
        <p className="font-mono text-lg tracking-widest">**** **** **** 2077</p>
        <p className="text-xs font-mono">12/77</p>
      </div>
    </div>
  </div>
);

export const HoodieCard = () => (
  <div className="u-hoodie-card">
    <div className="card">
      <div className="text-4xl">👕</div>
      <p className="mt-4 font-bold">CYBER HOODIE</p>
      <p className="text-xs text-zinc-500">$49.99</p>
    </div>
  </div>
);

export const AstronautCard = () => (
  <div className="u-astro-card">
    <div className="card flex flex-col items-center justify-center p-6 text-center">
      <div className="text-6xl mb-4">👨‍🚀</div>
      <h3 className="text-xl font-bold text-white">ASTRO_PUNK</h3>
      <p className="text-xs text-zinc-500 mt-2">Exploring the digital void.</p>
      <div className="flex gap-4 mt-6">
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-punk-pink transition-colors cursor-pointer">X</div>
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-punk-blue transition-colors cursor-pointer">IG</div>
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-punk-green transition-colors cursor-pointer">GH</div>
      </div>
    </div>
  </div>
);

export const TruckAnimation = () => (
  <div className="u-truck-anim">
    <div className="truck"></div>
  </div>
);

export const PhoneCard1 = () => (
  <div className="u-phone-card-1">
    <div className="phone flex flex-col items-center p-4">
      <div className="w-16 h-1 bg-white/20 rounded-full mb-8"></div>
      <div className="w-full h-full bg-zinc-900 rounded-2xl border border-white/5 flex items-center justify-center">
        <p className="text-punk-pink font-black italic">OS_v1.0</p>
      </div>
    </div>
  </div>
);

export const PhoneCard2 = () => (
  <div className="u-phone-card-2">
    <div className="phone p-6">
      <div className="w-full h-full bg-gradient-to-b from-zinc-800 to-black rounded-[32px] border border-white/10 flex flex-col items-center justify-center gap-4">
        <div className="w-12 h-12 rounded-full bg-punk-blue/20 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-punk-blue shadow-[0_0_10px_#00ffff]"></div>
        </div>
        <p className="text-[10px] font-black tracking-[0.4em] text-zinc-500">SECURE_LINK</p>
      </div>
    </div>
  </div>
);

export const SocialSquircle = () => (
  <div className="u-social-squircle">
    <svg width="0" height="0">
      <defs>
        <clipPath id="squircle" clipPathUnits="objectBoundingBox">
          <path d="M .5,0 C .1,0 0,.1 0,.5 0,.9 .1,1 .5,1 .9,1 1,.9 1,.5 1,.1 .9,0 .5,0 Z" />
        </clipPath>
      </defs>
    </svg>
    <div className="flex gap-4">
      <div className="icon flex items-center justify-center text-white hover:bg-punk-pink transition-colors cursor-pointer">FB</div>
      <div className="icon flex items-center justify-center text-white hover:bg-punk-blue transition-colors cursor-pointer">TW</div>
      <div className="icon flex items-center justify-center text-white hover:bg-punk-green transition-colors cursor-pointer">LI</div>
    </div>
  </div>
);

export const TransactionCard = () => (
  <div className="u-transaction-card">
    <div className="card space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-xs text-zinc-500 font-bold uppercase">Recent Transaction</p>
        <span className="text-[10px] bg-punk-green/20 text-punk-green px-2 py-0.5 rounded">Success</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">🛒</div>
        <div className="flex-1">
          <p className="text-sm font-bold">Cyber Deck Pro</p>
          <p className="text-[10px] text-zinc-500">March 12, 2077</p>
        </div>
        <p className="font-bold text-punk-pink">-$1,299</p>
      </div>
    </div>
  </div>
);

export const ThreeDCard = () => (
  <div className="u-3d-ui-card">
    <div className="card p-8 flex flex-col justify-between border border-white/10">
      <div className="flex justify-between items-start">
        <div className="w-12 h-12 bg-punk-pink/20 rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 bg-punk-pink rotate-45"></div>
        </div>
        <p className="text-[10px] font-black text-zinc-500 tracking-widest">3D_MODULE</p>
      </div>
      <div>
        <h3 className="text-3xl font-black italic tracking-tighter text-white mb-2">SPATIAL_UI</h3>
        <p className="text-xs text-zinc-500 leading-relaxed">Hover to experience the depth of the digital frontier.</p>
      </div>
      <button className="w-full py-3 bg-white text-black font-black text-xs tracking-widest uppercase hover:bg-punk-pink hover:text-white transition-colors">Initialize</button>
    </div>
  </div>
);

export const Spot = () => (
  <div className="u-spot">
    <div className="main">
      <div className="currentplaying">
        <svg height="50px" width="50px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="spotify">
          <radialGradient gradientUnits="userSpaceOnUse" gradientTransform="translate(0 -534)" r="43.888" cy="572.064" cx="33.34" id="ipdIa4~cOclR8yt_ClW93a">
            <stop stopColor="#f4e9c3" offset="0"></stop>
            <stop stopColor="#f8eecd" offset=".219"></stop>
            <stop stopColor="#fdf4dc" offset=".644"></stop>
            <stop stopColor="#fff6e1" offset="1"></stop>
          </radialGradient>
          <path d="M51.03,37.34c0.16,0.98,1.08,1.66,2.08,1.66h5.39c2.63,0,4.75,2.28,4.48,4.96	C62.74,46.3,60.64,48,58.29,48H49c-1.22,0-2.18,1.08-1.97,2.34c0.16,0.98,1.08,1.66,2.08,1.66h8.39c1.24,0,2.37,0.5,3.18,1.32	C61.5,54.13,62,55.26,62,56.5c0,2.49-2.01,4.5-4.5,4.5h-49c-1.52,0-2.9-0.62-3.89-1.61C3.62,58.4,3,57.02,3,55.5	C3,52.46,5.46,50,8.5,50H14c1.22,0,2.18-1.08,1.97-2.34C15.81,46.68,14.89,44,13.89,44H5.5c-2.63,0-4.75-2.28-4.48-4.96	C1.26,36.7,3.36,35,5.71,35H8c1.71,0,3.09-1.43,3-3.16C10.91,30.22,9.45,29,7.83,29H4.5c-2.63,0-4.75-2.28-4.48-4.96	C0.26,21.7,2.37,20,4.71,20H20c0.83,0,1.58-0.34,2.12-0.88C22.66,18.58,23,17.83,23,17c0-1.66-1.34-3-3-3h-1.18	c-0.62-0.09-1.43,0-2.32,0h-9c-1.52,0-2.9-0.62-3.89-1.61S2,10.02,2,8.5C2,5.46,4.46,3,7.5,3h49c3.21,0,5.8,2.79,5.47,6.06	C61.68,11.92,60.11,14,57.24,14H52c-2.76,0-5,2.24-5,5c0,1.38,0.56,2.63,1.46,3.54C49.37,23.44,50.62,24,52,24h6.5	c3.21,0,5.8,2.79,5.47,6.06C63.68,32.92,61.11,35,58.24,35H53C51.78,35,50.82,36.08,51.03,37.34z" fill="url(#ipdIa4~cOclR8yt_ClW93a)"></path>
          <linearGradient gradientUnits="userSpaceOnUse" gradientTransform="translate(0 -534)" y2="590.253" y1="530.096" x2="32" x1="32" id="ipdIa4~cOclR8yt_ClW93b">
            <stop stopColor="#42d778" offset="0"></stop>
            <stop stopColor="#3dca76" offset=".428"></stop>
            <stop stopColor="#34b171" offset="1"></stop>
          </linearGradient>
          <path d="M57,32c0,12.837-9.663,23.404-22.115,24.837C33.942,56.942,32.971,57,32,57	c-1.644,0-3.25-0.163-4.808-0.471C15.683,54.298,7,44.163,7,32C7,18.192,18.192,7,32,7S57,18.192,57,32z" fill="url(#ipdIa4~cOclR8yt_ClW93b)"></path>
          <path d="M41.683,44.394c-0.365,0-0.731-0.181-1.096-0.365c-3.471-2.009-7.674-3.105-12.24-3.105	c-2.559,0-5.116,0.364-7.491,0.912c-0.365,0-0.914,0.183-1.096,0.183c-0.914,0-1.461-0.732-1.461-1.462	c0-0.913,0.547-1.463,1.279-1.643c2.923-0.732,5.846-1.096,8.951-1.096c5.116,0,9.866,1.276,13.885,3.655	c0.548,0.364,0.914,0.73,0.914,1.642C43.145,43.847,42.414,44.394,41.683,44.394z M44.241,38.181c-0.547,0-0.912-0.18-1.279-0.364	c-3.835-2.375-9.135-3.839-15.163-3.839c-2.924,0-5.664,0.366-7.674,0.916c-0.549,0.18-0.731,0.18-1.096,0.18	c-1.096,0-1.827-0.912-1.827-1.826c0-1.096,0.549-1.645,1.461-2.009c2.74-0.73,5.481-1.279,9.317-1.279	c6.213,0,12.241,1.463,16.991,4.384c0.73,0.364,1.096,1.096,1.096,1.826C46.069,37.269,45.337,38.181,44.241,38.181z M47.165,30.876	c-0.548,0-0.731-0.182-1.279-0.364c-4.385-2.559-10.961-4.021-17.356-4.021c-3.289,0-6.577,0.366-9.5,1.096	c-0.366,0-0.731,0.182-1.279,0.182c-1.279,0.183-2.193-0.912-2.193-2.192c0-1.279,0.731-2.009,1.644-2.192	c3.471-1.096,7.125-1.462,11.327-1.462c6.943,0,14.25,1.462,19.731,4.567c0.73,0.366,1.278,1.096,1.278,2.193	C49.357,29.961,48.442,30.876,47.165,30.876z" fill="#fff"></path>
        </svg>
        <p className="heading">Currently Playing</p>
      </div>
      <div className="loader">
        <div className="song">
          <p className="name">Time in a Bottle</p>
          <p className="artist">Jim Corce</p>
        </div>
        <div className="albumcover"></div>
        <div className="loading">
          <div className="load"></div>
          <div className="load"></div>
          <div className="load"></div>
          <div className="load"></div>
        </div>
      </div>
      <div className="loader">
        <div className="song">
          <p className="name">My Way</p>
          <p className="artist">Frank Sinatra</p>
        </div>
        <div className="albumcover"></div>
        <div className="play"></div>
      </div>
      <div className="loader">
        <div className="song">
          <p className="name">Lemon Tree</p>
          <p className="artist">Fools Garden</p>
        </div>
        <div className="albumcover"></div>
        <div className="play"></div>
      </div>
    </div>
  </div>
);
