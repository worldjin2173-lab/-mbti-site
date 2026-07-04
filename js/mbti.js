var msCur=0;
var msScores={E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0};
var msQ=[
{emoji:"🎉",text:"주말에 친구들과 파티가 생겼다!",a:"신나서 바로 참석한다",b:"집에서 쉬고 싶은데...",type:"EI"},
{emoji:"💭",text:"새로운 아이디어를 떠올릴 때 나는?",a:"현실적으로 가능한 것부터 생각한다",b:"상상력을 마음껏 펼친다",type:"SN"},
{emoji:"⚖️",text:"친구가 고민을 털어놓을 때 나는?",a:"해결책을 먼저 제시한다",b:"공감하고 감정을 들어준다",type:"TF"},
{emoji:"📅",text:"여행 계획을 세울 때 나는?",a:"꼼꼼하게 일정을 짠다",b:"즉흥적으로 떠난다",type:"JP"},
{emoji:"📞",text:"모르는 번호로 전화가 왔을 때?",a:"바로 받는다",b:"문자로 먼저 확인한다",type:"EI"},
{emoji:"🎨",text:"취미 활동을 고를 때 나는?",a:"실용적이고 배울 수 있는 것",b:"창의적이고 상상력이 필요한 것",type:"SN"},
{emoji:"😤",text:"친구가 잘못했을 때 나는?",a:"직접적으로 말해준다",b:"감정을 다치지 않게 돌려 말한다",type:"TF"},
{emoji:"🗂️",text:"과제나 업무를 할 때 나는?",a:"미리미리 계획하고 끝낸다",b:"마감 직전에 집중해서 한다",type:"JP"},
{emoji:"🏫",text:"첫 만나는 자리에서 나는?",a:"먼저 말을 걸고 분위기를 띄운다",b:"조용히 관찰하다가 친해진다",type:"EI"},
{emoji:"🔍",text:"정보를 받아들일 때 나는?",a:"사실과 세부사항을 중시한다",b:"전체적인 패턴과 가능성을 본다",type:"SN"},
{emoji:"🤝",text:"팀 프로젝트에서 갈등이 생기면?",a:"논리적으로 문제를 분석한다",b:"팀원의 감정을 먼저 챙긴다",type:"TF"},
{emoji:"🛒",text:"쇼핑할 때 나는?",a:"살 것을 미리 정해두고 간다",b:"구경하다가 마음에 드는 걸 산다",type:"JP"},
{emoji:"🎤",text:"발표나 공연 전날 나는?",a:"설레고 기대된다",b:"긴장되고 피하고 싶다",type:"EI"},
{emoji:"📖",text:"책을 읽을 때 나는?",a:"실용서나 정보성 책을 선호한다",b:"소설이나 판타지 같은 상상력 책을 선호한다",type:"SN"},
{emoji:"💔",text:"누군가 나를 비판했을 때 나는?",a:"틀린 부분이 있으면 인정한다",b:"상처를 받고 오래 생각한다",type:"TF"},
{emoji:"⏰",text:"약속 시간에 대해 나는?",a:"항상 일찍 도착한다",b:"딱 맞춰 오거나 조금 늦는다",type:"JP"},
{emoji:"🌙",text:"혼자 있는 시간이?",a:"에너지를 소모하는 느낌",b:"에너지를 충전하는 느낌",type:"EI"},
{emoji:"🌟",text:"미래에 대해 생각할 때 나는?",a:"현실적인 계획을 세운다",b:"꿈꾸고 상상하는 걸 즐긴다",type:"SN"},
{emoji:"🧩",text:"문제를 해결할 때 나는?",a:"객관적인 사실을 바탕으로 판단한다",b:"나의 느낌과 가치관을 중요시한다",type:"TF"},
{emoji:"🌈",text:"하루 일과가 끝난 후 나는?",a:"내일 할 일을 미리 정리한다",b:"그냥 자연스럽게 흘러가도록 둔다",type:"JP"}
];

function msShow(id){
  document.querySelectorAll('.ms-screen').forEach(function(s){s.classList.remove('active');});
  var el=document.getElementById(id);
  if(el) el.classList.add('active');
}
function msStart(){
  msCur=0;
  msScores={E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0};
  msShow('ms-test');
  msShowQ();
}
function msShowQ(){
  var q=msQ[msCur];
  var prog=Math.round((msCur/msQ.length)*100);
  var pt=document.getElementById('ms-prog-txt');
  var pp=document.getElementById('ms-prog-pct');
  var pf=document.getElementById('ms-prog-fill');
  if(pt) pt.textContent=(msCur+1)+' / '+msQ.length;
  if(pp) pp.textContent=prog+'%';
  if(pf) pf.style.width=prog+'%';
  var qe=document.getElementById('ms-q-emoji');
  var qt=document.getElementById('ms-q-text');
  var ba=document.getElementById('ms-btn-a');
  var bb=document.getElementById('ms-btn-b');
  if(qe) qe.textContent=q.emoji;
  if(qt) qt.textContent=q.text;
  if(ba) ba.textContent=q.a;
  if(bb) bb.textContent=q.b;
}
function msAnswer(ch){
  var q=msQ[msCur];
  if(q.type==='EI'){if(ch==='a') msScores.E++; else msScores.I++;}
  else if(q.type==='SN'){if(ch==='a') msScores.S++; else msScores.N++;}
  else if(q.type==='TF'){if(ch==='a') msScores.T++; else msScores.F++;}
  else if(q.type==='JP'){if(ch==='a') msScores.J++; else msScores.P++;}
  msCur++;
  if(msCur>=msQ.length){msShowLoading();}
  else{msShowQ();}
}
function msShowLoading(){
  msShow('ms-loading');
  var fill=document.getElementById('ms-load-fill');
  var w=0;
  var iv=setInterval(function(){
    w+=2;
    if(fill) fill.style.width=w+'%';
    if(w>=100){clearInterval(iv);msShowResult();}
  },30);
}
var msData={
INTJ:{emoji:"🏰",name:"혼자서도 완벽한 전략가",color:"#2c3e50",
desc:"머릿속에 항상 큰 그림이 그려져 있는 타입이에요. 목표를 정하면 어떤 어려움이 있어도 흔들리지 않고 끝까지 밀어붙이는 강한 의지를 가지고 있어요. 겉으로는 차갑고 냉정해 보일 수 있지만, 사실 내면에는 뜨거운 열정과 깊은 감수성이 숨어있어요.",
str:"한번 목표를 정하면 절대 포기하지 않는 강철 같은 의지력, 복잡한 문제도 빠르게 핵심을 파악하는 날카로운 분석력, 5년·10년 앞을 내다보는 장기적 전략적 사고가 강점이에요.",
weak:"완벽하지 않으면 시작이 어려운 완벽주의의 함정, 속으로는 깊이 느끼지만 표현을 잘 안 해서 차갑다는 오해를 받기도 해요.",
love:"가볍게 만나는 연애에는 관심이 없고, 깊고 진지한 관계를 원해요. 감정 표현보다 행동으로 사랑을 증명하는 타입이에요.",
job:"과학자·연구원·데이터 분석가, 소프트웨어 엔지니어·AI 연구원, 경영 컨설턴트·전략기획자 등이 잘 맞아요.",
famous:"일론 머스크, 마크 저커버그, 크리스토퍼 놀란 감독",
compat:"💚 잘 맞는 유형: ENFP, ENTP\n❌ 충돌 유형: ESFP, ESFJ",
products:[
{icon:"🌬️",name:"휴대용 미니 선풍기",sub:"혼자 집중하는 INTJ의 여름 필수템",url:"https://link.coupang.com/a/e6pbm4Zb08"},
{icon:"❄️",name:"냉감 쿨매트",sub:"더운 여름 밤도 쾌적하게 숙면",url:"https://link.coupang.com/a/e6xRecZh8u"},
{icon:"🧴",name:"쿨링 스프레이",sub:"순식간에 시원해지는 더위 탈출템",url:"https://link.coupang.com/a/e6yaSBkLZY"}
]},
INTP:{emoji:"🔬",name:"생각이 너무 많은 천재",color:"#8e44ad",
desc:"끊임없이 새로운 아이디어를 탐구하고 분석하는 걸 즐기는 타입이에요. 논리적인 사고와 독창적인 발상이 뛰어나고, 복잡한 개념도 쉽게 이해해요.",
str:"뛰어난 논리적 분석력, 창의적이고 독창적인 문제 해결 능력, 지적 호기심이 넘쳐서 다양한 분야를 깊이 파고들어요.",
weak:"현실적인 실행보다 생각에 오래 머무는 경향, 사람들과 감정적으로 연결되는 것이 어려울 수 있어요.",
love:"지적 교감을 중요하게 생각해요. 대화가 잘 통하는 파트너를 원하고, 감정 표현은 서툴지만 마음속으로는 깊이 아껴요.",
job:"소프트웨어 개발자, 철학자·연구원, 수학자·통계학자, 작가 등이 잘 맞아요.",
famous:"아인슈타인, 빌 게이츠, 찰스 다윈",
compat:"💚 잘 맞는 유형: ENTJ, ENFJ\n❌ 충돌 유형: ESFJ, ESTJ",
products:[
{icon:"❄️",name:"미니 에어컨·냉풍기",sub:"집에서 집중할 때 시원한 환경 필수",url:"https://link.coupang.com/a/e6x7Vhg6ou"},
{icon:"🧴",name:"쿨링 스프레이",sub:"더위를 순식간에 날려버려요",url:"https://link.coupang.com/a/e6yaSBkLZY"},
{icon:"🌬️",name:"휴대용 미니 선풍기",sub:"어디서든 시원하게!",url:"https://link.coupang.com/a/e6pbm4Zb08"}
]},
ENTJ:{emoji:"👑",name:"타고난 리더",color:"#c0392b",
desc:"목표를 향해 돌진하는 강력한 리더십을 가진 타입이에요. 효율을 최우선으로 생각하고, 팀을 이끌며 결과를 만들어내는 데 탁월해요.",
str:"강력한 리더십과 추진력, 전략적 사고와 빠른 의사결정, 높은 목표를 설정하고 달성하는 능력이 뛰어나요.",
weak:"지나치게 강압적으로 느껴질 수 있고, 타인의 감정을 간과하는 경우가 있어요.",
love:"연애에서도 리드하는 편이에요. 능력 있고 독립적인 파트너를 좋아하고, 함께 성장하는 관계를 원해요.",
job:"CEO·경영자, 변호사, 투자자, 정치인 등 리더십이 필요한 모든 분야에 잘 맞아요.",
famous:"스티브 잡스, 고든 램지, 나폴레옹",
compat:"💚 잘 맞는 유형: INTP, INFP\n❌ 충돌 유형: ISFP, INFP",
products:[
{icon:"☀️",name:"자외선 차단 양산",sub:"강렬한 여름 햇살도 거뜬히",url:"https://link.coupang.com/a/e6xNn9PFAq"},
{icon:"🧴",name:"선크림",sub:"외출 전 필수 자외선 차단",url:"https://link.coupang.com/a/e6pphuCkX6"},
{icon:"🌬️",name:"휴대용 미니 선풍기",sub:"바쁜 일상 속 시원함 유지",url:"https://link.coupang.com/a/e6pbm4Zb08"}
]},
ENTP:{emoji:"💡",name:"아이디어 폭발 발명가",color:"#d35400",
desc:"끊임없이 새로운 아이디어를 쏟아내는 창의적인 타입이에요. 토론을 즐기고 기존의 틀을 깨는 것을 좋아해요.",
str:"창의적이고 혁신적인 사고, 빠른 두뇌 회전과 언변, 어떤 상황에서도 가능성을 찾아내는 능력이 있어요.",
weak:"한 가지에 집중하기 어렵고, 시작은 잘하지만 마무리가 약할 수 있어요.",
love:"지적이고 재미있는 대화를 즐기는 파트너를 원해요. 연애도 신선하고 자극적인 것을 좋아해요.",
job:"기업가·스타트업 창업자, 마케터, 변호사, 방송인 등이 잘 맞아요.",
famous:"토마스 에디슨, 벤자민 프랭클린, 스티브 워즈니악",
compat:"💚 잘 맞는 유형: INTJ, INFJ\n❌ 충돌 유형: ISFJ, ESTJ",
products:[
{icon:"🔊",name:"방수 블루투스 스피커",sub:"어디서든 신나는 음악과 함께",url:"https://link.coupang.com/a/e6pxtoZjBQ"},
{icon:"🌬️",name:"휴대용 미니 선풍기",sub:"아이디어 넘치는 여름을 시원하게",url:"https://link.coupang.com/a/e6pbm4Zb08"},
{icon:"🧴",name:"쿨링 스프레이",sub:"열정만큼 뜨거운 여름을 식혀줘요",url:"https://link.coupang.com/a/e6yaSBkLZY"}
]},
INFJ:{emoji:"🔮",name:"신비로운 예언자",color:"#6c3483",
desc:"깊은 통찰력과 강한 직관으로 사람들을 이해하는 타입이에요. 조용하지만 강한 신념을 가지고 있고, 세상을 더 좋은 곳으로 만들고 싶어해요.",
str:"깊은 공감 능력과 통찰력, 강한 직관과 미래를 내다보는 능력, 진심으로 사람들을 돕고자 하는 마음이 있어요.",
weak:"너무 완벽한 이상을 추구해서 현실에 실망하기도 하고, 혼자 감당하다 지치는 경우가 있어요.",
love:"영혼의 동반자 같은 깊은 연애를 원해요. 표면적인 관계에는 관심이 없고 진정성을 중요하게 여겨요.",
job:"상담사·심리치료사, 작가·시인, 사회복지사, 종교인 등이 잘 맞아요.",
famous:"마틴 루터 킹, 넬슨 만델라, 테일러 스위프트",
compat:"💚 잘 맞는 유형: ENFP, ENTP\n❌ 충돌 유형: ESTP, ESFP",
products:[
{icon:"🧴",name:"쿨링 마스크팩",sub:"지친 피부에 시원한 힐링",url:"https://link.coupang.com/a/e6xPCN1UIe"},
{icon:"❄️",name:"냉감 쿨매트",sub:"편안한 휴식을 위한 필수템",url:"https://link.coupang.com/a/e6xRecZh8u"},
{icon:"🌬️",name:"휴대용 미니 선풍기",sub:"조용한 공간에서 시원하게",url:"https://link.coupang.com/a/e6pbm4Zb08"}
]},
INFP:{emoji:"🌸",name:"몽상가 시인",color:"#a569bd",
desc:"감수성이 풍부하고 이상을 꿈꾸는 낭만적인 타입이에요. 자신만의 가치관이 뚜렷하고, 진정성 있는 삶을 추구해요.",
str:"풍부한 감수성과 창의력, 강한 공감 능력, 자신의 가치관에 충실한 진정성 있는 삶을 살아가요.",
weak:"현실적인 문제에 취약하고, 비판에 쉽게 상처받을 수 있어요.",
love:"로맨틱하고 이상적인 사랑을 꿈꿔요. 감정적 교감을 가장 중요하게 생각해요.",
job:"작가·시인·예술가, 심리상담사, 디자이너, 음악가 등 창의적인 분야가 잘 맞아요.",
famous:"윌리엄 셰익스피어, 오드리 헵번, BTS 뷔",
compat:"💚 잘 맞는 유형: ENFJ, ENTJ\n❌ 충돌 유형: ESTJ, ENTJ",
products:[
{icon:"🧴",name:"쿨링 마스크팩",sub:"감성 충전 힐링 마스크팩",url:"https://link.coupang.com/a/e6xPCN1UIe"},
{icon:"🌬️",name:"휴대용 미니 선풍기",sub:"몽상하는 시간도 시원하게",url:"https://link.coupang.com/a/e6pbm4Zb08"},
{icon:"❄️",name:"냉감 쿨매트",sub:"포근하고 시원한 여름 숙면",url:"https://link.coupang.com/a/e6xRecZh8u"}
]},
ENFJ:{emoji:"🌟",name:"정열적인 선생님",color:"#1a5276",
desc:"사람들을 이끌고 성장시키는 것에 큰 보람을 느끼는 타입이에요. 타인의 감정에 민감하고, 주변 사람들이 행복하길 바라는 마음이 강해요.",
str:"뛰어난 공감 능력과 소통 능력, 사람들에게 동기를 부여하는 리더십, 따뜻하고 포용력 있는 성격이 강점이에요.",
weak:"타인의 기대에 너무 맞추려다 자신을 잃을 수 있고, 거절을 못 해서 지치기도 해요.",
love:"헌신적이고 따뜻한 연애를 해요. 파트너의 성장을 응원하고 함께 발전하는 관계를 원해요.",
job:"교사·교수, 상담사, HR전문가, 사회운동가 등이 잘 맞아요.",
famous:"오프라 윈프리, 버락 오바마, 방탄소년단 RM",
compat:"💚 잘 맞는 유형: INFP, INTP\n❌ 충돌 유형: ISTP, ESTP",
products:[
{icon:"☀️",name:"자외선 차단 양산",sub:"활발한 야외 활동에 필수",url:"https://link.coupang.com/a/e6xNn9PFAq"},
{icon:"🧴",name:"선크림",sub:"피부 건강을 챙기는 따뜻한 선택",url:"https://link.coupang.com/a/e6pphuCkX6"},
{icon:"🧴",name:"쿨링 마스크팩",sub:"바쁜 일상 후 피부 힐링",url:"https://link.coupang.com/a/e6xPCN1UIe"}
]},
ENFP:{emoji:"🦋",name:"자유로운 영혼",color:"#f39c12",
desc:"열정적이고 창의적인 에너지가 넘치는 타입이에요. 새로운 사람과 경험을 사랑하고, 어디서든 가능성을 발견해요.",
str:"넘치는 열정과 창의력, 뛰어난 사교성과 소통 능력, 긍정적인 에너지로 주변을 밝게 만들어요.",
weak:"집중력이 부족하고 한 가지를 끝까지 완수하기 어려울 때가 있어요.",
love:"설레고 낭만적인 연애를 좋아해요. 감정 표현이 풍부하고, 파트너에게 특별한 경험을 선물하고 싶어해요.",
job:"마케터, 배우·방송인, 작가, 상담사, 기업가 등 다양한 분야에서 활약해요.",
famous:"로빈 윌리엄스, 윌 스미스, 아이유",
compat:"💚 잘 맞는 유형: INTJ, INFJ\n❌ 충돌 유형: ISTJ, ESTJ",
products:[
{icon:"🏖️",name:"물놀이 튜브",sub:"자유로운 영혼의 여름 필수템",url:"https://link.coupang.com/a/e6xIRZIAp2"},
{icon:"🔊",name:"방수 블루투스 스피커",sub:"신나는 여름 파티에 필수",url:"https://link.coupang.com/a/e6pxtoZjBQ"},
{icon:"🌬️",name:"휴대용 미니 선풍기",sub:"활발한 ENFP의 여름을 시원하게",url:"https://link.coupang.com/a/e6pbm4Zb08"}
]},
ISTJ:{emoji:"📋",name:"신뢰할 수 있는 관리자",color:"#2e4057",
desc:"책임감이 강하고 신뢰할 수 있는 타입이에요. 체계적이고 꼼꼼하게 일을 처리하며, 약속을 반드시 지키는 성격이에요.",
str:"강한 책임감과 신뢰성, 꼼꼼하고 체계적인 업무 처리 능력, 안정적이고 일관된 성격이 강점이에요.",
weak:"변화에 적응하는 것이 느리고, 새로운 시도보다 검증된 방식을 선호해요.",
love:"안정적이고 지속적인 관계를 원해요. 말보다 행동으로 사랑을 표현하는 타입이에요.",
job:"회계사·세무사, 공무원, 군인·경찰, 의료진, 엔지니어 등이 잘 맞아요.",
famous:"조지 워싱턴, 워렌 버핏, 나타샤 로마노프",
compat:"💚 잘 맞는 유형: ESTP, ESFP\n❌ 충돌 유형: ENFP, ENTP",
products:[
{icon:"🎒",name:"보냉 가방",sub:"꼼꼼한 ISTJ의 여름 외출 준비",url:"https://link.coupang.com/a/e6x9lMLPGe"},
{icon:"🧴",name:"선크림",sub:"철저한 자외선 차단으로 피부 보호",url:"https://link.coupang.com/a/e6pphuCkX6"},
{icon:"❄️",name:"냉감 쿨매트",sub:"규칙적인 수면 패턴을 쾌적하게",url:"https://link.coupang.com/a/e6xRecZh8u"}
]},
ISFJ:{emoji:"🛡️",name:"따뜻한 수호자",color:"#1e8449",
desc:"주변 사람들을 보살피고 지키는 것을 좋아하는 따뜻한 타입이에요. 조용하지만 헌신적이고, 세심한 배려로 사람들의 마음을 따뜻하게 해줘요.",
str:"세심한 배려와 헌신적인 성격, 강한 책임감과 성실함, 다른 사람의 감정을 잘 파악하는 능력이 있어요.",
weak:"자신보다 타인을 먼저 챙기다가 지치기 쉽고, 변화보다는 안정을 선호해요.",
love:"헌신적이고 배려 깊은 연애를 해요. 파트너를 세심하게 챙기고, 안정적인 관계를 원해요.",
job:"간호사·의료진, 교사, 사회복지사, 영양사, 사무직 등이 잘 맞아요.",
famous:"마더 테레사, 케이트 미들턴, 비욘세",
compat:"💚 잘 맞는 유형: ESTP, ESFP\n❌ 충돌 유형: ENTP, ENTJ",
products:[
{icon:"🧴",name:"쿨링 마스크팩",sub:"소중한 사람들을 챙기듯 피부도 챙겨요",url:"https://link.coupang.com/a/e6xPCN1UIe"},
{icon:"🎒",name:"보냉 가방",sub:"가족 나들이에 딱 맞는 보냉백",url:"https://link.coupang.com/a/e6x9lMLPGe"},
{icon:"❄️",name:"냉감 쿨매트",sub:"온 가족이 시원하게 자는 여름",url:"https://link.coupang.com/a/e6xRecZh8u"}
]},
ESTJ:{emoji:"⚖️",name:"엄격한 관리자",color:"#784212",
desc:"규칙과 질서를 중요하게 생각하는 리더형 타입이에요. 체계적으로 일을 추진하고, 맡은 일은 반드시 완수하는 강한 실행력을 가졌어요.",
str:"강한 리더십과 실행력, 체계적이고 조직적인 업무 능력, 신뢰할 수 있는 책임감이 강점이에요.",
weak:"융통성이 부족하고, 너무 원칙적이어서 주변을 불편하게 할 수 있어요.",
love:"안정적이고 전통적인 연애를 선호해요. 책임감 있게 파트너를 이끌고 싶어해요.",
job:"관리자·임원, 판사·검사, 군 장교, 기업 경영인 등이 잘 맞아요.",
famous:"미셸 오바마, 헨리 포드, 세종대왕",
compat:"💚 잘 맞는 유형: ISFP, ISTP\n❌ 충돌 유형: INFP, ENFP",
products:[
{icon:"☀️",name:"자외선 차단 양산",sub:"철저한 준비로 더위를 이겨내요",url:"https://link.coupang.com/a/e6xNn9PFAq"},
{icon:"🎒",name:"보냉 가방",sub:"체계적인 여름 외출 준비 완료",url:"https://link.coupang.com/a/e6x9lMLPGe"},
{icon:"🧴",name:"선크림",sub:"꼼꼼한 자외선 차단은 기본",url:"https://link.coupang.com/a/e6pphuCkX6"}
]},
ESFJ:{emoji:"🎀",name:"인기 많은 외교관",color:"#c0392b",
desc:"사람들과 어울리는 것을 좋아하고, 주변을 행복하게 만드는 따뜻한 타입이에요. 분위기 메이커이자 든든한 지원군이에요.",
str:"뛰어난 사교성과 소통 능력, 따뜻한 배려심, 팀워크를 중요하게 여기는 협력적인 성격이에요.",
weak:"타인의 시선을 너무 의식하고, 갈등을 피하려다 자신의 의견을 숨길 수 있어요.",
love:"사랑하는 사람에게 아낌없이 헌신해요. 기념일과 이벤트를 중요하게 생각하는 로맨틱한 타입이에요.",
job:"교사, 간호사, 이벤트 플래너, 영업직, 서비스직 등이 잘 맞아요.",
famous:"테일러 스위프트, 제니퍼 로페즈, 엘튼 존",
compat:"💚 잘 맞는 유형: ISFP, ISTP\n❌ 충돌 유형: INTP, INTJ",
products:[
{icon:"🏖️",name:"물놀이 튜브",sub:"친구들과 신나는 여름 물놀이",url:"https://link.coupang.com/a/e6xIRZIAp2"},
{icon:"🔊",name:"방수 블루투스 스피커",sub:"파티 분위기를 살려주는 스피커",url:"https://link.coupang.com/a/e6pxtoZjBQ"},
{icon:"🧴",name:"쿨링 마스크팩",sub:"파티 후 피부 집중 케어",url:"https://link.coupang.com/a/e6xPCN1UIe"}
]},
ISTP:{emoji:"🔧",name:"만능 해결사",color:"#2c3e50",
desc:"조용하지만 실용적이고 손재주가 뛰어난 타입이에요. 위기 상황에서 냉정하게 대처하고, 직접 해보면서 배우는 것을 좋아해요.",
str:"뛰어난 분석력과 문제 해결 능력, 침착하고 냉정한 위기 대처 능력, 실용적이고 효율적인 사고가 강점이에요.",
weak:"감정 표현이 서툴고, 장기적인 계획보다 즉흥적인 행동을 선호해요.",
love:"독립적인 관계를 원해요. 서로의 공간을 존중하고, 말보다 행동으로 마음을 표현해요.",
job:"엔지니어·기계공, 파일럿·군인, 외과의사, 운동선수 등이 잘 맞아요.",
famous:"클린트 이스트우드, 마이클 조던, 버지니아 울프",
compat:"💚 잘 맞는 유형: ESTJ, ESFJ\n❌ 충돌 유형: ENFJ, ENTJ",
products:[
{icon:"🏕️",name:"캠핑 돗자리",sub:"야외 활동을 즐기는 ISTP의 필수템",url:"https://link.coupang.com/a/e6xKzsycMe"},
{icon:"🌬️",name:"휴대용 미니 선풍기",sub:"어디서든 시원하게 활동 가능",url:"https://link.coupang.com/a/e6pbm4Zb08"},
{icon:"🎒",name:"보냉 가방",sub:"야외 활동 중 음료를 시원하게",url:"https://link.coupang.com/a/e6x9lMLPGe"}
]},
ISFP:{emoji:"🎨",name:"자유로운 예술가",color:"#27ae60",
desc:"감성적이고 예술적인 감각이 뛰어난 타입이에요. 현재의 순간을 즐기고, 자신만의 독특한 방식으로 세상을 표현해요.",
str:"풍부한 감성과 예술적 감각, 자유롭고 유연한 사고방식, 사람과 자연에 대한 깊은 공감 능력이 있어요.",
weak:"미래 계획을 세우는 것이 어렵고, 갈등을 피하려다 자신의 의견을 표현 못 할 수 있어요.",
love:"조용하고 따뜻한 연애를 원해요. 강요하지 않고 서로를 있는 그대로 받아들이는 관계를 좋아해요.",
job:"화가·디자이너, 음악가, 사진작가, 플로리스트, 요리사 등 예술적 분야가 잘 맞아요.",
famous:"마이클 잭슨, 브리트니 스피어스, 케빈 코스트너",
compat:"💚 잘 맞는 유형: ESTJ, ESFJ\n❌ 충돌 유형: ENTJ, ESTJ",
products:[
{icon:"🏕️",name:"캠핑 돗자리",sub:"감성 피크닉을 즐기는 예술가",url:"https://link.coupang.com/a/e6xKzsycMe"},
{icon:"🧴",name:"쿨링 마스크팩",sub:"예민한 피부를 시원하게 케어",url:"https://link.coupang.com/a/e6xPCN1UIe"},
{icon:"☀️",name:"자외선 차단 양산",sub:"감성 아우터로 햇빛 차단",url:"https://link.coupang.com/a/e6xNn9PFAq"}
]},
ESTP:{emoji:"⚡",name:"모험을 즐기는 사업가",color:"#e74c3c",
desc:"활동적이고 에너지가 넘치는 타입이에요. 위험을 두려워하지 않고 도전하며, 현재를 즐기는 것에 최고예요.",
str:"빠른 상황 판단력과 행동력, 넘치는 에너지와 사교성, 실용적이고 현실적인 문제 해결 능력이 강점이에요.",
weak:"충동적인 결정을 내리기 쉽고, 장기적인 계획보다 즉각적인 결과를 원해요.",
love:"열정적이고 즉흥적인 연애를 즐겨요. 파트너와 함께 새로운 경험을 쌓는 것을 좋아해요.",
job:"영업직, 기업가, 경찰·소방관, 운동선수, 배우 등이 잘 맞아요.",
famous:"도널드 트럼프, 어니스트 헤밍웨이, 마돈나",
compat:"💚 잘 맞는 유형: ISFJ, ISTJ\n❌ 충돌 유형: INFJ, INTJ",
products:[
{icon:"🏖️",name:"물놀이 튜브",sub:"모험을 즐기는 ESTP의 여름 필수템",url:"https://link.coupang.com/a/e6xIRZIAp2"},
{icon:"🔊",name:"방수 블루투스 스피커",sub:"액티브한 여름을 더욱 신나게",url:"https://link.coupang.com/a/e6pxtoZjBQ"},
{icon:"👟",name:"아쿠아슈즈",sub:"물놀이·래프팅에 최적화된 신발",url:"https://link.coupang.com/a/e6x5y0ethI"}
]},
ESFP:{emoji:"🎭",name:"즉흥적인 연예인",color:"#e67e22",
desc:"삶을 파티처럼 즐기는 타입이에요! 어디서든 분위기를 띄우고, 사람들을 웃게 만드는 타고난 엔터테이너예요.",
str:"넘치는 에너지와 끼, 사람들을 즐겁게 하는 타고난 유머 감각, 어디서든 적응하는 뛰어난 사교성이 강점이에요.",
weak:"즉흥적이어서 장기적인 계획 세우기가 어렵고, 심각한 상황에서도 가볍게 보일 수 있어요.",
love:"재미있고 활기찬 연애를 원해요. 파트너와 함께 즐거운 추억을 많이 만들고 싶어해요.",
job:"배우·가수·방송인, 이벤트 플래너, 관광가이드, 파티 플래너 등이 잘 맞아요.",
famous:"마릴린 먼로, 저스틴 비버, 제이미 올리버",
compat:"💚 잘 맞는 유형: ISFJ, ISTJ\n❌ 충돌 유형: INTJ, INFJ",
products:[
{icon:"🏖️",name:"물놀이 튜브",sub:"파티를 사랑하는 ESFP의 여름 템",url:"https://link.coupang.com/a/e6xIRZIAp2"},
{icon:"🔊",name:"방수 블루투스 스피커",sub:"어디서든 파티 분위기 완성",url:"https://link.coupang.com/a/e6pxtoZjBQ"},
{icon:"🌬️",name:"쿨링 넥밴드",sub:"신나게 놀면서도 시원하게",url:"https://link.coupang.com/a/e6x2Ij2G9A"}
]}
};
function msShowResult(){
  var t='';
  t+=(msScores.E>=msScores.I)?'E':'I';
  t+=(msScores.N>=msScores.S)?'N':'S';
  t+=(msScores.T>=msScores.F)?'T':'F';
  t+=(msScores.J>=msScores.P)?'J':'P';
  var d=msData[t];
  if(!d) return;
  var hdr=document.getElementById('ms-res-header');
  if(hdr) hdr.style.background='linear-gradient(135deg,'+d.color+','+d.color+'cc)';
  var re=document.getElementById('ms-res-emoji');
  var rt=document.getElementById('ms-res-type');
  var rn=document.getElementById('ms-res-name');
  if(re) re.textContent=d.emoji;
  if(rt) rt.textContent=t;
  if(rn) rn.textContent=d.name;
  var desc=document.getElementById('ms-desc');
  var str=document.getElementById('ms-str');
  var weak=document.getElementById('ms-weak');
  var love=document.getElementById('ms-love');
  var job=document.getElementById('ms-job');
  var famous=document.getElementById('ms-famous');
  var compat=document.getElementById('ms-compat');
  if(desc) desc.textContent=d.desc;
  if(str) str.textContent=d.str;
  if(weak) weak.textContent=d.weak;
  if(love) love.textContent=d.love;
  if(job) job.textContent=d.job;
  if(famous) famous.textContent=d.famous;
  if(compat) compat.textContent=d.compat;
  var ep=Math.round((msScores.E/(msScores.E+msScores.I||1))*100);
  var ip=100-ep;
  var np=Math.round((msScores.N/(msScores.N+msScores.S||1))*100);
  var sp=100-np;
  var tp=Math.round((msScores.T/(msScores.T+msScores.F||1))*100);
  var fp=100-tp;
  var jp=Math.round((msScores.J/(msScores.J+msScores.P||1))*100);
  var pp2=100-jp;
  function setBar(lblA,lblB,barId,pA,pB,lA,lB){
    var la=document.getElementById(lblA);
    var lb=document.getElementById(lblB);
    var br=document.getElementById(barId);
    if(la) la.textContent=lA+' '+pA+'%';
    if(lb) lb.textContent=lB+' '+pB+'%';
    if(br) br.style.width=pA+'%';
  }
  setBar('lbl-e','lbl-i','bar-e',ep,ip,'외향(E)','내향(I)');
  setBar('lbl-n','lbl-s','bar-n',np,sp,'직관(N)','감각(S)');
  setBar('lbl-t','lbl-f','bar-t',tp,fp,'사고(T)','감정(F)');
  setBar('lbl-p','lbl-j','bar-p',pp2,jp,'인식(P)','판단(J)');
  var ph=document.getElementById('ms-products');
  if(ph){
    ph.innerHTML='';
    if(d.products && d.products.length>0){
      d.products.forEach(function(p){
        var card=document.createElement('a');
        card.href=p.url;
        card.target='_blank';
        card.rel='noopener';
        card.className='ms-prod-card';
        card.innerHTML='<span class="ms-prod-icon">'+p.icon+'</span>'
          +'<span class="ms-prod-info"><span class="ms-prod-name">'+p.name+'</span>'
          +'<span class="ms-prod-sub">'+p.sub+'</span></span>'
          +'<span class="ms-prod-arrow">→</span>';
        ph.appendChild(card);
      });
    }
  }
  msShow('ms-result');
  window.scrollTo(0,0);
}
function msShare(){
  var url=window.location.href;
  if(navigator.clipboard){
    navigator.clipboard.writeText(url).then(function(){
      alert('링크가 복사되었어요! 친구에게 공유해보세요 😊');
    });
  } else {
    var ta=document.createElement('textarea');
    ta.value=url;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    alert('링크가 복사되었어요! 친구에게 공유해보세요 😊');
  }
}
function msRetry(){
  msCur=0;
  msScores={E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0};
  msShow('ms-start');
  window.scrollTo(0,0);
}

