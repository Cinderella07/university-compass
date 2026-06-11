import{useState}from"react";
const DB=[{id:1,name:"北京大学",short:"北大",city:"北京",level:"985/211",employment:96,postgraduate:92,city_score:99,dormitory:72,canteen:80,environment:95,transferDifficulty:"较难",pros:["校友网络覆盖政商学各界","图书馆资源全国最强","国际交流机会多","品牌溢价极高"],cons:["竞争压力极大","部分宿舍老旧","北京生活成本高","内卷氛围明显"],suitable:["目标政府/学术/顶级机构","能承受高压竞争","有清晰长期规划"],unsuitable:["希望轻松大学生活","只想学技术不在意排名","经济压力较大的家庭"],dormDesc:"4-6人间为主，部分老宿舍楼无独立卫浴，近年新楼条件改善。",canteenDesc:"食堂数量多口味多样，价格亲民，总体评价较好。",majors:["法学","中文","数学","物理","经济学","国际关系"],reviews:[{type:"学霸",text:"资源天花板，机会真的是别处给不了的。但心理压力也是真实的。",trust:91},{type:"普通学生",text:"图书馆是我四年最爱的地方。宿舍确实一般，但平台给的机会值得。",trust:88},{type:"压线学生",text:"压线进来第一学期很难熬，但熬过去之后发现平台给的机会值得。",trust:85}],scoreLines:{"北京":682,"广东":676,"湖南":671,"河南":679},risk:"极高"},{id:2,name:"清华大学",short:"清华",city:"北京",level:"985/211",employment:98,postgraduate:95,city_score:99,dormitory:80,canteen:85,environment:96,transferDifficulty:"难",pros:["工科实验室设施顶级","大厂直通车薪资天花板","创业资源丰富","校企合作极强"],cons:["学业压力全国最大","文科资源相对弱","竞争极度激烈","ddl永远赶不完"],suitable:["目标大厂/创业/顶级工程师","理工科天赋强","能承受极高强度学习"],unsuitable:["文科生","希望有大量自由时间","不喜欢竞争环境"],dormDesc:"6人间为主，近年新建宿舍楼有空调，条件较好。",canteenDesc:"食堂众多品质稳定，价格合理，深受学生好评。",majors:["计算机","电子工程","机械","建筑","经管","材料"],reviews:[{type:"学霸",text:"cs专业毕业直接sp/ssp，实验室设备真的好，值得所有付出。",trust:94},{type:"普通学生",text:"压力是真的大，但毕业那一刻拿到offer你会觉得值。",trust:87},{type:"压线学生",text:"压线进来非常煎熬，建议提前做好心理建设。但平台真的好。",trust:82}],scoreLines:{"北京":688,"广东":681,"湖南":678,"河南":685},risk:"极高"},{id:3,name:"浙江大学",short:"浙大",city:"杭州",level:"985/211",employment:93,postgraduate:88,city_score:91,dormitory:90,canteen:88,environment:92,transferDifficulty:"中等",pros:["新校区宿舍4人间有独卫","阿里系校友资源极强","杭州互联网实习机会多","创业生态成熟"],cons:["校区分散","竞争激烈","文科资源相对少","杭州消费水平较高"],suitable:["目标互联网/创业","喜欢杭州城市氛围","理工科为主"],unsuitable:["不喜欢互联网方向","希望校区集中","文科生首选"],dormDesc:"紫金港新校区4人间独立卫浴，条件优秀。老校区条件一般。",canteenDesc:"食堂品种丰富，口味偏江浙，价格适中，总体评价好。",majors:["计算机","农学","医学","材料","电子","机械"],reviews:[{type:"学霸",text:"阿里内推真的方便，校友圈子大。宿舍是985里最好的之一。",trust:92},{type:"普通学生",text:"杭州真的适合年轻人，实习机会很多。食堂很好吃。",trust:89},{type:"压线学生",text:"压线进来GPA竞争激烈，但宿舍条件好让心情好了不少。",trust:84}],scoreLines:{"浙江":675,"广东":668,"湖南":663,"河南":671},risk:"高"},{id:4,name:"武汉大学",short:"武大",city:"武汉",level:"985/211",employment:84,postgraduate:86,city_score:78,dormitory:75,canteen:82,environment:99,transferDifficulty:"中等",pros:["全国最美校园公认第一","遥感测绘全国第一","武汉生活成本低","校园文化氛围好"],cons:["地处中部就业资源不如沿海","宿舍在山上爬坡费体力","武汉夏热冬冷","部分专业就业竞争力一般"],suitable:["喜欢人文校园氛围","目标科研/学术","预算有限的家庭"],unsuitable:["目标金融/互联网沿海大厂","怕爬坡怕冷热","就业优先考虑"],dormDesc:"4-6人间，依山而建，部分宿舍视野极好但需爬坡。",canteenDesc:"食堂品种多，武汉口味为主，价格实惠。",majors:["遥感测绘","法学","信息管理","水利","外语","哲学"],reviews:[{type:"学霸",text:"校园美到哭！测绘遥感全国第一不是吹的，就业去向很好。",trust:90},{type:"普通学生",text:"爬坡是真的累，但住在山上看日出是真的美。武汉消费低。",trust:88},{type:"压线学生",text:"校园环境真的是心理疗愈，减压效果满分。",trust:83}],scoreLines:{"湖北":645,"广东":638,"湖南":633,"河南":641},risk:"中"},{id:5,name:"南京大学",short:"南大",city:"南京",level:"985/211",employment:87,postgraduate:91,city_score:82,dormitory:76,canteen:79,environment:86,transferDifficulty:"较难",pros:["学术风气全国顶尖","天文地质等学科全国第一","南京生活成本适中","保研率高"],cons:["就业资源不如北上广深","部分设施老化","仙林校区偏远","知名度略逊于北上顶校"],suitable:["目标科研/读博","偏爱学术氛围","理科天赋强"],unsuitable:["就业优先考虑","不喜欢学术氛围","目标一线城市大厂"],dormDesc:"仙林新校区条件较好，鼓楼老校区部分宿舍设施老旧。",canteenDesc:"食堂品种一般，口味中规中矩，价格较实惠。",majors:["天文学","地质学","物理","哲学","中文","历史"],reviews:[{type:"学霸",text:"学术氛围真的是全国前三水平，导师资源好。",trust:89},{type:"普通学生",text:"仙林校区有点偏，但南京整体节奏慢，适合沉下心来学习。",trust:85},{type:"压线学生",text:"压线进来好在保研率高，已拿到推免名额。",trust:86}],scoreLines:{"江苏":658,"广东":651,"湖南":646,"河南":654},risk:"高"},{id:6,name:"中山大学",short:"中大",city:"广州",level:"985/211",employment:90,postgraduate:85,city_score:95,dormitory:82,canteen:86,environment:88,transferDifficulty:"中等",pros:["广州深圳双城就业圈","粤港澳大湾区地缘优势","医科实力全国前五","气候好四季如春"],cons:["部分校区分散","广东高考竞争激烈","综合排名近年有所下滑"],suitable:["目标大湾区就业","医学方向","广东本省学生"],unsuitable:["目标北上互联网","不适应南方气候"],dormDesc:"广州校区4人间条件良好，深圳校区新建设施优秀。",canteenDesc:"食堂以粤菜为主，口味清淡，品种丰富。",majors:["医学","法学","历史","哲学","中文","生物"],reviews:[{type:"学霸",text:"大湾区资源真的强，广深两城随便选。医科在南方是绝对老大。",trust:91},{type:"普通学生",text:"广州气候好是真的，冬天还能穿短袖。",trust:87},{type:"压线学生",text:"压线进来建议提前想清楚专业方向。",trust:80}],scoreLines:{"广东":655,"湖南":648,"河南":652,"江苏":649},risk:"高"}];
const PROVS=["北京","上海","广东","湖南","河南","江苏","浙江","湖北","四川","其他"];
const DIMS=[{k:"employment",l:"就业指数"},{k:"postgraduate",l:"考研指数"},{k:"city_score",l:"城市指数"},{k:"dormitory",l:"宿舍评分"},{k:"canteen",l:"食堂评分"},{k:"environment",l:"校园环境"}];
function calcMatch(s,score,prov,pri){const base=s.scoreLines[prov]||650;let m=50+(score-base)*1.5;if(pri==="就业优先")m+=(s.employment-85)*0.8;if(pri==="考研优先")m+=(s.postgraduate-85)*0.8;if(pri==="城市优先")m+=(s.city_score-85)*0.8;return Math.min(99,Math.max(10,Math.round(m)));}
function getTag(s,score,prov){const gap=score-(s.scoreLines[prov]||650);if(gap>=15)return{label:"稳妥",color:"#10b981",bg:"#d1fae5"};if(gap>=0)return{label:"匹配",color:"#f59e0b",bg:"#fef3c7"};if(gap>=-10)return{label:"冲刺",color:"#ef4444",bg:"#fee2e2"};return null;}
const sc=v=>v>=90?"#10b981":v>=75?"#f59e0b":"#ef4444";
const Bar=({v})=><div style={{flex:1,background:"#f1f5f9",borderRadius:99,height:7,overflow:"hidden"}}><div style={{width:`${v}%`,height:"100%",background:sc(v),borderRadius:99}}/></div>;
const SRow=({l,v})=><div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}><span style={{width:72,fontSize:12,color:"#64748b",flexShrink:0}}>{l}</span><Bar v={v}/><span style={{width:28,textAlign:"right",fontSize:13,fontWeight:700,color:sc(v)}}>{v}</span></div>;
const Chip=({label,color,bg})=><span style={{background:bg,color,fontSize:11,fontWeight:700,padding:"3px 9px",borderRadius:99}}>{label}</span>;
const Sec=({t,children})=><div style={{marginBottom:24}}><div style={{fontSize:13,fontWeight:700,color:"#94a3b8",marginBottom:14,paddingBottom:8,borderBottom:"1px solid #f1f5f9"}}>{t}</div>{children}</div>;
const IBox=({icon,t,c})=><div style={{background:"#f8fafc",borderRadius:12,padding:"12px 14px",marginBottom:10}}><div style={{fontSize:13,fontWeight:700,color:"#0f172a",marginBottom:6}}>{icon} {t}</div><div style={{fontSize:13,color:"#475569",lineHeight:1.7}}>{c}</div></div>;
export default function App(){
  const[page,setPage]=useState("home");
  const[form,setForm]=useState({score:"",province:"",subject:"不限",priority:""});
  const[results,setResults]=useState([]);
  const[detail,setDetail]=useState(null);
  const[cA,setCA]=useState(null);
  const[cB,setCB]=useState(null);
  const[pick,setPick]=useState(null);
  const sf=(k,v)=>setForm(f=>({...f,[k]:v}));
  const analyze=()=>{if(!form.score||!form.province||!form.priority)return;const s=parseInt(form.score);setResults(DB.map(x=>({...x,match:calcMatch(x,s,form.province,form.priority),tag:getTag(x,s,form.province)})).filter(x=>x.tag).sort((a,b)=>b.match-a.match));setPage("results");};
  const NAV=[{k:"home",i:"🧭",l:"首页"},{k:"results",i:"📋",l:"推荐"},{k:"compare",i:"⚖️",l:"对比"}];
  return(
    <div style={{maxWidth:480,margin:"0 auto",background:"#fff",minHeight:"100vh",fontFamily:"-apple-system,sans-serif",paddingBottom:72}}>
      {page==="home"&&<Home form={form} sf={sf} analyze={analyze}/>}
      {page==="results"&&<Results results={results} form={form} setPage={setPage} setDetail={setDetail} setCA={setCA}/>}
      {page==="detail"&&<Detail detail={detail} setPage={setPage} setCA={setCA}/>}
      {page==="compare"&&<Compare cA={cA} cB={cB} setCA={setCA} setCB={setCB} pick={pick} setPick={setPick} results={results} setPage={setPage}/>}
      <div style={{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:480,background:"#fff",borderTop:"1px solid #f1f5f9",display:"flex",padding:"10px 0 16px"}}>
        {NAV.map(n=><button key={n.k} onClick={()=>setPage(n.k)} style={{flex:1,background:"none",border:"none",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:3}}><span style={{fontSize:20}}>{n.i}</span><span style={{fontSize:10,fontWeight:page===n.k?700:400,color:page===n.k?"#0f172a":"#94a3b8"}}>{n.l}</span>{page===n.k&&<div style={{width:18,height:2.5,background:"#0f172a",borderRadius:99}}/>}</button>)}
      </div>
    </div>
  );
}
function Home({form,sf,analyze}){
  return(
    <div>
      <div style={{padding:"36px 20px 28px",borderBottom:"1px solid #f1f5f9"}}>
        <div style={{display:"inline-block",background:"#fef3c7",color:"#92400e",fontSize:11,fontWeight:700,padding:"4px 10px",borderRadius:99,marginBottom:14}}>2026 高考志愿</div>
        <h1 style={{margin:"0 0 10px",fontSize:30,fontWeight:900,color:"#0f172a",lineHeight:1.2}}>大学罗盘</h1>
        <p style={{margin:"0 0 6px",fontSize:15,color:"#475569"}}>你不只想知道「能不能考上」</p>
        <p style={{margin:0,fontSize:15,color:"#0f172a",fontWeight:600}}>你更想知道「这所大学真实是什么样」</p>
      </div>
      <div style={{padding:"24px 20px"}}>
        <div style={{fontSize:13,fontWeight:700,color:"#94a3b8",marginBottom:16}}>填写你的情况</div>
        <div style={{marginBottom:16}}><div style={{fontSize:13,fontWeight:600,marginBottom:8}}>高考分数</div><input type="number" placeholder="例如：638" value={form.score} onChange={e=>sf("score",e.target.value)} style={{width:"100%",border:"2px solid #e2e8f0",borderRadius:12,padding:"13px 16px",fontSize:16,outline:"none",boxSizing:"border-box",fontWeight:600}}/></div>
        <div style={{marginBottom:16}}><div style={{fontSize:13,fontWeight:600,marginBottom:8}}>所在省份</div><div style={{display:"flex",flexWrap:"wrap",gap:8}}>{PROVS.map(p=><button key={p} onClick={()=>sf("province",p)} style={{padding:"9px 16px",borderRadius:10,border:"2px solid",borderColor:form.province===p?"#0f172a":"#e2e8f0",background:form.province===p?"#0f172a":"#fff",color:form.province===p?"#fff":"#475569",fontSize:13,fontWeight:600,cursor:"pointer"}}>{p}</button>)}</div></div>
        <div style={{marginBottom:16}}><div style={{fontSize:13,fontWeight:600,marginBottom:8}}>选科方向</div><div style={{display:"flex",gap:8}}>{["理科/物理","文科/历史","不限"].map(s=><button key={s} onClick={()=>sf("subject",s)} style={{flex:1,padding:"9px 0",borderRadius:10,border:"2px solid",borderColor:form.subject===s?"#0f172a":"#e2e8f0",background:form.subject===s?"#0f172a":"#fff",color:form.subject===s?"#fff":"#475569",fontSize:13,fontWeight:600,cursor:"pointer"}}>{s}</button>)}</div></div>
        <div style={{marginBottom:28}}><div style={{fontSize:13,fontWeight:600,marginBottom:8}}>你的首要目标</div>{[{k:"就业优先",i:"💼",d:"毕业后尽快找到好工作，薪资优先"},{k:"考研优先",i:"📚",d:"计划读研深造，保研率和学术资源优先"},{k:"城市优先",i:"🌆",d:"毕业后留在大城市，城市机会优先"}].map(o=><button key={o.k} onClick={()=>sf("priority",o.k)} style={{display:"flex",alignItems:"center",gap:14,padding:"14px 16px",borderRadius:14,border:"2px solid",borderColor:form.priority===o.k?"#0f172a":"#e2e8f0",background:form.priority===o.k?"#0f172a":"#fff",textAlign:"left",cursor:"pointer",width:"100%",marginBottom:10,boxSizing:"border-box"}}><span style={{fontSize:24}}>{o.i}</span><div><div style={{fontWeight:700,fontSize:14,color:form.priority===o.k?"#fff":"#0f172a"}}>{o.k}</div><div style={{fontSize:12,color:form.priority===o.k?"#cbd5e1":"#94a3b8",marginTop:2}}>{o.d}</div></div>{form.priority===o.k&&<span style={{marginLeft:"auto",color:"#fff",fontSize:18}}>✓</span>}</button>)}</div>
        <button onClick={analyze} disabled={!form.score||!form.province||!form.priority} style={{width:"100%",padding:16,background:(!form.score||!form.province||!form.priority)?"#e2e8f0":"#0f172a",color:(!form.score||!form.province||!form.priority)?"#94a3b8":"#fff",border:"none",borderRadius:14,fontSize:16,fontWeight:700,cursor:"pointer"}}>开始分析 →</button>
      </div>
      <div style={{margin:"0 20px 32px",background:"#f8fafc",borderRadius:14,padding:16}}><div style={{fontSize:12,color:"#64748b",lineHeight:1.8}}>📌 <strong style={{color:"#0f172a"}}>大学罗盘</strong> 不只提供分数线，更提供宿舍、食堂、就业、转专业难度、学长真实评价等官方看不到的信息。</div></div>
    </div>
  );
}
function Results({results,form,setPage,setDetail,setCA}){
  return(
    <div>
      <div style={{padding:"20px 20px 16px",borderBottom:"1px solid #f1f5f9",display:"flex",alignItems:"center",gap:12}}>
        <button onClick={()=>setPage("home")} style={{background:"none",border:"none",fontSize:20,cursor:"pointer"}}>←</button>
        <div><div style={{fontWeight:800,fontSize:17,color:"#0f172a"}}>为你推荐 {results.length} 所院校</div><div style={{fontSize:12,color:"#94a3b8",marginTop:2}}>{form.score}分 · {form.province} · {form.priority}</div></div>
      </div>
      <div style={{padding:"16px 20px",display:"flex",gap:8}}>{[{l:"冲刺",c:"#ef4444",b:"#fee2e2",d:"分数略低有机会"},{l:"匹配",c:"#f59e0b",b:"#fef3c7",d:"分数相当稳冲"},{l:"稳妥",c:"#10b981",b:"#d1fae5",d:"分数富余保底"}].map(t=><div key={t.l} style={{flex:1,background:t.b,borderRadius:10,padding:"10px 8px",textAlign:"center"}}><div style={{fontWeight:800,color:t.c,fontSize:14}}>{t.l}</div><div style={{fontSize:10,color:"#64748b",marginTop:2}}>{t.d}</div></div>)}</div>
      <div style={{padding:"0 20px 32px",display:"flex",flexDirection:"column",gap:14}}>
        {results.map(s=>(
          <div key={s.id} style={{background:"#fff",border:"1.5px solid #f1f5f9",borderRadius:16,padding:"18px 18px 14px",boxShadow:"0 2px 8px rgba(0,0,0,0.05)"}}>
            <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12}}>
              <div><div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}><span style={{fontWeight:800,fontSize:17,color:"#0f172a"}}>{s.name}</span><Chip {...s.tag}/></div><div style={{fontSize:12,color:"#94a3b8"}}>{s.city} · {s.level}</div></div>
              <div style={{textAlign:"right"}}><div style={{fontSize:26,fontWeight:900,color:"#0f172a",lineHeight:1}}>{s.match}</div><div style={{fontSize:10,color:"#94a3b8"}}>匹配度</div></div>
            </div>
            <div style={{marginBottom:14}}><SRow l="💼 就业指数" v={s.employment}/><SRow l="📚 考研指数" v={s.postgraduate}/><SRow l="🌆 城市指数" v={s.city_score}/></div>
            <div style={{marginBottom:14,fontSize:12,color:"#475569",background:"#f8fafc",borderRadius:10,padding:"10px 12px",lineHeight:1.7}}>✅ {s.pros[0]}　⚠️ {s.cons[0]}</div>
            <div style={{display:"flex",gap:10}}>
              <button onClick={()=>{setDetail(s);setPage("detail");}} style={{flex:2,background:"#0f172a",color:"#fff",border:"none",borderRadius:10,padding:"11px 0",fontSize:13,fontWeight:700,cursor:"pointer"}}>查看详情</button>
              <button onClick={()=>{setCA(s);setPage("compare");}} style={{flex:1,background:"#f1f5f9",color:"#475569",border:"none",borderRadius:10,padding:"11px 0",fontSize:13,fontWeight:600,cursor:"pointer"}}>加入对比</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
function Detail({detail,setPage,setCA}){
  const s=detail;if(!s)return null;
  return(
    <div>
      <div style={{background:"#0f172a",padding:"20px 20px 24px"}}>
        <button onClick={()=>setPage("results")} style={{background:"none",border:"none",color:"#94a3b8",fontSize:14,cursor:"pointer",marginBottom:16,padding:0}}>← 返回结果</button>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
          <div><h2 style={{margin:"0 0 6px",fontSize:24,fontWeight:900,color:"#fff"}}>{s.name}</h2><div style={{fontSize:13,color:"#94a3b8"}}>{s.city} · {s.level}</div></div>
          <div style={{background:"#1e293b",borderRadius:12,padding:"10px 14px",textAlign:"center"}}><div style={{fontSize:11,color:"#94a3b8",marginBottom:2}}>风险等级</div><div style={{fontWeight:800,fontSize:15,color:s.risk==="极高"?"#ef4444":s.risk==="高"?"#f59e0b":"#10b981"}}>{s.risk}</div></div>
        </div>
      </div>
      <div style={{padding:"20px 20px 40px"}}>
        <Sec t="多维评分"><SRow l="💼 就业指数" v={s.employment}/><SRow l="📚 考研指数" v={s.postgraduate}/><SRow l="🌆 城市指数" v={s.city_score}/><SRow l="🛏️ 宿舍评分" v={s.dormitory}/><SRow l="🍜 食堂评分" v={s.canteen}/><SRow l="🌿 环境评分" v={s.environment}/></Sec>
        <Sec t="住宿 & 食堂真实情况"><IBox icon="🛏️" t="宿舍" c={s.dormDesc}/><IBox icon="🍜" t="食堂" c={s.canteenDesc}/></Sec>
        <Sec t="核心优势 & 主要风险">
          <div style={{marginBottom:12}}><div style={{fontSize:12,fontWeight:700,color:"#10b981",marginBottom:8}}>✅ 核心优势</div>{s.pros.map((p,i)=><div key={i} style={{fontSize:13,color:"#1e293b",padding:"7px 0",borderBottom:"1px solid #f1f5f9"}}>· {p}</div>)}</div>
          <div><div style={{fontSize:12,fontWeight:700,color:"#ef4444",marginBottom:8,marginTop:16}}>⚠️ 主要风险</div>{s.cons.map((c,i)=><div key={i} style={{fontSize:13,color:"#1e293b",padding:"7px 0",borderBottom:"1px solid #f1f5f9"}}>· {c}</div>)}</div>
        </Sec>
        <Sec t="适合 & 不适合人群">
          <div style={{marginBottom:10}}><div style={{fontSize:12,fontWeight:700,color:"#10b981",marginBottom:8}}>👍 适合你如果</div>{s.suitable.map((t,i)=><div key={i} style={{fontSize:13,color:"#1e293b",padding:"6px 0",borderBottom:"1px solid #f1f5f9"}}>· {t}</div>)}</div>
          <div style={{marginTop:14}}><div style={{fontSize:12,fontWeight:700,color:"#ef4444",marginBottom:8}}>👎 不适合你如果</div>{s.unsuitable.map((t,i)=><div key={i} style={{fontSize:13,color:"#1e293b",padding:"6px 0",borderBottom:"1px solid #f1f5f9"}}>· {t}</div>)}</div>
        </Sec>
        <Sec t="王牌专业"><div style={{display:"flex",flexWrap:"wrap",gap:8}}>{s.majors.map(m=><span key={m} style={{background:"#f1f5f9",color:"#0f172a",fontSize:13,fontWeight:600,padding:"7px 14px",borderRadius:10}}>{m}</span>)}</div></Sec>
        <Sec t="学长学姐真实评价">
          {s.reviews.map((r,i)=>(
            <div key={i} style={{background:"#f8fafc",borderRadius:14,padding:14,marginBottom:10}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}><span style={{background:r.type==="学霸"?"#dbeafe":r.type==="压线学生"?"#fee2e2":"#f0fdf4",color:r.type==="学霸"?"#1d4ed8":r.type==="压线学生"?"#b91c1c":"#166534",fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:99}}>{r.type}</span><span style={{fontSize:11,color:"#94a3b8"}}>可信度 {r.trust}</span></div>
              <p style={{margin:0,fontSize:13,color:"#334155",lineHeight:1.8}}>{r.text}</p>
            </div>
          ))}
        </Sec>
        <button onClick={()=>{setCA(s);setPage("compare");}} style={{width:"100%",background:"#f1f5f9",color:"#0f172a",border:"none",borderRadius:14,padding:14,fontSize:14,fontWeight:700,cursor:"pointer"}}>与其他学校对比 →</button>
      </div>
    </div>
  );
}
function Compare({cA,cB,setCA,setCB,pick,setPick,results,setPage}){
  const win=k=>{if(!cA||!cB)return null;return cA[k]>cB[k]?"A":cB[k]>cA[k]?"B":"tie";};
  const aW=cA&&cB?DIMS.filter(d=>win(d.k)==="A").length:0;
  const bW=cA&&cB?DIMS.filter(d=>win(d.k)==="B").length:0;
  return(
    <div>
      <div style={{padding:"20px 20px 16px",borderBottom:"1px solid #f1f5f9",display:"flex",alignItems:"center",gap:12}}>
        <button onClick={()=>setPage(results.length?"results":"home")} style={{background:"none",border:"none",fontSize:20,cursor:"pointer"}}>←</button>
        <div style={{fontWeight:800,fontSize:17,color:"#0f172a"}}>学校对比</div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 40px 1fr",alignItems:"center",gap:8,padding:"16px 20px"}}>
        {["A","B"].map(slot=>{const s=slot==="A"?cA:cB;return(<button key={slot} onClick={()=>setPick(slot)} style={{width:"100%",background:s?"#0f172a":"#f8fafc",border:s?"none":"2px dashed #e2e8f0",borderRadius:14,padding:"16px 10px",cursor:"pointer",textAlign:"center"}}>{s?<><div style={{fontWeight:800,fontSize:15,color:"#fff"}}>{s.short}</div><div style={{fontSize:11,color:"#94a3b8",marginTop:4}}>{s.city}</div></>:<div style={{fontSize:13,color:"#94a3b8"}}>选择学校 {slot}</div>}</button>);})}
        <div style={{textAlign:"center",fontWeight:900,color:"#94a3b8",fontSize:16}}>VS</div>
      </div>
      {pick&&<div style={{margin:"0 20px 16px",background:"#f8fafc",borderRadius:14,padding:14}}><div style={{fontSize:13,fontWeight:700,color:"#0f172a",marginBottom:10}}>选择 {pick} 位学校</div>{DB.map(s=><button key={s.id} onClick={()=>{pick==="A"?setCA(s):setCB(s);setPick(null);}} style={{display:"block",width:"100%",background:"#fff",border:"1.5px solid #e2e8f0",borderRadius:10,padding:"10px 14px",marginBottom:8,textAlign:"left",cursor:"pointer",fontSize:13,fontWeight:600,color:"#0f172a"}}>{s.name} <span style={{color:"#94a3b8",fontWeight:400}}>· {s.city}</span></button>)}</div>}
      {cA&&cB&&<div style={{padding:"0 20px 40px"}}>
        <div style={{background:"#0f172a",borderRadius:14,padding:16,marginBottom:20,textAlign:"center"}}><div style={{fontSize:13,color:"#94a3b8",marginBottom:4}}>综合对比结论</div><div style={{fontWeight:800,fontSize:16,color:"#fff"}}>{aW>bW?`${cA.name} 综合领先 (${aW}:${bW})`:bW>aW?`${cB.name} 综合领先 (${bW}:${aW})`:"两校势均力敌，根据个人偏好选择"}</div></div>
        {DIMS.map(dim=>{const w=win(dim.k);return(<div key={dim.k} style={{marginBottom:14}}><div style={{fontSize:12,color:"#94a3b8",marginBottom:8}}>{dim.l}</div><div style={{display:"flex",alignItems:"center",gap:10}}><span style={{width:32,textAlign:"right",fontWeight:800,fontSize:15,color:w==="A"?"#0f172a":"#94a3b8"}}>{cA[dim.k]}</span><div style={{flex:1,position:"relative",height:8,background:"#f1f5f9",borderRadius:99,overflow:"hidden"}}><div style={{position:"absolute",left:0,top:0,width:`${cA[dim.k]}%`,height:"100%",background:w==="A"?"#0f172a":"#cbd5e1",borderRadius:99}}/><div style={{position:"absolute",right:0,top:0,width:`${cB[dim.k]}%`,height:"100%",background:w==="B"?"#0f172a":"#cbd5e1",borderRadius:99}}/></div><span style={{width:32,fontWeight:800,fontSize:15,color:w==="B"?"#0f172a":"#94a3b8"}}>{cB[dim.k]}</span></div></div>);})}
      </div>}
    </div>
  );
}
