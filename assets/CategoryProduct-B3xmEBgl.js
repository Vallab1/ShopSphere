import{u as m,c as f,j as e,r as n,n as u,p as y,o as b}from"./index-D_SR8fpC.js";import{L as j}from"./Loading4-B7O2ixCj.js";import{c as x}from"./createLucideIcon-CiqlSKMq.js";import{T as w}from"./trending-up-B7_d-1jS.js";const k=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],c=x("chevron-left",k);const N=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],v=x("package",N),I=({product:t})=>{const r=m(),{addToCart:l}=f();return e.jsx("div",{className:"p-3 mt-2 space-y-4 rounded-md shadow-md bg-whit dark:bg-gray-900",children:e.jsxs("div",{className:"flex flex-col items-center gap-4 md:flex-row md:gap-7",children:[e.jsx("img",{src:t.thumbnail,alt:t.title,className:"object-cover w-full h-48 rounded-md cursor-pointer md:w-60 md:h-40 lg:w-72 lg:h-48",onClick:()=>r(`/products/${t.id}`)}),e.jsxs("div",{className:"flex-1 w-full space-y-2",children:[e.jsx("h1",{className:"font-bold text-lg md:text-xl line-clamp-3 text-[#000] dark:text-[#fff]",children:t.title}),e.jsxs("p",{className:"font-semibold text-sm md:text-lg flex items-center gap-1 text-[#000] dark:text-[#fff]",children:["₹",e.jsx("span",{className:"text-3xl md:text-4xl",children:t.price}),e.jsxs("span",{className:"text-sm text-green-600",children:["(",t.discount,"% OFF)"]})]}),e.jsxs("p",{className:"text-sm text-[#000] dark:text-[#676767]",children:["FREE delivery",e.jsx("span",{className:"font-semibold",children:" Fri, 18 Apr"}),e.jsx("br",{}),"Or fastest delivery",e.jsx("span",{className:"font-semibold",children:" Tomorrow, 17 Apr"})]}),e.jsx("button",{onClick:()=>l(t),className:"bg-[#155dfc] text-white px-4 py-2 rounded-md w-full md:w-auto",children:"Add to Cart"})]})]})})},F=()=>{const[t,r]=n.useState([]),[l,d]=n.useState(!0),h=u(),[p]=y(),i=m(),o=h.category||p.get("category"),g=async()=>{try{d(!0);let s=(await b.get(`https://dummyjson.com/products/category/${o}`)).data.products||[];r(s),d(!1)}catch(a){console.log("Error fetching category products:",a),r([]),d(!1)}};return n.useEffect(()=>{o&&(g(),window.scrollTo({top:0,behavior:"smooth"}))},[o]),l?e.jsxs("div",{className:"flex flex-col items-center justify-center h-screen bg-gradient-to-b from-white to-gray-100 dark:from-[#0a0a0a] dark:to-[#111]",children:[e.jsx("video",{muted:!0,autoPlay:!0,loop:!0,className:"w-40 mb-4",children:e.jsx("source",{src:j,type:"video/webm"})}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 animate-pulse",children:"Loading products..."})]}):t.length===0?e.jsx("div",{className:"min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-[#0a0a0a] dark:to-[#111] flex items-center justify-center px-4",children:e.jsxs("div",{className:"text-center",style:{animation:"fadeInUp 0.5s ease-out"},children:[e.jsx("div",{className:"inline-block p-6 mb-6 bg-gray-100 rounded-full dark:bg-gray-800",children:e.jsx(v,{className:"w-16 h-16 text-gray-400 dark:text-gray-600"})}),e.jsx("h2",{className:"mb-3 text-3xl font-bold text-gray-900 dark:text-white",children:"No Products Found"}),e.jsx("p",{className:"max-w-md mx-auto mb-8 text-gray-600 dark:text-gray-400",children:"We couldn't find any products in this category. Try exploring other categories!"}),e.jsxs("button",{onClick:()=>i("/"),className:"flex items-center gap-2 px-8 py-3 mx-auto font-semibold text-white transition-all duration-200 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:scale-105 active:scale-95",children:[e.jsx(c,{className:"w-5 h-5"}),"Back to Home"]})]})}):e.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-[#0a0a0a] dark:via-[#0f0f0f] dark:to-[#0a0a0a]",children:[e.jsx("div",{className:"bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 dark:from-purple-900 dark:via-pink-900 dark:to-red-900",children:e.jsxs("div",{className:"max-w-6xl px-4 py-8 mx-auto",children:[e.jsxs("button",{onClick:()=>i("/"),className:"flex items-center gap-2 px-4 py-2 mb-6 text-white transition-all duration-200 rounded-lg cursor-pointer bg-white/20 backdrop-blur-sm hover:bg-white/30 hover:scale-105 active:scale-95",style:{animation:"slideInLeft 0.4s ease-out"},children:[e.jsx(c,{className:"w-5 h-5"}),"Back to Home"]}),e.jsxs("div",{style:{animation:"fadeInUp 0.5s ease-out"},children:[e.jsx("h1",{className:"mb-3 text-4xl font-black text-white capitalize md:text-5xl drop-shadow-lg",children:o?.split("-").join(" ")}),e.jsxs("div",{className:"flex items-center gap-3 text-white/90",children:[e.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm",children:[e.jsx(w,{className:"w-5 h-5"}),e.jsxs("span",{className:"font-semibold",children:[t.length," Products"]})]}),e.jsx("div",{className:"hidden text-sm sm:block",children:"Explore our amazing collection"})]})]})]})}),e.jsxs("div",{className:"max-w-6xl px-4 py-8 mx-auto",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-8 md:grid-cols-4",style:{animation:"fadeIn 0.6s ease-out 0.2s both"},children:[e.jsxs("div",{className:"p-4 transition-shadow bg-white shadow-sm dark:bg-gray-800 rounded-xl hover:shadow-md",children:[e.jsx("p",{className:"mb-1 text-sm text-gray-600 dark:text-gray-400",children:"Total Items"}),e.jsx("p",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:t.length})]}),e.jsxs("div",{className:"p-4 transition-shadow bg-white shadow-sm dark:bg-gray-800 rounded-xl hover:shadow-md",children:[e.jsx("p",{className:"mb-1 text-sm text-gray-600 dark:text-gray-400",children:"Avg. Discount"}),e.jsxs("p",{className:"text-2xl font-bold text-green-600 dark:text-green-400",children:[Math.round(t.reduce((a,s)=>a+(s.discountPercentage||0),0)/t.length),"%"]})]}),e.jsxs("div",{className:"p-4 transition-shadow bg-white shadow-sm dark:bg-gray-800 rounded-xl hover:shadow-md",children:[e.jsx("p",{className:"mb-1 text-sm text-gray-600 dark:text-gray-400",children:"Price Range"}),e.jsxs("p",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:["$",Math.min(...t.map(a=>a.price))," - $",Math.max(...t.map(a=>a.price))]})]}),e.jsxs("div",{className:"p-4 transition-shadow bg-white shadow-sm dark:bg-gray-800 rounded-xl hover:shadow-md",children:[e.jsx("p",{className:"mb-1 text-sm text-gray-600 dark:text-gray-400",children:"Top Rated"}),e.jsxs("p",{className:"text-2xl font-bold text-yellow-600 dark:text-yellow-400",children:["★ ",Math.max(...t.map(a=>a.rating||0)).toFixed(1)]})]})]}),e.jsx("div",{className:"space-y-5",children:t.map((a,s)=>e.jsx("div",{style:{animation:`slideInUp 0.4s ease-out ${s*.05}s both`},children:e.jsx(I,{product:a})},a.id))}),e.jsxs("div",{className:"p-8 mt-12 text-center bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-900 dark:to-pink-900 rounded-2xl",style:{animation:"fadeInUp 0.6s ease-out 0.4s both"},children:[e.jsx("h3",{className:"mb-3 text-2xl font-bold text-white",children:"Found what you're looking for?"}),e.jsx("p",{className:"mb-6 text-white/90",children:"Explore more categories and discover amazing deals!"}),e.jsx("button",{onClick:()=>i("/"),className:"px-8 py-3 font-semibold text-purple-600 transition-all duration-200 bg-white rounded-lg hover:bg-gray-100 hover:scale-105 active:scale-95",children:"Browse All Categories"})]})]}),e.jsx("style",{children:`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `})]})};export{F as default};
