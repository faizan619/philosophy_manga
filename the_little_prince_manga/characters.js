// Original character drawings for this retelling. Add new symbols here for later episodes.
(function(){
const INK='#2a2533', SKIN='#fbe3cd', GOLD='#eab543', RUST='#b9583a';
const sym=(id,vb,body)=>`<symbol id="${id}" viewBox="${vb}" overflow="visible"><g stroke="${INK}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none">${body}</g></symbol>`;
const dot=(x,y,rx=2.4,ry=3.4)=>`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${INK}" stroke="none"/>`;
let out='';

/* ---------- the prince: golden cloud of hair, rust poncho, bare feet ---------- */
const pFace={
  calm:dot(42,50)+dot(59,50)+'<path d="M46 60 Q50 63 55 60"/>',
  ask:dot(42,50,2.6,3.8)+dot(59,50,2.6,3.8)+'<ellipse cx="50.5" cy="61" rx="3" ry="3.4" fill="#8e3b2a"/>',
  laugh:'<path d="M38 51 Q42 45 46 51 M55 51 Q59 45 63 51"/><path d="M42 57 Q50.5 70 60 57 Z" fill="#8e3b2a"/>',
  down:'<path d="M38 51 Q42 55 46 51 M55 51 Q59 55 63 51"/><path d="M47 61 Q50.5 63 54 61"/>',
  sad:dot(42,51)+dot(59,51)+'<path d="M37 45 L45 43 M64 45 L56 43" stroke-width="1.8"/><path d="M47 62 Q50.5 60 54 62"/>',
  firm:dot(42,50)+dot(59,50)+'<path d="M37 43 L46 45 M64 43 L55 45" stroke-width="1.8"/><ellipse cx="50.5" cy="61" rx="4" ry="2.8" fill="#8e3b2a"/>'
};
const legs=`<path d="M37 137 Q33 143 37 144 H47 V136 Z M64 137 Q68 143 64 144 H54 V136 Z" fill="${SKIN}" stroke-width="2"/><path d="M33 98 L34 137 H48 L50.5 112 L53 137 H67 L68 98 Z" fill="#4c6a78"/>`;
const ponchoBase=`<path d="M50 70 Q33 72 18 98 L34 103 L50.5 116 L67 103 L83 98 Q68 72 50 70Z" fill="${RUST}"/><path d="M24 91 L36 96 L50.5 107 L65 96 L77 91" stroke="${GOLD}" stroke-width="2.6"/>`;
const poncho=ponchoBase+`<path d="M40 74 Q50 80 61 74" stroke="${GOLD}" stroke-width="2.4"/>`;
const hairBack=`<path d="M28 60 Q18 56 22 48 L14 44 Q22 40 21 34 L15 24 Q26 25 30 19 L32 8 Q40 14 46 11 L56 2 Q58 11 64 12 L76 10 Q74 18 78 24 L89 27 Q82 33 82 40 L88 50 Q80 52 74 60 Z" fill="${GOLD}"/>`;
const fringe=`<path d="M26 50 Q24 30 36 24 Q50 16 66 24 Q78 32 75 50 Q71 40 65 37 Q60 42 53 36 Q45 43 38 37 Q30 41 26 50Z" fill="${GOLD}" stroke="none"/><path d="M26 50 Q30 41 38 37 Q45 43 53 36 Q60 42 65 37 Q71 40 75 50" stroke-width="1.8"/>`;
const prince=m=>hairBack+legs+poncho+`<ellipse cx="50.5" cy="49" rx="24" ry="22.5" fill="${SKIN}"/>`+fringe+`<g stroke="none" fill="#f2a58a" opacity=".6"><circle cx="35" cy="57" r="4"/><circle cx="66" cy="57" r="4"/></g>`+pFace[m];
for(const m in pFace) out+=sym('prince-'+m,'0 0 100 144',prince(m));
out+=sym('prince-hold','0 0 100 144',prince('down')+`<path d="M30 99 Q36 94 42 97 M72 99 Q66 94 60 97" stroke-width="8"/><path d="M30 99 Q36 94 42 97 M72 99 Q66 94 60 97" stroke="${SKIN}" stroke-width="3.8"/><rect x="38" y="86" width="26" height="20" fill="#fffdf4"/><path d="M44 92 h14 v9 h-14z" stroke-width="1.4"/>`);
out+=sym('prince-back','0 0 100 144',legs+ponchoBase+`<path d="M28 60 Q18 56 22 48 L14 44 Q22 40 21 34 L15 24 Q26 25 30 19 L32 8 Q40 14 46 11 L56 2 Q58 11 64 12 L76 10 Q74 18 78 24 L89 27 Q82 33 82 40 L88 50 Q80 54 74 62 L62 72 L52 68 L40 73 Z" fill="${GOLD}"/><path d="M36 34 Q40 44 36 54 M54 28 Q58 42 53 58 M68 38 Q69 48 64 56" stroke-width="1.6" opacity=".6"/>`);

/* ---------- the pilot: leather cap, goggles, olive jacket ---------- */
const piFace={
  calm:dot(43,51,2,2.8)+dot(58,51,2,2.8)+'<path d="M45 64 H56"/>',
  stun:'<circle cx="42" cy="51" r="5.4" fill="#fff"/><circle cx="59" cy="51" r="5.4" fill="#fff"/>'+dot(42,51,1.8,1.8)+dot(59,51,1.8,1.8)+'<ellipse cx="50.5" cy="65" rx="3.4" ry="4.2" fill="#6d2f25"/>',
  cross:dot(43,52,2,2.6)+dot(58,52,2,2.6)+'<path d="M37 45 L47 48 M64 45 L54 48"/><path d="M45 66 Q51 62 57 66"/>',
  sleep:'<path d="M39 51 Q43 55 47 51 M54 51 Q58 55 62 51"/><path d="M47 64 Q51 66 55 64"/>',
  soft:dot(43,51,2,2.8)+dot(58,51,2,2.8)+'<path d="M44 62 Q51 68 57 62"/>'
};
const pilot=m=>`<path d="M42 120 V150 M60 120 V150" stroke-width="14"/><path d="M42 120 V150 M60 120 V150" stroke="#5c5563" stroke-width="9.4"/><path d="M32 158 Q34 148 49 150 V158 Z M53 158 V150 Q68 148 70 158 Z" fill="#4a3426"/><path d="M50 74 Q30 75 24 124 Q50 132 78 124 Q72 75 50 74Z" fill="#7d8258"/><path d="M50 76 V126 M34 92 Q33 108 32 118 M68 92 Q69 108 70 118" stroke-width="1.8"/><path d="M40 76 L50 88 L61 76" fill="#e9dcc3"/><ellipse cx="50.5" cy="52" rx="21" ry="23" fill="#f3cfb0"/><path d="M28 56 Q22 22 50.5 21 Q79 22 73 56 Q69 60 67 64 L67 46 Q50 38 34 46 L34 64 Q31 60 28 56Z" fill="#7a5236"/><g fill="#cfe3ea"><rect x="33" y="28" width="16" height="11" rx="5"/><rect x="52" y="28" width="16" height="11" rx="5"/></g><path d="M50.5 54 Q54 58 50 59" stroke-width="1.8"/>`+piFace[m];
for(const m in piFace) out+=sym('pilot-'+m,'0 0 100 160',pilot(m));

/* ---------- the narrator at six ---------- */
const kid=f=>`<path d="M43 108 V130 M57 108 V130" stroke-width="8"/><path d="M43 108 V130 M57 108 V130" stroke="${SKIN}" stroke-width="4"/><path d="M36 136 Q37 128 46 130 V136 Z M54 136 V130 Q63 128 64 136 Z" fill="#6b5a4a"/><path d="M50 68 Q36 69 32 98 L34 112 H66 L68 98 Q64 69 50 68Z" fill="#f4ecd9"/><path d="M34 84 H66 M33 94 H67" stroke="#7b8fa8" stroke-width="3"/><path d="M34 103 H66 L64 114 H51 L50 108 L49 114 H36 Z" fill="#6f7f5c"/><circle cx="50" cy="48" r="22" fill="${SKIN}"/><path d="M27 50 Q22 22 48 20 Q80 18 73 50 Q68 36 56 36 Q40 38 34 34 Q29 40 27 50Z" fill="#5a3d2b"/>`+f;
const kidArms='M35 78 Q20 74 22 58 M65 78 Q80 74 78 58';
out+=sym('kid-show','0 0 100 140',kid(dot(42,49)+dot(58,49)+'<path d="M42 57 Q50 66 58 57 Z" fill="#8e3b2a"/>'+`<path d="${kidArms}" stroke-width="8"/><path d="${kidArms}" stroke="${SKIN}" stroke-width="3.6"/>`));
out+=sym('kid-sad','0 0 100 140',kid('<path d="M38 50 Q42 53 46 50 M54 50 Q58 53 62 50"/><path d="M45 61 Q50 57 55 61"/>'));
out+=sym('kid-awe','0 0 100 140',kid(dot(42,49,3.2,4.4)+dot(58,49,3.2,4.4)+'<ellipse cx="50" cy="60" rx="3" ry="3.6" fill="#8e3b2a"/>'));

/* ---------- grown-ups: blank spectacles, and they all wear hats ---------- */
out+=sym('adult-m','0 0 100 200',`<path d="M40 140 V190 M60 140 V190" stroke-width="16"/><path d="M40 140 V190 M60 140 V190" stroke="#77757d" stroke-width="11.5"/><path d="M28 198 Q30 188 47 190 V198Z M53 198 V190 Q70 188 72 198Z" fill="#3a363f"/><path d="M50 66 Q22 68 18 146 H82 Q78 68 50 66Z" fill="#8f8d95"/><path d="M40 67 L50 96 L60 67Z" fill="#fff"/><path d="M47 72 H53 L56 102 L50 110 L44 102Z" fill="#4f4c57"/><ellipse cx="50" cy="45" rx="19" ry="22" fill="#e9dfd6"/><circle cx="42" cy="46" r="7" fill="#fff"/><circle cx="58" cy="46" r="7" fill="#fff"/><path d="M49 46 H51 M43 59 H57"/><path d="M20 32 Q50 40 80 32 Q76 27 70 27 Q69 6 50 9 Q31 6 30 27 Q24 27 20 32Z" fill="#4f4c57"/><path d="M30 26 Q50 32 70 26" stroke="#aaa7b0"/>`);
out+=sym('adult-f','0 0 100 200',`<path d="M42 150 V190 M58 150 V190" stroke-width="6"/><path d="M32 198 Q34 189 45 190 V198Z M55 198 V190 Q66 189 68 198Z" fill="#3a363f"/><path d="M50 66 Q30 68 28 104 L16 162 H84 L72 104 Q70 68 50 66Z" fill="#a5a2aa"/><path d="M42 68 L50 80 L58 68" fill="#fff"/><ellipse cx="50" cy="46" rx="18" ry="21" fill="#e9dfd6"/><circle cx="42" cy="47" r="6.4" fill="#fff"/><circle cx="58" cy="47" r="6.4" fill="#fff"/><path d="M48.5 47 H51.5 M44 59 Q50 57 56 59"/><path d="M24 34 Q50 26 76 34 Q78 28 66 26 Q64 12 50 12 Q36 12 34 26 Q22 28 24 34Z" fill="#77757d"/><circle cx="64" cy="25" r="4" fill="#cfccd4"/>`);

/* ---------- the drawings ---------- */
const boa='M8 92 Q52 94 74 86 Q92 34 132 30 Q160 26 178 44 Q204 40 214 62 Q222 84 240 88 Q262 94 288 84 Q298 84 296 92 Q292 100 270 100 Q150 104 60 101 Q30 101 8 92Z';
out+=sym('d1','0 0 300 120',`<path d="${boa}" fill="#c79a4b"/><g stroke="#a67a32" stroke-width="1.6" opacity=".7"><path d="M100 70 L122 94 M112 52 L148 96 M130 40 L176 97 M154 36 L204 96 M184 50 L216 88"/></g><circle cx="286" cy="90" r="1.8" fill="${INK}" stroke="none"/>`);
out+=sym('d2','0 0 300 120',`<path d="${boa}" fill="#fdf3d8"/><circle cx="286" cy="90" r="1.8" fill="${INK}" stroke="none"/><g fill="#a9b0bd" stroke-width="2"><path d="M98 96 V74 Q98 44 134 42 Q150 40 162 50 Q180 46 194 56 Q206 64 204 78 Q204 92 212 92 Q206 98 199 93 Q194 86 192 78 Q184 84 176 80 V96 H164 V84 H120 V96 Z"/><path d="M160 54 Q150 66 160 78 Q174 74 174 58 Z" fill="#8f97a6"/><path d="M190 78 Q184 84 178 84" stroke="#fff" stroke-width="3"/><path d="M98 66 Q90 72 92 82"/></g><circle cx="186" cy="62" r="2.2" fill="${INK}" stroke="none"/>`);
const fleece='M30 62 Q18 60 22 48 Q16 36 30 32 Q36 20 50 26 Q62 18 74 26 Q88 24 90 38 Q100 46 92 56 Q88 68 74 64 Q60 72 48 64 Q38 70 30 62Z';
const lg='<path d="M38 64 V80 M50 66 V80 M70 66 V80 M82 62 V80"/>';
out+=sym('sheep-ill','0 0 120 90',`${lg}<path d="${fleece}" fill="#fff"/><path d="M90 42 Q106 44 108 60 Q104 70 96 66 Q88 58 88 48Z" fill="#e6e4d6"/><path d="M96 53 L101 58 M101 53 L96 58" stroke-width="1.6"/><path d="M98 67 q2 6 5 2" stroke-width="1.6"/>`);
out+=sym('sheep-ram','0 0 120 90',`${lg}<path d="${fleece}" fill="#fff"/><path d="M88 30 Q104 28 110 42 Q108 52 98 50 Q88 46 86 38Z" fill="#e6e4d6"/><circle cx="101" cy="39" r="1.8" fill="${INK}"/><path d="M92 30 Q84 12 72 20 Q66 30 76 34 Q82 34 80 28" stroke-width="3.4"/>`);
out+=sym('sheep-old','0 0 120 90',`${lg}<path d="${fleece}" fill="#eceaf0"/><path d="M95 52 Q94 64 96 78 Q102 70 101 52Z" fill="#fff"/><path d="M88 34 Q104 34 109 48 Q106 56 97 54 Q88 50 86 42Z" fill="#e6e4d6"/><path d="M95 42 h6 M94 46 q3 2 6 0" stroke-width="1.5"/><path d="M113 82 V56 q0 -6 -5 -5" stroke-width="2"/>`);
out+=sym('box','0 0 120 90',`<path d="M18 34 L82 34 L82 80 L18 80Z" fill="#fffdf4"/><path d="M18 34 L38 18 L102 18 L82 34Z" fill="#f3ead2"/><path d="M82 34 L102 18 L102 62 L82 80Z" fill="#e6d9b8"/><g fill="${INK}" stroke="none"><circle cx="38" cy="56" r="3.4"/><circle cx="50" cy="56" r="3.4"/><circle cx="62" cy="56" r="3.4"/></g>`);

/* ---------- props ---------- */
out+=sym('plane','0 0 260 110',`<path d="M20 50 Q10 18 30 16 L50 46 Q140 34 214 46 Q240 52 238 64 Q210 80 120 76 Q50 72 20 50Z" fill="#d7d3c6"/><path d="M128 44 Q140 26 168 34 L172 45" fill="#cfe3ea"/><path d="M96 60 L150 60 L176 104 L136 104Z" fill="#b9b4a5"/><path d="M46 46 L60 60 M206 46 V74" stroke-width="1.8"/><path d="M241 56 Q250 30 244 22 M241 64 Q238 92 246 98" stroke-width="4"/><ellipse cx="240" cy="60" rx="4" ry="6" fill="#4f4c57"/>`);
let st='';
[7,31,58,83,111,139,166,190,223,247,272,301,329,352,380,404,433,461,488,512,540,566,590,20,95,178,260,345,420,505,575].forEach((x,i)=>{
  st+=`<circle cx="${x}" cy="${(x*37+i*53)%190+6}" r="${i%5==0?2.1:i%3==0?1.5:1}" fill="${i%7==0?'#ffe3a0':'#fff'}"/>`;
});
out+=`<symbol id="stars" viewBox="0 0 600 200" overflow="visible">${st}</symbol>`;
out+=sym('snake-fed','0 0 260 110',`<path d="M4 78 Q20 92 44 84 Q60 80 72 66 Q88 46 112 46 Q138 46 150 66 Q160 80 180 78 Q200 74 214 64 Q232 54 248 64 Q258 76 246 88 Q230 98 214 88 Q194 98 170 100 Q110 108 70 100 Q30 106 4 78Z" fill="#7f9a5f"/><path d="M230 72 q5 5 10 0" stroke-width="2"/>`);
out+=sym('snake-prey','0 0 160 110',`<path d="M56 40 Q52 18 64 22 L70 32 Q80 28 90 32 L98 22 Q108 20 104 42 Q106 62 80 64 Q54 62 56 40Z" fill="#b9906a"/><circle cx="72" cy="42" r="4" fill="#fff"/><circle cx="90" cy="42" r="4" fill="#fff"/><circle cx="72" cy="42" r="1.6" fill="${INK}"/><circle cx="90" cy="42" r="1.6" fill="${INK}"/><path d="M76 54 Q81 50 86 54"/><path d="M44 66 Q80 80 118 64 M42 80 Q80 96 120 78 M46 94 Q80 108 116 92" stroke-width="15"/><path d="M44 66 Q80 80 118 64 M42 80 Q80 96 120 78 M46 94 Q80 108 116 92" stroke="#7f9a5f" stroke-width="10.6"/><path d="M118 64 Q142 50 134 24 Q126 8 104 14" stroke-width="15"/><path d="M118 64 Q142 50 134 24 Q126 8 106 14" stroke="#7f9a5f" stroke-width="10.6"/><path d="M112 4 Q94 2 86 12 L98 16 L88 22 Q100 30 112 24Z" fill="#7f9a5f"/><circle cx="106" cy="10" r="1.8" fill="${INK}"/>`);

/* ========== added for episodes 2 and 3 ========== */
const limb=(d,fill=SKIN,w=8)=>`<path d="${d}" stroke-width="${w}"/><path d="${d}" stroke="${fill}" stroke-width="${w-4.2}"/>`;
pFace.cry='<path d="M37 50 Q42 54 47 50 M54 50 Q59 54 64 50"/><path d="M37 44 L45 42 M64 44 L56 42" stroke-width="1.8"/><path d="M45 64 Q50.5 58 56 64 Q50.5 67 45 64Z" fill="#8e3b2a"/><path d="M41 54 Q38 61 41 63 Q44 61 41 54Z M60 54 Q57 61 60 63 Q63 61 60 54Z" fill="#8fc4dd" stroke-width="1.4"/>';
pFace.mad='<g stroke-width="2.4"><path d="M35 42 L47 47 M66 42 L54 47"/></g>'+dot(42,52)+dot(59,52)+'<path d="M42 59 Q50.5 56 59 59 L57 67 H44Z" fill="#8e3b2a"/>';
out+=sym('prince-cry','0 0 100 144',prince('cry')+limb('M30 99 Q30 84 40 70')+limb('M72 99 Q72 84 61 70'));
out+=sym('prince-mad','0 0 100 144',prince('mad')+limb('M24 98 Q16 106 18 114')+limb('M77 98 Q85 106 83 114'));
out+=sym('prince-point','0 0 100 144',prince('ask')+limb('M72 94 Q84 88 96 78'));
out+=sym('prince-water','0 0 100 144',prince('calm')+limb('M72 96 Q80 96 86 98')+'<path d="M84 98 H106 V116 H84Z" fill="#8fb1b8"/><path d="M106 104 L120 94 M84 100 Q74 108 84 114" /><path d="M122 98 l3 6 M118 100 l2 7 M126 94 l5 5" stroke="#5f9fc0" stroke-width="2"/>');
out+=sym('prince-watersad','0 0 100 144',prince('sad')+limb('M72 96 Q80 96 86 98')+'<path d="M84 98 H106 V116 H84Z" fill="#8fb1b8"/><path d="M106 104 L120 94 M84 100 Q74 108 84 114"/><path d="M122 98 l3 6 M118 100 l2 7 M126 94 l5 5" stroke="#5f9fc0" stroke-width="2"/>');
out+=sym('prince-rake','0 0 100 144',prince('down')+'<path d="M92 56 L80 140" stroke-width="3.4"/><path d="M70 136 L92 139 M71 136 V143 M78 137 V144 M85 138 V144 M92 139 V144"/>'+limb('M72 94 Q80 94 86 94'));
out+=sym('prince-pull','0 0 100 144',prince('down')+limb('M30 98 Q44 112 58 122')+limb('M72 98 Q68 112 62 122')+'<path d="M60 142 V118 M60 120 Q48 112 46 120 Q52 126 60 124 M60 118 Q72 110 74 118 Q68 124 60 122" fill="#7f9a5f"/>');
out+=sym('prince-globe','0 0 100 144',prince('sad')+'<path d="M66 118 V92 Q66 76 80 76 Q94 76 94 92 V118Z" fill="#dff0f4" fill-opacity=".75"/><path d="M76 76 Q80 68 84 76 M72 90 Q72 84 77 82"/>'+limb('M34 99 Q52 110 68 108'));
out+=sym('prince-screen','0 0 100 144',prince('sad')+'<path d="M66 74 L82 70 V126 L66 130Z M82 70 L98 76 V130 L82 126Z" fill="#e6d9b8"/>'+limb('M32 99 Q50 108 68 106'));
out+=sym('prince-sit','0 0 100 144',`<path d="M28 98 H72 V106 H28Z M32 106 V142 M68 106 V142 M30 98 V70 M70 98 V70 M30 72 H70" fill="#a5784c" stroke-width="3"/><path d="M50 66 Q34 70 30 98 H70 Q66 70 50 66Z" fill="${RUST}"/><path d="M34 92 L50 98 L66 92" stroke="${GOLD}" stroke-width="2.6"/><g transform="translate(0 -4)"><path d="M28 60 Q18 56 22 48 L14 44 Q22 40 21 34 L15 24 Q26 25 30 19 L32 8 Q40 14 46 11 L56 2 Q58 11 64 12 L76 10 Q74 18 78 24 L89 27 Q82 33 82 40 L88 50 Q80 54 74 62 L62 72 L52 68 L40 73 Z" fill="${GOLD}"/><path d="M36 34 Q40 44 36 54 M54 28 Q58 42 53 58 M68 38 Q69 48 64 56" stroke-width="1.6" opacity=".6"/></g><path d="M30 80 H70 M30 88 H70" stroke-width="4"/><path d="M30 80 H70 M30 88 H70" stroke="#a5784c" stroke-width="1.6"/>`);
piFace.sorry='<path d="M39 51 Q43 55 47 51 M54 51 Q58 55 62 51"/><path d="M37 45 L45 43 M64 45 L56 43" stroke-width="1.8"/><path d="M45 66 Q50.5 63 56 66"/>';
out+=sym('pilot-sorry','0 0 100 160',pilot('sorry'));
out+=sym('pilot-hammer','0 0 100 160',pilot('cross')+limb('M70 92 Q86 90 92 74','#7d8258',13)+'<circle cx="92" cy="72" r="6" fill="#f3cfb0" stroke-width="2"/><path d="M92 76 L94 44" stroke-width="4"/><path d="M82 36 H108 V47 H82Z" fill="#8a8790"/>');
out+=sym('pilot-paint','0 0 100 160',pilot('soft')+limb('M70 92 Q84 94 96 84','#7d8258',13)+'<circle cx="96" cy="83" r="6" fill="#f3cfb0" stroke-width="2"/><path d="M92 90 L110 70" stroke-width="3"/><path d="M108 73 l7 -8" stroke="#b9583a" stroke-width="5"/>');

/* the flower */
const fl=f=>`<path d="M50 76 Q46 110 51 146" stroke-width="6.4"/><path d="M50 76 Q46 110 51 146" stroke="#6f9455" stroke-width="3"/><g fill="#6f9455" stroke-width="1.8"><path d="M49 92 L39 88 L48 99Z M49 112 L40 109 L48 119Z M50 100 L59 96 L50 107Z M50 121 L60 118 L51 128Z"/></g><path d="M48 130 Q26 118 16 128 Q28 142 48 135 M52 136 Q72 122 84 130 Q74 146 52 141" fill="#7fa663"/><path d="M50 8 Q70 2 78 20 Q97 28 88 48 Q93 68 72 72 Q50 88 28 72 Q7 68 12 48 Q3 28 22 20 Q30 2 50 8Z" fill="#c23a50"/><path d="M50 17 Q68 13 73 28 Q84 40 75 55 Q66 70 50 67 Q34 70 25 55 Q16 40 27 28 Q32 13 50 17Z" fill="#e2687d"/>`+f;
const ff='<ellipse cx="50" cy="44" rx="18" ry="17" fill="#fbdcd8"/>';
const fFace={
 proud:ff+'<path d="M38 43 Q42 47 46 43 M54 43 Q58 47 62 43 M38 43 l-3 -2 M62 43 l3 -2" /><path d="M45 52 Q50 56 55 52"/>',
 yawn:ff+'<path d="M38 42 Q42 45 46 42 M54 42 Q58 45 62 42"/><ellipse cx="50" cy="53" rx="4" ry="5" fill="#8e3b2a"/>',
 cough:ff+'<path d="M38 40 L45 43 L38 46 M62 40 L55 43 L62 46"/><ellipse cx="50" cy="53" rx="3" ry="3.4" fill="#8e3b2a"/><path d="M86 52 q6 -4 12 0 M86 60 q6 4 10 6 M86 44 q6 -6 10 -8" stroke-width="1.8"/>',
 soft:ff+dot(43,43,2.2,3)+dot(57,43,2.2,3)+'<path d="M38 38 L44 36 M62 38 L56 36" stroke-width="1.6"/><path d="M46 53 Q50 56 54 53"/>',
 sharp:ff+dot(43,44,2.2,3)+dot(57,44,2.2,3)+'<path d="M37 37 L46 40 M63 37 L54 40"/><path d="M45 54 Q50 51 55 54"/>',
 cry:ff+'<path d="M38 43 Q42 47 46 43 M54 43 Q58 47 62 43"/><path d="M46 55 Q50 52 54 55"/><path d="M42 48 Q39 55 42 57 Q45 55 42 48Z M58 48 Q55 55 58 57 Q61 55 58 48Z" fill="#8fc4dd" stroke-width="1.3"/>',
 back:'<path d="M32 34 Q50 22 66 34 M28 48 Q50 34 72 48 M36 60 Q50 50 64 60" stroke-width="1.8"/>'
};
for(const m in fFace) out+=sym('flower-'+m,'0 0 100 150',fl(fFace[m]));
out+=sym('bud','0 0 100 150','<path d="M50 80 Q47 112 51 146" stroke-width="6.4"/><path d="M50 80 Q47 112 51 146" stroke="#6f9455" stroke-width="3"/><path d="M48 130 Q26 118 16 128 Q28 142 48 135 M52 136 Q72 122 84 130 Q74 146 52 141" fill="#7fa663"/><path d="M50 30 Q64 36 62 52 L50 60 L38 52 Q36 36 50 30Z" fill="#c23a50"/><path d="M50 84 Q22 78 30 44 Q42 50 50 38 Q58 50 70 44 Q78 78 50 84Z" fill="#7fa663"/><path d="M50 38 V82" stroke-width="1.6"/>');
const shoot=c=>`<path d="M30 78 V40" stroke-width="5"/><path d="M30 78 V40" stroke="#6f9455" stroke-width="2"/><path d="M30 44 Q10 24 4 38 Q12 52 30 48 M30 42 Q48 20 56 34 Q50 50 30 46" fill="${c}"/>`;
out+=sym('shoot','0 0 60 80',shoot('#8fb56e'));
out+=sym('shoot-b','0 0 60 80',shoot('#88ad69'));
out+=sym('daisy','0 0 40 80','<path d="M20 34 V78" stroke="#6f9455" stroke-width="3"/><g fill="#fff" stroke-width="1.6"><ellipse cx="20" cy="12" rx="6" ry="9"/><ellipse cx="20" cy="36" rx="6" ry="9"/><ellipse cx="8" cy="24" rx="9" ry="6"/><ellipse cx="32" cy="24" rx="9" ry="6"/></g><circle cx="20" cy="24" r="6" fill="#eab543" stroke-width="1.6"/>');
out+=sym('baobab','0 0 120 150','<path d="M36 148 Q46 100 34 62 Q24 50 10 44 M84 148 Q74 100 86 62 Q96 50 110 44" /><path d="M34 148 Q46 104 36 66 Q26 50 8 46 L12 40 Q32 44 44 56 Q46 40 38 22 L46 20 Q56 40 58 52 Q62 36 72 16 L80 20 Q72 40 74 56 Q88 44 108 38 L112 44 Q92 52 84 66 Q74 104 88 148Z" fill="#8c6a52"/><g fill="#6f8a56"><ellipse cx="10" cy="38" rx="16" ry="11"/><ellipse cx="42" cy="16" rx="18" ry="12"/><ellipse cx="80" cy="14" rx="18" ry="12"/><ellipse cx="111" cy="36" rx="15" ry="11"/></g><path d="M50 80 Q54 110 48 140 M68 76 Q64 108 72 140" stroke-width="1.6" opacity=".5"/>');
out+=sym('volcano','0 0 100 80','<path d="M4 78 Q24 60 34 26 Q50 20 66 26 Q76 60 96 78Z" fill="#8d7a6c"/><ellipse cx="50" cy="26" rx="16" ry="5" fill="#e0703f"/>');
out+=sym('volcano-x','0 0 100 80','<path d="M4 78 Q24 60 34 26 Q50 20 66 26 Q76 60 96 78Z" fill="#9b938c"/><ellipse cx="50" cy="26" rx="16" ry="5" fill="#5b544f"/>');
out+=sym('ele','0 0 120 70','<path d="M10 64 V42 Q10 14 46 12 Q62 10 74 20 Q92 16 106 26 Q118 34 116 48 Q116 60 122 62 Q116 68 110 62 Q106 56 104 48 Q96 54 88 50 V64 H76 V54 H32 V64Z" fill="#a9b0bd"/><path d="M72 24 Q62 36 72 48 Q86 44 86 28Z" fill="#8f97a6"/><path d="M10 36 Q2 42 4 52"/><circle cx="98" cy="32" r="2" fill="#2a2533"/>');
/* people from the prince's and pilot's stories */
const face=(hat)=>`<ellipse cx="50" cy="46" rx="19" ry="22" fill="#e3b78f"/>${dot(43,45,2,2.8)}${dot(57,45,2,2.8)}<path d="M38 56 Q50 50 62 56 Q50 60 38 56Z" fill="#4a3426"/><path d="M45 63 Q50 66 55 63"/>${hat}`;
out+=sym('astro-robe','0 0 100 200',`<path d="M40 180 V196 H28 M60 180 V196 H72" stroke-width="5"/><path d="M50 66 Q26 70 14 180 Q50 190 86 180 Q74 70 50 66Z" fill="#3f7f86"/><path d="M50 68 V186 M30 100 Q50 108 70 100" stroke="${GOLD}" stroke-width="3"/><path d="M24 128 Q50 138 76 128 V140 Q50 150 24 140Z" fill="${RUST}"/>${face('<path d="M33 30 L37 6 H63 L67 30 Q50 35 33 30Z" fill="#a8323b"/><path d="M50 6 Q74 4 72 24" stroke-width="2"/><path d="M72 24 v8" stroke-width="4"/>')}`);
out+=sym('astro-suit','0 0 100 200',`<path d="M40 140 V190 M60 140 V190" stroke-width="16"/><path d="M40 140 V190 M60 140 V190" stroke="#6a6872" stroke-width="11.5"/><path d="M28 198 Q30 188 47 190 V198Z M53 198 V190 Q70 188 72 198Z" fill="#3a363f"/><path d="M50 66 Q22 68 18 146 H82 Q78 68 50 66Z" fill="#7d7b84"/><path d="M40 67 L50 96 L60 67Z" fill="#fff"/><path d="M47 72 H53 L56 102 L50 110 L44 102Z" fill="#4f4c57"/>${face('<path d="M31 40 Q30 22 50 22 Q70 22 69 40 Q60 30 50 31 Q40 30 31 40Z" fill="#3a2a20"/>')}`);
out+=sym('redman','0 0 140 170',`<path d="M54 120 Q50 150 46 164 H94 Q90 150 86 120Z" fill="#e8dcc6"/><path d="M6 84 Q8 20 70 18 Q132 20 134 84 Q134 104 70 106 Q6 104 6 84Z" fill="#c9483c"/><path d="M28 104 Q30 132 70 134 Q110 132 112 104" fill="#e8dcc6"/><circle cx="50" cy="70" r="11" fill="#fff"/><circle cx="90" cy="70" r="11" fill="#fff"/><path d="M61 70 H79 M50 92 H90"/><g fill="#f0c9b8" stroke="none"><circle cx="34" cy="42" r="7"/><circle cx="70" cy="34" r="8"/><circle cx="106" cy="44" r="7"/></g><path d="M66 112 H74 L78 138 L70 146 L62 138Z" fill="#4f4c57"/>`);
out+=sym('lazy','0 0 120 60',`<path d="M4 20 Q60 66 116 20" stroke-width="3"/><path d="M30 34 Q60 52 92 30 Q96 22 88 20 Q62 34 36 24 Q26 26 30 34Z" fill="#7b8fa8"/><circle cx="94" cy="18" r="13" fill="#f3cfb0"/><path d="M88 17 q4 3 7 0 M93 24 q3 2 5 0" stroke-width="1.8"/><path d="M84 10 Q94 -4 106 10 Q96 6 84 10Z" fill="#5a3d2b"/>`);
out+=sym('bird','0 0 60 30','<path d="M2 12 Q16 2 28 16 Q42 0 58 8 Q44 10 34 22 Q28 26 24 21 Q16 12 2 12Z" fill="#f6f2ff" stroke-width="1.8"/>');

/* ========== added for episode 4 ========== */
pFace.yawn='<path d="M37 50 Q42 46 47 50 M54 50 Q59 46 64 50"/><ellipse cx="50.5" cy="62" rx="6" ry="6.6" fill="#8e3b2a"/>';
out+=sym('prince-yawn','0 0 100 144',prince('yawn')+limb('M72 96 Q78 84 66 70'));
out+=sym('prince-clap','0 0 100 144',prince('laugh')+limb('M30 98 Q36 90 47 88')+limb('M72 98 Q66 90 55 88')+'<path d="M44 78 l-4 -5 M51 76 v-7 M58 78 l4 -5" stroke-width="1.8"/>');
out+=sym('prince-shrug','0 0 100 144',prince('calm')+limb('M28 96 Q18 92 10 84')+limb('M74 96 Q84 92 92 84'));

/* the king: the robe is wide enough to cover his whole planet */
const kFace={
 calm:'<path d="M92 73 H108" stroke-width="2"/>',
 order:'<ellipse cx="100" cy="76" rx="5" ry="4.4" fill="#8e3b2a"/>',
 plead:'<path d="M93 77 Q100 71 107 77"/><path d="M84 52 L92 49 M116 52 L108 49" stroke-width="1.8"/>'
};
const king=(m,arms)=>`<path d="M58 34 Q60 4 100 2 Q140 4 142 34 V118 H58Z" fill="#b58a3c"/><path d="M72 38 Q74 16 100 14 Q126 16 128 38 V110 H72Z" fill="#8a2f3c"/><path d="M100 88 Q62 92 46 128 Q22 156 4 196 Q100 216 196 196 Q178 156 154 128 Q138 92 100 88Z" fill="#6a4a8c"/><path d="M4 196 Q100 216 196 196 L192 184 Q100 202 8 184Z" fill="#fbf7ee"/><path d="M82 92 Q100 108 118 92 L110 196 H90Z" fill="#fbf7ee"/><g fill="${INK}" stroke="none"><path d="M97 118 l3 7 l3 -7z M96 142 l3 7 l3 -7z M98 166 l3 7 l3 -7z M40 188 l3 7 l3 -7z M66 192 l3 7 l3 -7z M132 192 l3 7 l3 -7z M158 188 l3 7 l3 -7z"/></g><ellipse cx="100" cy="60" rx="21" ry="24" fill="#f0cdb0"/><path d="M79 62 Q78 98 100 108 Q122 98 121 62 Q116 72 108 69 Q100 65 92 69 Q84 72 79 62Z" fill="#f4f1ea"/><circle cx="92" cy="57" r="6.6" fill="#fff"/><circle cx="108" cy="57" r="6.6" fill="#fff"/><path d="M98.6 57 H101.4" stroke-width="2"/><path d="M80 42 L77 18 L90 30 L100 12 L110 30 L123 18 L120 42 Q100 48 80 42Z" fill="#eab543"/>${kFace[m]}${arms}`;
const sleeve=d=>limb(d,'#6a4a8c',15);
out+=sym('king-calm','0 0 200 206',king('calm',''));
out+=sym('king-order','0 0 200 206',king('order',sleeve('M130 116 Q150 112 160 92')+'<circle cx="161" cy="88" r="7" fill="#f0cdb0"/><path d="M162 82 V70" stroke-width="5"/><path d="M162 82 V71" stroke="#f0cdb0" stroke-width="2"/>'));
out+=sym('king-wide','0 0 200 206',king('order',sleeve('M132 116 Q156 112 176 84')+sleeve('M68 116 Q44 112 24 84')+'<circle cx="178" cy="80" r="7" fill="#f0cdb0"/><circle cx="22" cy="80" r="7" fill="#f0cdb0"/>'));
out+=sym('king-plead','0 0 200 206',king('plead',sleeve('M132 116 Q152 116 170 108')+'<circle cx="173" cy="107" r="7" fill="#f0cdb0"/>'));

/* the swank */
const swHat=`<path d="M20 34 Q50 42 80 34 Q78 28 70 28 L66 2 H34 L30 28 Q22 28 20 34Z" fill="#d9772f"/><path d="M31 24 Q50 30 69 24" stroke="#3f7f86" stroke-width="5"/><path d="M66 22 Q88 -6 98 8 Q92 22 68 26Z" fill="#3f7f86"/>`;
const swBody=`<path d="M42 138 V168 M58 138 V168" stroke-width="13"/><path d="M42 138 V168 M58 138 V168" stroke="#f1d24a" stroke-width="8.6"/><path d="M28 178 Q32 167 48 169 V178Z M52 178 V169 Q68 167 72 178Z" fill="#8a2f3c"/><path d="M50 68 Q24 70 18 144 Q50 152 82 144 Q76 70 50 68Z" fill="#3f9a8c"/><path d="M50 72 V146" /><path d="M50 78 L34 70 V88Z M50 78 L66 70 V88Z" fill="#c23a50"/><g fill="#eab543" stroke-width="1.6"><circle cx="43" cy="102" r="3.4"/><circle cx="43" cy="118" r="3.4"/><circle cx="57" cy="102" r="3.4"/><circle cx="57" cy="118" r="3.4"/></g><ellipse cx="50" cy="47" rx="19" ry="21" fill="#f0cdb0"/>`;
const swGlass='<circle cx="42" cy="47" r="6.6" fill="#fff"/><circle cx="58" cy="47" r="6.6" fill="#fff"/><path d="M48.6 47 H51.4" stroke-width="2"/><path d="M34 60 Q42 54 50 59 Q58 54 66 60" stroke-width="3"/><path d="M44 63 Q50 67 56 63"/>';
const cuff=d=>limb(d,'#3f9a8c',12);
out+=sym('swank-pose','0 0 100 180',swBody+swGlass+swHat+cuff('M28 90 Q8 104 24 120')+cuff('M72 90 Q92 104 76 120'));
out+=sym('swank-hat','0 0 100 180',swBody+swGlass+'<path d="M31 42 Q32 24 50 24 Q68 24 69 42 Q60 32 50 33 Q40 32 31 42Z" fill="#3a2a20"/>'+`<g transform="translate(62 -22) rotate(16 50 30)">${swHat}</g>`+cuff('M72 92 Q92 78 98 34')+cuff('M28 92 Q10 106 26 120'));
out+=sym('swank-lean','0 0 100 180',`<g transform="rotate(10 50 178)">${swBody+swGlass+swHat}${cuff('M72 92 Q88 84 92 64')}${cuff('M28 92 Q10 106 26 120')}</g>`);

/* the drinker: no spectacles and no hat */
out+=sym('drinker','0 0 120 150',`<path d="M60 62 Q30 66 22 132 H98 Q90 66 60 62Z" fill="#7a6a5c"/><path d="M46 66 L60 84 L74 66" fill="#cfc3b2"/><g transform="rotate(8 60 50)"><ellipse cx="60" cy="44" rx="20" ry="23" fill="#e3b79a"/><path d="M40 40 Q36 18 60 18 Q84 18 80 40 Q74 28 66 30 Q52 32 46 28 Q42 32 40 40Z" fill="#6b5a4a"/><path d="M46 46 Q51 51 56 46 M64 46 Q69 51 74 46"/><path d="M45 40 L54 37 M75 40 L66 37" stroke-width="1.8"/><path d="M53 60 Q60 55 67 60"/><ellipse cx="60" cy="52" rx="4" ry="3.4" fill="#d98a78" stroke-width="1.6"/><path d="M44 58 q3 6 8 8 M76 58 q-3 6 -8 8" stroke-width="1.2" opacity=".6"/></g>${limb('M34 96 Q36 116 54 118','#7a6a5c',13)}${limb('M86 96 Q86 116 72 116','#7a6a5c',13)}<path d="M4 128 H116 V138 H4Z" fill="#a5784c"/><path d="M56 104 H74 L72 128 H58Z" fill="#e7eef0" fill-opacity=".8"/><path d="M57 114 H73 L72 128 H58Z" fill="#a8452f" stroke="none"/>`);
out+=sym('bottle-full','0 0 24 60','<path d="M9 4 H15 V20 Q21 24 21 32 V58 H3 V32 Q3 24 9 20Z" fill="#5f7a55"/><path d="M5 36 H19 V50 H5Z" fill="#e9dcc3" stroke-width="1.4"/><path d="M9 2 H15 V8 H9Z" fill="#7a5236" stroke-width="1.6"/>');
out+=sym('bottle-empty','0 0 24 60','<path d="M9 4 H15 V20 Q21 24 21 32 V58 H3 V32 Q3 24 9 20Z" fill="#dfe8dc" fill-opacity=".35"/><path d="M5 36 H19 V50 H5Z" fill="#e9dcc3" fill-opacity=".6" stroke-width="1.4"/>');
out+=sym('rat','0 0 80 44','<path d="M10 34 Q8 12 34 12 Q54 10 64 24 Q74 30 70 34Z" fill="#8f8a92"/><circle cx="50" cy="14" r="7" fill="#b9a6a8"/><circle cx="62" cy="26" r="1.8" fill="#2a2533"/><path d="M10 32 Q-6 30 2 16" /><path d="M70 31 l8 -3 M70 33 l8 2 M22 34 v5 M54 34 v5" stroke-width="1.6"/>');
out+=sym('general','0 0 160 170',`<g fill="#f0a9b8"><path d="M66 78 Q10 14 6 64 Q8 104 64 96Z M94 78 Q150 14 154 64 Q152 104 96 96Z"/><path d="M66 98 Q20 104 34 134 Q52 142 70 108Z M94 98 Q140 104 126 134 Q108 142 90 108Z" fill="#f6d27a"/></g><path d="M74 126 V160 M86 126 V160" stroke-width="11"/><path d="M74 126 V160 M86 126 V160" stroke="#5c6b8a" stroke-width="7"/><path d="M80 60 Q58 62 56 128 H104 Q102 62 80 60Z" fill="#5c6b8a"/><g fill="#eab543" stroke-width="1.6"><circle cx="68" cy="86" r="4"/><circle cx="68" cy="98" r="4"/><circle cx="92" cy="86" r="4"/><circle cx="92" cy="98" r="4"/></g><ellipse cx="80" cy="44" rx="16" ry="18" fill="#f0cdb0"/><circle cx="74" cy="44" r="5.4" fill="#fff"/><circle cx="86" cy="44" r="5.4" fill="#fff"/><path d="M70 54 Q80 48 90 54" stroke-width="4"/><path d="M58 30 Q80 40 102 30 L98 20 Q80 6 62 20Z" fill="#3d4a66"/><path d="M76 10 Q72 0 64 2 M84 10 Q88 0 96 2"/>`);

/* ========== added for episode 5 ========== */
/* the businessman: the same red face and blank spectacles as the man in Episode 3 */
const bz=(mouth,arms)=>`<path d="M100 66 Q62 68 52 124 H148 Q138 68 100 66Z" fill="#4f5468"/><path d="M86 68 L100 96 L114 68Z" fill="#fff"/><path d="M96 74 H104 L108 104 L100 112 L92 104Z" fill="#8a2f3c"/><ellipse cx="100" cy="42" rx="27" ry="27" fill="#d9705c"/><path d="M76 30 Q84 14 100 14 Q118 14 124 30 Q112 22 100 23 Q88 22 76 30Z" fill="#4a3426"/><circle cx="90" cy="42" r="7.6" fill="#fff"/><circle cx="110" cy="42" r="7.6" fill="#fff"/><path d="M97.6 42 H102.4" stroke-width="2"/>${mouth}<path d="M116 57 L132 54" stroke-width="5"/><path d="M117 57 L131 54.2" stroke="#fff" stroke-width="2.2"/>${arms}<path d="M10 116 H190 V130 H10Z M20 130 V158 M180 130 V158" fill="#8a6a4c" stroke-width="3"/><path d="M62 104 L98 98 L100 116 H58Z M100 98 L138 104 L142 116 H100Z" fill="#fffdf4"/><path d="M70 108 H92 M108 106 H132 M70 112 H90 M110 111 H130" stroke-width="1.4"/><path d="M24 100 H48 V116 H24Z" fill="#fffdf4"/><path d="M22 96 H46 V100" fill="none" stroke-width="1.6"/>`;
const bzA=limb('M58 92 Q52 108 72 110','#4f5468',13)+limb('M142 92 Q150 106 132 108','#4f5468',13)+'<path d="M128 112 L140 88" stroke-width="3"/>';
out+=sym('biz-count','0 0 200 160',bz('<path d="M92 58 Q100 55 108 58"/>',bzA));
out+=sym('biz-talk','0 0 200 160',bz('<ellipse cx="100" cy="58" rx="6" ry="4" fill="#8e3b2a"/>',bzA));
out+=sym('biz-stuck','0 0 200 160',bz('<ellipse cx="100" cy="59" rx="6" ry="7" fill="#8e3b2a"/>',bzA));
out+=sym('beetle','0 0 60 50','<ellipse cx="30" cy="28" rx="18" ry="16" fill="#3f6b4f"/><path d="M30 12 V44 M18 18 Q30 22 42 18"/><path d="M13 22 L4 16 M12 30 H2 M14 38 L6 44 M47 22 L56 16 M48 30 H58 M46 38 L54 44 M26 12 L22 4 M34 12 L38 4" stroke-width="2"/>');

/* the lamplighter: eyes you can see */
const lmFace={
 calm:dot(43,47,2,2.8)+dot(57,47,2,2.8)+'<path d="M40 41 L47 42 M60 41 L53 42" stroke-width="1.8"/><path d="M45 60 H55"/>',
 tired:'<path d="M39 48 Q43 51 47 48 M53 48 Q57 51 61 48"/><path d="M40 41 L47 39 M60 41 L53 39" stroke-width="1.8"/><path d="M44 61 Q50 57 56 61"/><path d="M30 50 q-4 7 0 9 q4 -2 0 -9z" fill="#8fc4dd" stroke-width="1.3"/>',
 cross:dot(43,48,2,2.6)+dot(57,48,2,2.6)+'<path d="M38 41 L47 44 M62 41 L53 44"/><ellipse cx="50" cy="61" rx="5" ry="3.4" fill="#8e3b2a"/>'
};
const lm=(f,arms)=>`<path d="M42 130 V168 M58 130 V168" stroke-width="13"/><path d="M42 130 V168 M58 130 V168" stroke="#5b6b52" stroke-width="8.6"/><path d="M28 178 Q32 167 48 169 V178Z M52 178 V169 Q68 167 72 178Z" fill="#4a3426"/><path d="M50 70 Q26 72 22 136 Q50 144 78 136 Q74 72 50 70Z" fill="#c98f3a"/><path d="M50 72 V138 M24 118 H76" stroke-width="1.8"/><ellipse cx="50" cy="48" rx="19" ry="22" fill="#f0cdb0"/><path d="M28 36 Q50 44 74 36 L80 40 Q66 28 72 24 Q62 10 46 14 Q30 16 28 36Z" fill="#6b4a3a"/>${lmFace[f]}${arms}`;
const lmS=d=>limb(d,'#c98f3a',13);
out+=sym('lampman-stand','0 0 100 180',lm('calm',lmS('M28 92 Q20 108 24 122')+lmS('M72 92 Q82 108 78 122')));
out+=sym('lampman-light','0 0 100 180',lm('calm',lmS('M28 92 Q20 108 24 122')+lmS('M72 92 Q88 82 92 58')+'<path d="M92 60 L98 8" stroke-width="3"/><path d="M98 10 q-5 -8 0 -14 q5 6 0 14z" fill="#f6c945" stroke-width="1.4"/>'));
out+=sym('lampman-mop','0 0 100 180',lm('tired',lmS('M28 92 Q20 108 24 122')+lmS('M72 92 Q84 76 70 52')+'<path d="M58 30 H78 V48 H58Z" fill="#fff"/><path d="M58 36 H78 M58 42 H78 M65 30 V48 M72 30 V48" stroke="#c23a50" stroke-width="2.6"/>'));
out+=sym('lampman-cross','0 0 100 180',lm('cross',lmS('M28 92 Q10 88 8 70')+lmS('M72 92 Q90 88 92 70')));
const post='<path d="M22 60 V196 M38 60 V196" stroke-width="2"/><path d="M27 62 H33 V188 H27Z M16 188 H44 V198 H16Z" fill="#4a4f58"/>';
const head=c=>`<path d="M14 18 H46 L40 60 H20Z" fill="${c}"/><path d="M10 18 L30 2 L50 18Z M18 60 H42 V66 H18Z" fill="#4a4f58"/>`;
out+=sym('lamp-on','0 0 60 200','<circle cx="30" cy="40" r="52" fill="#ffe9a0" opacity=".28" stroke="none"/><circle cx="30" cy="40" r="32" fill="#ffe9a0" opacity=".4" stroke="none"/>'+post.replace(/<path d="M22[^>]*>/,'')+head('#ffe28a')+'<path d="M30 52 q-8 -10 0 -24 q8 14 0 24z" fill="#f08a3c" stroke-width="1.6"/>');
out+=sym('lamp-off','0 0 60 200',post.replace(/<path d="M22[^>]*>/,'')+head('#c9d3d8'));

/* the geographer and his book */
const geo=(mouth,arm)=>`<path d="M100 74 Q58 76 44 140 H156 Q142 76 100 74Z" fill="#5d7a66"/><path d="M84 78 L100 100 L116 78" fill="#e9e2d0"/><ellipse cx="100" cy="48" rx="24" ry="26" fill="#f0cdb0"/><path d="M78 56 Q74 100 100 112 Q126 100 122 56 Q114 66 100 64 Q86 66 78 56Z" fill="#f4f1ea"/><circle cx="88" cy="46" r="10" fill="#fff"/><circle cx="112" cy="46" r="10" fill="#fff"/><path d="M98 46 H102" stroke-width="2"/><path d="M76 34 Q72 12 100 12 Q128 12 124 34 Q100 26 76 34Z" fill="#8a2f3c"/>${mouth}${arm}<path d="M6 134 H214 V148 H6Z M20 148 V176 M200 148 V176" fill="#8a6a4c" stroke-width="3"/><path d="M40 134 L48 108 Q76 100 108 112 Q140 100 170 108 L178 134 Q140 124 108 136 Q76 124 40 134Z" fill="#fffdf4"/><path d="M108 112 V136" stroke-width="1.8"/><path d="M60 116 H92 M58 122 H94 M122 116 H158 M122 122 H160" stroke="#b9ad92" stroke-width="2"/><path d="M184 134 V116 H210 V134Z M186 116 V102 H208 V116Z" fill="#8a2f3c"/>`;
const gS=d=>limb(d,'#5d7a66',14);
out+=sym('geo-calm','0 0 220 180',geo('<path d="M94 76 H106" stroke-width="2"/>',gS('M54 108 Q46 122 64 126')));
out+=sym('geo-talk','0 0 220 180',geo('<ellipse cx="100" cy="78" rx="5" ry="3.6" fill="#8e3b2a"/>',gS('M54 108 Q46 122 64 126')+gS('M146 106 Q168 98 176 78')+'<circle cx="177" cy="74" r="7" fill="#f0cdb0"/>'));
out+=sym('geo-write','0 0 220 180',geo('<ellipse cx="100" cy="78" rx="5" ry="3.6" fill="#8e3b2a"/>',gS('M54 108 Q46 122 64 126')+gS('M146 108 Q164 112 150 124'))+'<path d="M146 128 L162 94" stroke-width="5"/><path d="M147 126 L161 96" stroke="#eab543" stroke-width="2"/>');

/* ========== added for episode 6 ========== */
const sitLegs=`<path d="M34 100 Q28 122 18 130 H44 L50.5 112 L57 130 H83 Q73 122 67 100Z" fill="#4c6a78"/><path d="M16 130 Q12 138 18 139 H30 L32 130Z M85 130 Q89 138 83 139 H71 L69 130Z" fill="${SKIN}" stroke-width="2"/>`;
const seated=m=>prince(m).replace(legs,sitLegs);
for(const m of ['calm','sad','ask','down','laugh','cry']) out+=sym('prince-seat'+m,'0 0 100 140',seated(m));
out+=sym('prince-lie','0 0 150 100',`<g transform="translate(148 0) rotate(90)">${prince('cry')}${limb('M30 99 Q28 82 40 68')}</g>`);
out+=sym('prince-anklet','0 0 100 144',prince('calm')+'<path d="M50 128 Q40 134 34 128 M50 132 Q40 139 33 133 M50 124 Q62 120 70 126 Q80 132 86 122" stroke-width="5.4"/><path d="M50 128 Q40 134 34 128 M50 132 Q40 139 33 133 M50 124 Q62 120 70 126 Q80 132 86 122" stroke="#f0cf6a" stroke-width="2.8"/>');
out+=sym('prince-call','0 0 100 144',prince('ask')+limb('M30 98 Q28 82 38 66')+limb('M72 98 Q74 82 63 66'));
const sn=d=>`<path d="${d}" stroke-width="10"/><path d="${d}" stroke="#f0cf6a" stroke-width="5.8"/>`;
out+=sym('gsnake-ring','0 0 120 60','<ellipse cx="60" cy="38" rx="44" ry="15" stroke-width="10"/><ellipse cx="60" cy="38" rx="44" ry="15" stroke="#f3e3a8" stroke-width="5.8"/>');
out+=sym('gsnake-up','0 0 100 110',sn('M8 98 Q30 84 52 98 Q76 112 88 94 Q94 78 70 76 Q44 74 46 52 Q48 36 58 30')+'<path d="M52 34 Q50 18 64 18 Q78 22 76 30 Q70 40 58 40Z" fill="#f0cf6a"/><circle cx="67" cy="26" r="1.9" fill="#2a2533"/><path d="M77 29 l8 2 M85 31 l4 -3 M85 31 l4 3" stroke="#b9583a" stroke-width="1.5"/>');
out+=sym('dflower','0 0 60 90','<path d="M30 40 Q28 62 31 88" stroke-width="4.6"/><path d="M30 40 Q28 62 31 88" stroke="#8a9a5e" stroke-width="2"/><g fill="#f4f0e2" stroke-width="2"><path d="M30 30 Q14 12 26 2 Q42 2 34 28Z M30 34 Q8 26 4 40 Q12 54 30 38Z M32 34 Q52 26 57 40 Q50 54 32 38Z"/></g><circle cx="31" cy="34" r="8" fill="#eab543"/><circle cx="28" cy="33" r="1.4" fill="#2a2533"/><circle cx="34" cy="33" r="1.4" fill="#2a2533"/><path d="M29 37 q2 2 4 0" stroke-width="1.3"/>');
out+=sym('camel','0 0 120 90','<path d="M22 48 Q32 44 40 32 Q48 14 58 32 Q68 14 78 34 Q84 44 92 40 Q98 20 102 12 Q114 8 116 18 L106 24 Q104 50 92 58 L90 86 H84 L82 60 H40 L38 86 H32 L30 58 Q22 56 22 48Z" fill="#b98a5c"/><path d="M22 48 q-8 8 -6 18"/><circle cx="108" cy="15" r="1.4" fill="#2a2533"/>');

/* ========== added for episodes 7 and 8 ========== */
const FOX='#d9772f';
const foxFace={
 calm:dot(38,47,2.4,3.2)+dot(62,47,2.4,3.2)+'<path d="M50 70 V74 M44 76 Q50 79 56 76"/>',
 smile:'<path d="M33 48 Q38 43 43 48 M57 48 Q62 43 67 48"/><path d="M42 74 Q50 82 58 74"/>',
 sad:dot(38,48,2.4,3.2)+dot(62,48,2.4,3.2)+'<path d="M32 42 L41 39 M68 42 L59 39" stroke-width="1.8"/><path d="M44 78 Q50 74 56 78"/>',
 cry:'<path d="M33 47 Q38 51 43 47 M57 47 Q62 51 67 47"/><path d="M32 41 L41 38 M68 41 L59 38" stroke-width="1.8"/><path d="M44 78 Q50 74 56 78"/><path d="M36 52 Q33 59 36 61 Q39 59 36 52Z M64 52 Q61 59 64 61 Q67 59 64 52Z" fill="#8fc4dd" stroke-width="1.3"/>',
 side:dot(41,47,2.4,3.2)+dot(65,47,2.4,3.2)+'<path d="M50 70 V74 M44 76 Q50 78 56 76"/>'
};
const fox=m=>`<path d="M66 118 Q104 122 102 86 Q100 68 88 64 Q94 88 68 100Z" fill="${FOX}"/><path d="M88 64 Q102 68 102 88 Q94 84 92 76Z" fill="#fff"/><path d="M34 66 Q20 102 28 122 H72 Q80 102 66 66Z" fill="${FOX}"/><path d="M40 70 Q44 104 50 108 Q56 104 60 70Z" fill="#fff"/><path d="M42 122 V104 M58 122 V104" stroke-width="2"/><path d="M28 122 Q28 114 36 114 H42 V122Z M72 122 Q72 114 64 114 H58 V122Z" fill="#4a3426"/><path d="M18 8 L34 32 Q50 25 66 32 L82 8 Q90 40 76 56 Q64 72 50 78 Q36 72 24 56 Q10 40 18 8Z" fill="${FOX}"/><path d="M21 16 L31 33 L22 38Z M79 16 L69 33 L78 38Z" fill="#4a3426" stroke-width="1.6"/><path d="M20 50 Q36 52 44 66 L50 78 Q36 72 24 56Z M80 50 Q64 52 56 66 L50 78 Q64 72 76 56Z" fill="#fff" stroke-width="1.6"/><ellipse cx="50" cy="68" rx="4.6" ry="3.4" fill="#2a2533"/>${foxFace[m]}`;
for(const m in foxFace) out+=sym('fox-'+m,'0 0 104 124',fox(m));
out+=sym('fox-back','0 0 104 124',`<path d="M34 60 Q20 100 28 122 H72 Q80 100 66 60Z" fill="${FOX}"/><path d="M50 118 Q18 112 20 84 Q24 66 34 64 Q34 92 56 102Z" fill="${FOX}"/><path d="M34 64 Q20 68 20 86 Q28 84 31 76Z" fill="#fff"/><path d="M18 10 L34 32 Q50 25 66 32 L82 10 Q88 40 76 54 Q64 68 50 70 Q36 68 24 54 Q12 40 18 10Z" fill="${FOX}"/>`);
out+=sym('tree','0 0 140 170','<path d="M58 168 Q66 120 60 84 H80 Q76 120 86 168Z" fill="#8a6a4c"/><path d="M70 6 Q106 4 112 34 Q138 44 126 74 Q122 98 92 94 Q70 108 48 94 Q18 98 14 72 Q4 44 30 34 Q36 4 70 6Z" fill="#7fa663"/><g fill="#c23a50" stroke-width="1.8"><circle cx="44" cy="52" r="7"/><circle cx="92" cy="44" r="7"/><circle cx="70" cy="76" r="7"/><circle cx="106" cy="72" r="6"/><circle cx="64" cy="28" r="6"/></g>');
out+=sym('hen','0 0 60 50','<path d="M8 22 Q6 8 14 6 L20 18 Q36 14 48 20 L58 12 Q58 38 36 42 Q14 42 8 22Z" fill="#fff"/><path d="M8 8 q4 -8 8 -2" stroke="#c23a50" stroke-width="3"/><circle cx="13" cy="13" r="1.6" fill="#2a2533"/><path d="M7 14 l-6 2 l6 2 M26 42 v6 M36 41 v7" stroke-width="1.8"/>');

/* signalman and shopkeeper */
lmFace.blank='<circle cx="42" cy="48" r="7" fill="#fff"/><circle cx="58" cy="48" r="7" fill="#fff"/><path d="M49 48 H51" stroke-width="2"/><path d="M44 61 Q50 65 56 61"/>';
const recol=(s,a,b)=>s.split('#c98f3a').join(a).split('#6b4a3a').join(b).split('#5b6b52').join('#3f4654');
out+=sym('signal-stand','0 0 100 180',recol(lm('calm',lmS('M28 92 Q20 108 24 122')+lmS('M72 92 Q82 108 78 122')),'#4a5f86','#2f3c5c'));
out+=sym('signal-point','0 0 100 180',recol(lm('calm',lmS('M28 92 Q20 108 24 122')+lmS('M72 92 Q88 90 96 74')),'#4a5f86','#2f3c5c'));
const apron='<path d="M36 92 H64 L70 138 Q50 144 30 138Z" fill="#fff"/>';
out+=sym('shop-stand','0 0 100 180',recol(lm('blank',apron+lmS('M28 92 Q18 108 34 116')+lmS('M72 92 Q88 92 92 80')+'<path d="M88 74 H98 V62 H88Z" fill="#dff0f4"/><circle cx="93" cy="69" r="2.4" fill="#c23a50" stroke-width="1"/>'),'#8f8d95','#4f4c57'));
const car=(x,k)=>`<path d="M${x} 18 H${x+92} V58 H${x}Z" fill="${k?'#8a2f3c':'#7a2a36'}"/><g fill="#ffe28a" stroke-width="1.8"><path d="M${x+8} 26 h20 v16 h-20z M${x+36} 26 h20 v16 h-20z M${x+64} 26 h20 v16 h-20z"/></g><circle cx="${x+20}" cy="62" r="7" fill="#3a363f"/><circle cx="${x+72}" cy="62" r="7" fill="#3a363f"/>`;
out+=sym('train','0 0 420 72',car(0,1)+car(98,0)+car(196,1)+'<path d="M294 18 H366 Q408 20 414 58 H294Z" fill="#4a5f86"/><path d="M362 26 H376 Q392 28 397 42 H362Z" fill="#dff0f4" stroke-width="1.8"/><circle cx="406" cy="50" r="4" fill="#ffe28a"/><circle cx="318" cy="62" r="7" fill="#3a363f"/><circle cx="380" cy="62" r="7" fill="#3a363f"/>');

/* the well */
const wellBack='<path d="M26 112 V22 M114 112 V22" stroke-width="10"/><path d="M26 112 V22 M114 112 V22" stroke="#a5784c" stroke-width="5.4"/><path d="M12 26 L70 2 L128 26Z" fill="#a85b4f"/><path d="M26 34 H114" stroke-width="5"/><circle cx="70" cy="42" r="11" fill="#a5784c"/><circle cx="70" cy="42" r="3" fill="#2a2533"/>';
const wellFront='<path d="M8 104 H132 L124 160 H16Z" fill="#b3aa9b"/><path d="M4 98 H136 V110 H4Z" fill="#c9c1b2"/><path d="M12 126 H128 M15 144 H125 M44 110 V126 M88 110 V126 M30 126 V144 M66 126 V144 M106 126 V144 M50 144 V160 M92 144 V160" stroke-width="1.5"/>';
out+=sym('well','0 0 140 162',wellBack+'<path d="M60 44 V84" stroke-width="2"/><path d="M48 84 H72 L69 100 H51Z" fill="#8fb1b8"/>'+wellFront);
out+=sym('bucket','0 0 60 56','<path d="M8 14 Q30 -10 52 14" stroke-width="2"/><path d="M6 14 H54 L48 52 H12Z" fill="#8fb1b8"/><ellipse cx="30" cy="14" rx="24" ry="6" fill="#bfe6f2"/><path d="M18 14 q6 -3 12 0 q6 3 12 0" stroke="#fff" stroke-width="2"/>');
out+=sym('prince-rope','0 0 100 144',prince('laugh')+limb('M30 98 Q16 92 4 84')+limb('M70 100 Q36 108 4 94'));
out+=sym('prince-sip','0 0 100 144',prince('down')+limb('M30 99 Q34 88 42 82')+limb('M72 99 Q68 88 60 82')+'<path d="M34 68 H68 L63 92 H39Z" fill="#8fb1b8"/><path d="M36 72 H66" stroke="#bfe6f2" stroke-width="3"/>');
pFace.blush='<g stroke="none" fill="#e8745c" opacity=".75"><ellipse cx="36" cy="57" rx="7" ry="5"/><ellipse cx="65" cy="57" rx="7" ry="5"/></g><path d="M38 50 Q42 54 46 50 M55 50 Q59 54 63 50"/><path d="M46 62 Q50.5 64 55 62"/>';
pFace.brave=dot(42,50)+dot(59,50)+'<path d="M37 43 L45 41 M64 43 L56 41" stroke-width="1.8"/><path d="M44 60 Q50.5 66 57 60"/>';
out+=sym('prince-blush','0 0 100 144',prince('blush'));
out+=sym('prince-brave','0 0 100 144',prince('brave'));
out+=sym('prince-seatbrave','0 0 100 140',seated('brave'));
out+=sym('prince-seatback','0 0 100 140',prince('calm').replace(legs,sitLegs)+`<path d="M28 60 Q18 56 22 48 L14 44 Q22 40 21 34 L15 24 Q26 25 30 19 L32 8 Q40 14 46 11 L56 2 Q58 11 64 12 L76 10 Q74 18 78 24 L89 27 Q82 33 82 40 L88 50 Q80 54 74 62 L62 72 L52 68 L40 73 Z" fill="${GOLD}"/><path d="M36 34 Q40 44 36 54 M54 28 Q58 42 53 58 M68 38 Q69 48 64 56" stroke-width="1.6" opacity=".6"/>`);
out+=sym('prince-rest','0 0 150 100',`<g transform="translate(148 0) rotate(90)">${prince('down')}</g>`);
piFace.cry='<path d="M39 51 Q43 55 47 51 M54 51 Q58 55 62 51"/><path d="M37 45 L45 43 M64 45 L56 43" stroke-width="1.8"/><path d="M45 66 Q50.5 62 56 66"/><path d="M41 55 Q38 62 41 64 Q44 62 41 55Z M60 55 Q57 62 60 64 Q63 62 60 55Z" fill="#8fc4dd" stroke-width="1.3"/>';
out+=sym('pilot-cry','0 0 100 160',pilot('cry'));
out+=sym('pilot-drink','0 0 100 160',pilot('sleep')+limb('M70 92 Q88 84 68 66','#7d8258',13)+'<path d="M52 58 H72 V72 H58Z" fill="#9fb4b0"/>');
out+=sym('pilot-back','0 0 100 160',pilot('calm')+'<path d="M28 56 Q22 22 50.5 21 Q79 22 73 56 Q70 78 50.5 78 Q31 78 28 56Z" fill="#7a5236"/><path d="M50.5 22 V77 M29 44 Q50 50 72 44" stroke-width="1.8"/><path d="M40 78 Q50 84 61 78 L61 88 Q50 92 40 88Z" fill="#7d8258" stroke="none"/>');

document.currentScript.insertAdjacentHTML('afterend',`<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>${out}</defs></svg>`);
})();
