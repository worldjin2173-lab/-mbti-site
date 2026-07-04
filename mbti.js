var msQ=[
{emoji:"🎉",text:"주말에 친구들과 파티가 생겼다!",a:"신나서 바로 참석한다",b:"집에서 쉬고 싶은데...",type:"EI"},
{emoji:"💭",text:"새로운 아이디어를 떠올릴 때 나는?",a:"현실적으로 가능한 것부터 생각한다",b:"상상력을 마음껏 펼친다",type:"SN"},
{emoji:"⚖️",text:"친구가 고민을 털어놓을 때 나는?",a:"해결책을 먼저 제시한다",b:"공감하고 감정을 들어준다",type:"TF"},
{emoji:"📅",text:"여행 계획을 세울 때 나는?",a:"꼼꼼하게 일정을 짠다",b:"즉흥적으로 떠난다",type:"JP"},
{emoji:"📞",text:"모르는 번호로 전화가 왔을 때?",a:"바로 받는다",b:"문자로 먼저 확인한다",type:"EI"},
{emoji:"🎨",text:"취미 활동을 고를 때 나는?",a:"실용적이고 배울 수 있는 것",b:"창의적이고 상상력이 필요한 것",type:"SN"},
{emoji:"😤",text:"친구가 잘못했을 때 나는?",a:"직접적으로 말해준다",b:"감정을 다치지 않게 돌려 말한다",type:"TF"},
{emoji:"🗂️",text:"과제나 업무를 할 때 나는?",a:"미리미리 계획하고 끝낸다",b:"마감 직전에 집중해서 한다",type:"JP"},
{emoji:"🏫",text:"처음 만나는 자리에서 나는?",a:"먼저 말을 걸고 분위기를 띄운다",b:"조용히 관찰하다가 친해진다",type:"EI"},
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

var msData={
INTJ:{emoji:"🏰",name:"혼자서도 완벽한 전략가",color:"#2c3e50",desc:"목표를 정하면 끝까지 밀어붙이는 강한 의지를 가진 타입이에요. 겉으로는 차갑게 보이지만 내면에는 뜨거운 열정이 숨어있어요. 전 세계 인구의 약 2%만 해당되는 희귀한 유형이에요!",str:"강철 같은 의지력으로 목표를 반드시 달성해요. 복잡한 문제도 빠르게 핵심을 파악하는 날카로운 분석력, 5년 10년 앞을 내다보는 전략적 사고, 혼자서도 계획하고 실행하는 독립적인 실행력이 강점이에요.",weak:"완벽주의 성향으로 시작이 어려울 때가 있어요. 감정 표현이 서툴러서 차갑다는 오해를 받고, 자신의 판단에 확신이 강해서 다른 의견을 받아들이기 어려울 때가 있어요.",love:"깊고 진지한 관계를 원해요. 처음엔 차갑게 보이지만 마음을 열면 정말 헌신적인 사랑을 줘요. 행동으로 사랑을 증명하는 타입이에요.",job:"과학자 연구원 데이터분석가, 소프트웨어 엔지니어 AI연구원, 경영컨설턴트 전략기획자, 의사 변호사 건축가 등이 잘 맞아요.",famous:"일론 머스크 (테슬라 CEO), 마크 저커버그 (메타 CEO), 크리스토퍼 놀란 (감독), 니체 (철학자)",compat:"잘 맞는 유형: ENFP, ENTP / 무난한 유형: INFJ, INTJ / 충돌 유형: ESFP, ESFJ",products:[{icon:"🌬️",name:"휴대용 미니 선풍기",sub:"집중하는 INTJ의 여름 필수템",url:"https://link.coupang.com/a/e6pbm4Zb08"},{icon:"❄️",name:"냉감 쿨매트",sub:"더운 여름 밤 쾌적한 숙면",url:"https://link.coupang.com/a/e6xRecZh8u"},{icon:"🧴",name:"쿨링 스프레이",sub:"순식간에 시원해지는 더위 탈출템",url:"https://link.coupang.com/a/e6yaSBkLZY"}]},
INTP:{emoji:"🔬",name:"생각이 너무 많은 천재",color:"#8e44ad",desc:"머릿속에서 끊임없이 왜라는 질문이 떠오르는 타입이에요. 관심 분야에 빠지면 밥도 잊을 정도로 완전히 몰입해요.",str:"어떤 주제든 깊고 날카롭게 분석하는 분석력, 기존의 틀을 깨는 독창적인 아이디어, 감정에 휘둘리지 않는 객관적 판단력이 강점이에요.",weak:"아이디어는 넘치는데 실행이 느려서 기회를 놓칠 수 있어요. 생각에 빠져 약속이나 일상을 잊어버리기도 해요.",love:"지적인 대화가 최우선이에요. 서로 충분한 개인 공간을 주는 자유로운 관계를 원해요.",job:"프로그래머 소프트웨어개발자 AI연구원, 데이터분석가 통계학자, 철학자 물리학자 수학자, 게임개발자 등이 잘 맞아요.",famous:"알버트 아인슈타인 (물리학자), 빌 게이츠 (MS창업자), 찰스 다윈 (진화론 창시자)",compat:"잘 맞는 유형: ENTJ, ENFJ / 무난한 유형: INTJ, INTP / 충돌 유형: ESFJ, ESFP",products:[{icon:"❄️",name:"미니 에어컨 냉풍기",sub:"집에서 집중할 때 시원한 환경",url:"https://link.coupang.com/a/e6x7Vhg6ou"},{icon:"🧊",name:"아이스 텀블러",sub:"집중하며 시원한 음료 한 잔!",url:"https://link.coupang.com/a/e6puuJtn2G"},{icon:"🧴",name:"쿨링 스프레이",sub:"더위를 순식간에 날려버려요",url:"https://link.coupang.com/a/e6yaSBkLZY"}]},
ENTJ:{emoji:"👑",name:"태어난 리더",color:"#c0392b",desc:"방에 들어서는 순간 분위기를 장악하는 타입이에요. 목표를 향해 돌진하는 추진력이 엄청나고, 어느 집단에서나 중심 역할을 맡게 되는 경우가 많아요.",str:"타고난 강력한 리더십, 어떤 장애물도 돌파하는 추진력, 복잡한 상황에서도 빠른 결단력, 큰 그림을 그리고 실현시키는 전략적 사고가 강점이에요.",weak:"높은 기준을 타인에게도 요구해서 주변을 힘들게 할 때가 있어요. 논리와 효율을 앞세우다 감정을 놓쳐서 냉정하게 보여요.",love:"강하고 독립적인 상대를 좋아하고, 서로 성장하는 관계를 원해요. 행동으로 사랑을 증명하는 타입이에요.",job:"CEO 사업가 창업가 경영컨설턴트, 변호사 검사, 정치인 외교관, 투자가 펀드매니저 등이 잘 맞아요.",famous:"스티브 잡스 (애플 창업자), 나폴레옹 (프랑스 황제), 마가렛 대처 (영국 전 총리)",compat:"잘 맞는 유형: INTP, INFP / 무난한 유형: ENTJ, INTJ / 충돌 유형: ISFP, INFP",products:[{icon:"🌬️",name:"쿨링 넥밴드",sub:"바쁜 리더의 야외 활동도 시원하게",url:"https://link.coupang.com/a/e6x2Ij2G9A"},{icon:"🧴",name:"선크림",sub:"자외선 차단으로 피부까지 완벽하게",url:"https://link.coupang.com/a/e6pphuCkX6"},{icon:"🧊",name:"아이스 텀블러",sub:"바쁜 하루도 시원하게 버텨요",url:"https://link.coupang.com/a/e6puuJtn2G"}]},
ENTP:{emoji:"⚡",name:"말로 이기는 아이디어 뱅크",color:"#e67e22",desc:"머릿속에서 아이디어가 폭발하는 타입이에요. 토론을 정말 좋아하고, 새로운 것에 대한 호기심이 엄청나요. 규칙이나 틀에 갇히는 걸 극도로 싫어해요.",str:"폭발적인 창의력, 어떤 상황에서도 빠르게 적응하는 유연함, 어떤 상대라도 논리적으로 설득하는 말솜씨, 재미와 의미를 찾는 긍정적 에너지가 강점이에요.",weak:"새로운 것에 쉽게 빠져들다 금방 싫증 내고, 시작은 잘하는데 마무리가 약해요.",love:"지적 자극이 최우선이에요. 대화가 잘 통하는 상대에게 빠르게 빠져들고, 새로운 자극이 있는 관계를 원해요.",job:"스타트업 창업가 기업가, 마케터 광고기획자, 유튜버 방송인 크리에이터, UX기획자 등이 잘 맞아요.",famous:"토마스 에디슨 (발명왕), 벤자민 프랭클린 (미국 건국의 아버지)",compat:"잘 맞는 유형: INFJ, INTJ / 무난한 유형: ENTP, ENFP / 충돌 유형: ISFJ, ISTJ",products:[{icon:"🔊",name:"방수 블루투스 스피커",sub:"어디서든 음악과 함께 자유롭게!",url:"https://link.coupang.com/a/e6pxtoZjBQ"},{icon:"🏄",name:"물놀이 튜브",sub:"스릴 넘치는 물놀이로 여름을 즐겨요",url:"https://link.coupang.com/a/e6xIRZIAp2"},{icon:"🌬️",name:"휴대용 미니 선풍기",sub:"여름 필수템",url:"https://link.coupang.com/a/e6pbm4Zb08"}]},
INFJ:{emoji:"🌙",name:"신비로운 이상주의자",color:"#27ae60",desc:"전 세계에서 가장 희귀한 성격 유형 중 하나예요 (전체 인구의 약 1~2%)! 겉으로는 조용하지만 내면에는 세상을 더 나은 곳으로 바꾸고 싶은 강렬한 열망이 가득해요.",str:"말하지 않아도 상대방 감정을 읽는 공감 능력, 복잡한 상황의 본질을 꿰뚫는 통찰력, 한번 결심하면 포기하지 않는 강한 신념이 강점이에요.",weak:"이상이 너무 높아서 현실에 자주 실망하고, 남을 너무 배려하다 자신이 원하는 것을 잊어버려요.",love:"영혼의 단짝 같은 깊은 관계를 꿈꿔요. 상대방을 깊이 이해하고 배려하는 최고의 연인이에요.",job:"심리상담사 코치, 소설가 시인 시나리오작가, 의사 사회복지사, 명상지도자 등이 잘 맞아요.",famous:"마틴 루터 킹 (인권운동가), 넬슨 만델라 (전 대통령), 테일러 스위프트 (가수)",compat:"잘 맞는 유형: ENFP, ENTP / 무난한 유형: INFJ, INTJ / 충돌 유형: ESTP, ESTJ",products:[{icon:"🧴",name:"쿨링 마스크팩",sub:"피부와 마음을 동시에 쿨링!",url:"https://link.coupang.com/a/e6xPCN1UIe"},{icon:"☀️",name:"자외선 차단 양산",sub:"외출할 때 자외선으로부터 보호",url:"https://link.coupang.com/a/e6xNn9PFAq"},{icon:"🌬️",name:"휴대용 미니 선풍기",sub:"더운 여름도 시원하게!",url:"https://link.coupang.com/a/e6pbm4Zb08"}]},
INFP:{emoji:"🌸",name:"꿈꾸는 감성 시인",color:"#e91e8c",desc:"마음속 깊은 곳에 자신만의 아름다운 세계를 갖고 있는 타입이에요. 겉으로는 조용해 보이지만 내면에는 엄청난 감수성과 열정이 넘쳐흘러요.",str:"상대방의 감정에 깊이 공감하는 능력, 글 음악 미술에서 발휘되는 풍부한 창의성, 자신의 가치관을 끝까지 지키는 강한 신념이 강점이에요.",weak:"현실보다 이상을 추구하다 현실 적응이 어렵고, 비판에 너무 예민하게 반응해서 상처를 오래 간직해요.",love:"헌신적인 연인이에요. 정신적인 교감과 감정적 연결을 무엇보다 중요하게 여겨요.",job:"작가 시인 소설가 작사가, 심리상담사 사회복지사, 화가 일러스트레이터 디자이너, 음악가 배우 등이 추천이에요.",famous:"윌리엄 셰익스피어 (극작가), 조앤 롤링 (해리포터 작가), 아이유 (가수), 반 고흐 (화가)",compat:"잘 맞는 유형: ENFJ, ENTJ / 무난한 유형: INFP, INFJ / 충돌 유형: ESTJ, ENTJ",products:[{icon:"🧴",name:"쿨링 마스크팩",sub:"감성 충전 셀프 케어",url:"https://link.coupang.com/a/e6xPCN1UIe"},{icon:"☀️",name:"자외선 차단 양산",sub:"감성 산책할 때 햇볕으로부터 보호",url:"https://link.coupang.com/a/e6xNn9PFAq"},{icon:"🧊",name:"아이스 텀블러",sub:"감성 카페 분위기를 집에서도!",url:"https://link.coupang.com/a/e6puuJtn2G"}]},
ENFJ:{emoji:"🌞",name:"모두를 이끄는 따뜻한 선생님",color:"#f39c12",desc:"사람들에게 자연스럽게 영향을 미치고 이끄는 타고난 리더예요. 사람들의 잠재력을 발견하고 성장을 도와주는 것을 진심으로 즐겨요.",str:"타인의 감정을 정확하게 읽고 공감하는 능력, 사람들을 자연스럽게 이끄는 카리스마 있는 리더십, 잠재력을 발견하고 성장시키는 능력이 강점이에요.",weak:"타인을 너무 배려하다 자신의 필요를 무시하고, 남의 인정을 지나치게 필요로 해서 상처받기 쉬워요.",love:"사랑하는 사람을 위해 무엇이든 다 해주고 싶은 헌신적인 연인이에요.",job:"교사 교수 강사, 심리상담사 코치, 사회운동가 NGO활동가, 인사담당자 등이 잘 맞아요.",famous:"오바마 전 미국 대통령, 오프라 윈프리 (방송인), BTS RM (래퍼)",compat:"잘 맞는 유형: INFP, INTP / 무난한 유형: ENFJ, INFJ / 충돌 유형: ISTP, ESTP",products:[{icon:"🏕️",name:"캠핑 돗자리",sub:"사람들과 함께하는 야외 모임 필수템",url:"https://link.coupang.com/a/e6xKzsycMe"},{icon:"🔊",name:"방수 블루투스 스피커",sub:"야외 모임에서 신나는 음악을!",url:"https://link.coupang.com/a/e6pxtoZjBQ"},{icon:"🧴",name:"선크림",sub:"야외 활동 시 자외선 차단 필수!",url:"https://link.coupang.com/a/e6pphuCkX6"}]},
ENFP:{emoji:"🌈",name:"에너지 넘치는 자유로운 영혼",color:"#9b59b6",desc:"세상 모든 것에 호기심이 넘치는 타입이에요! 어디서든 분위기를 밝게 만드는 에너지가 있어요. 꿈이 크고 가능성을 믿는 열정적인 낙관주의자예요.",str:"넘치는 활력과 열정, 새로운 아이디어를 끝없이 발산하는 창의력, 상대방의 감정에 깊이 공감하는 능력, 어떤 상황에서도 긍정적인 면을 찾는 낙관주의가 강점이에요.",weak:"여러 가지에 관심이 많아서 한 가지를 끝까지 마무리하기 어렵고, 일관성이 부족할 때가 있어요.",love:"사랑에 빠지면 온 세상이 밝아지는 열정적인 연인이에요. 항상 새로운 설렘과 자극이 있는 관계를 원해요.",job:"마케터 크리에이터 유튜버, 배우 방송인 예술가, 상담사 코치, 창업가 이벤트기획자 등이 추천이에요.",famous:"로빈 윌리엄스 (배우), 윌 스미스 (배우), BTS 지민 (아이돌)",compat:"잘 맞는 유형: INTJ, INFJ / 무난한 유형: ENFP, ENTP / 충돌 유형: ISTJ, ISFJ",products:[{icon:"🏄",name:"물놀이 튜브",sub:"신나는 물놀이로 여름을 즐겨요!",url:"https://link.coupang.com/a/e6xIRZIAp2"},{icon:"🔊",name:"방수 블루투스 스피커",sub:"어디서든 음악과 함께 신나게!",url:"https://link.coupang.com/a/e6pxtoZjBQ"},{icon:"🏕️",name:"캠핑 돗자리",sub:"자유로운 야외 활동의 필수템",url:"https://link.coupang.com/a/e6xKzsycMe"}]},
ISTJ:{emoji:"📋",name:"믿음직한 현실주의자",color:"#34495e",desc:"말보다 행동으로 신뢰를 쌓는 타입이에요. 한번 맡은 일은 반드시 끝까지 완수하는 책임감이 강하고, 규칙과 원칙을 중요하게 여겨요.",str:"한번 맡으면 반드시 해내는 강한 책임감, 꼼꼼하고 빈틈없는 체계적인 업무 처리 능력, 흔들리지 않는 안정성과 신뢰감이 강점이에요.",weak:"변화에 적응이 느리고, 검증된 방식을 고집하는 경향이 있어요. 감정 표현이 서툴러서 차갑게 보이기도 해요.",love:"책임감 있고 헌신적인 파트너예요. 안정적이고 꾸준한 관계를 원해요.",job:"회계사 세무사, 군인 경찰관 소방관, 의사 약사 간호사, 공무원 등이 잘 맞아요.",famous:"조지 워싱턴 (미국 초대 대통령), 워렌 버핏 (투자의 귀재), 나이팅게일 (간호사)",compat:"잘 맞는 유형: ESFP, ESTP / 무난한 유형: ISTJ, ISFJ / 충돌 유형: ENFP, ENTP",products:[{icon:"🌬️",name:"휴대용 미니 선풍기",sub:"믿음직한 ISTJ의 여름 필수 아이템",url:"https://link.coupang.com/a/e6pbm4Zb08"},{icon:"❄️",name:"냉감 쿨매트",sub:"쾌적한 수면을 위한 필수템",url:"https://link.coupang.com/a/e6xRecZh8u"},{icon:"🧊",name:"아이스 텀블러",sub:"꼼꼼한 수분 보충 습관",url:"https://link.coupang.com/a/e6puuJtn2G"}]},
ISFJ:{emoji:"🛡️",name:"따뜻한 보호자",color:"#16a085",desc:"조용하지만 강한 존재감을 가진 타입이에요. 주변 사람들을 진심으로 아끼고 보살피는 마음이 넘쳐요.",str:"따뜻한 배려심, 한번 맡은 일은 끝까지 해내는 강한 책임감, 작은 것 하나도 놓치지 않는 꼼꼼함이 강점이에요.",weak:"자신보다 남을 항상 먼저 챙기다 정작 본인이 지치고, 갈등을 피하다 보니 속마음을 잘 표현하지 못해요.",love:"세심하게 상대방을 챙기고 배려하는 헌신적인 연인이에요. 안정적인 관계를 원해요.",job:"간호사 의사 약사, 교사 유치원교사, 사회복지사 상담사 등이 잘 맞아요.",famous:"테레사 수녀 (성인), 케이트 미들턴 (영국 왕세자비), 아이유 (가수)",compat:"잘 맞는 유형: ESFP, ESTP / 무난한 유형: ISFJ, ISTJ / 충돌 유형: ENTP, ENTJ",products:[{icon:"🧴",name:"쿨링 마스크팩",sub:"소중한 나를 위한 여름 셀프 케어",url:"https://link.coupang.com/a/e6xPCN1UIe"},{icon:"☀️",name:"자외선 차단 양산",sub:"꼼꼼하게 자외선 차단",url:"https://link.coupang.com/a/e6xNn9PFAq"},{icon:"🧺",name:"보냉 가방",sub:"소중한 사람들을 위한 도시락 필수템",url:"https://link.coupang.com/a/e6x9lMLPGe"}]},
ESTJ:{emoji:"⚙️",name:"든든한 관리자",color:"#e74c3c",desc:"집단을 체계적으로 이끌고 질서를 만들어내는 타입이에요. 맡은 일은 반드시 완수하는 강한 책임감을 갖고 있어요.",str:"어떤 상황에서도 집단을 체계적으로 이끄는 조직력, 강한 책임감, 실용적이고 빠른 문제 해결 능력이 강점이에요.",weak:"자신의 방식을 고집하고 다른 의견을 무시할 때가 있어요. 너무 엄격해서 주변이 부담스러워하는 경우도 있어요.",love:"책임감 있고 안정적인 파트너예요. 상대방에게 든든하고 믿음직한 존재가 되고 싶어해요.",job:"군인 경찰관 소방관, 경영자 관리직, 판사 검사 변호사, 공무원 등이 잘 맞아요.",famous:"마가렛 대처 (영국 전 총리), 힐러리 클린턴 (전 국무장관), 반기문 (전 UN 사무총장)",compat:"잘 맞는 유형: ISFP, ISTP / 무난한 유형: ESTJ, ISTJ / 충돌 유형: INFP, ENFP",products:[{icon:"🌬️",name:"쿨링 넥밴드",sub:"바쁘게 움직이는 야외 필수템",url:"https://link.coupang.com/a/e6x2Ij2G9A"},{icon:"🧴",name:"선크림",sub:"꼼꼼한 자외선 차단 관리",url:"https://link.coupang.com/a/e6pphuCkX6"},{icon:"❄️",name:"냉감 쿨매트",sub:"피곤한 몸을 쾌적하게",url:"https://link.coupang.com/a/e6xRecZh8u"}]},
ESFJ:{emoji:"🤗",name:"모두를 챙기는 인싸",color:"#e91e63",desc:"사람들을 사랑하고 모두와 잘 지내는 최고의 사교형 타입이에요! 남을 돕는 것에서 진정한 기쁨을 느끼고, 가족과 친구를 소중히 생각해요.",str:"모든 사람을 세심하게 챙기는 따뜻한 배려심, 어디서든 쉽게 친해지는 뛰어난 사교성, 상대방의 감정을 정확하게 읽는 공감 능력이 강점이에요.",weak:"남의 평가에 너무 민감해서 자신의 의견을 제대로 말하지 못하고, 타인의 기대에 부응하려다 자신을 잃어버리는 경우가 있어요.",love:"헌신적인 연인이에요. 안정적이고 오래가는 관계를 원하고, 감정적인 교감을 중요하게 여겨요.",job:"교사 유치원교사 상담사, 간호사 의사 사회복지사, 영업 고객서비스 홍보 등이 잘 맞아요.",famous:"제니퍼 로페즈 (가수), 빌 클린턴 (전 미국 대통령)",compat:"잘 맞는 유형: ISFP, ISTP / 무난한 유형: ESFJ, ISFJ / 충돌 유형: INTJ, INTP",products:[{icon:"🏕️",name:"캠핑 돗자리",sub:"친구들과 야외 모임의 필수템",url:"https://link.coupang.com/a/e6xKzsycMe"},{icon:"🧺",name:"보냉 가방",sub:"모임에 음식을 챙겨가는 필수템",url:"https://link.coupang.com/a/e6x9lMLPGe"},{icon:"🧴",name:"쿨링 마스크팩",sub:"활발한 사교 후 피부 케어",url:"https://link.coupang.com/a/e6xPCN1UIe"}]},
ISTP:{emoji:"🔧",name:"냉철한 분석 장인",color:"#7f8c8d",desc:"겉으로는 조용하고 차분해 보이지만, 손으로 무언가를 만들거나 분석하는 것에 숨겨진 열정이 있어요. 위기 상황에서 가장 침착하고 빠르게 대응하는 능력이 있어요.",str:"어떤 도구든 빠르게 분석하고 다루는 기계적 능력, 위기 상황에서도 침착하게 문제를 해결하는 능력, 독립적인 자립심이 강점이에요.",weak:"감정 표현이 거의 없어서 무관심하게 보이고, 미래 준비가 부족해요.",love:"서로의 공간을 존중하는 자유로운 관계를 원해요. 행동으로 사랑을 보여주는 타입이에요.",job:"엔지니어 기계공학자, 파일럿 정비사, 외과의사 응급구조사, 데이터분석가 등이 잘 맞아요.",famous:"클린트 이스트우드 (배우), 브루스 리 (무술가)",compat:"잘 맞는 유형: ESFJ, ESTJ / 무난한 유형: ISTP, ISTJ / 충돌 유형: ENFJ, ESFJ",products:[{icon:"🌬️",name:"쿨링 넥밴드",sub:"활동적인 야외 필수템",url:"https://link.coupang.com/a/e6x2Ij2G9A"},{icon:"🏕️",name:"캠핑 돗자리",sub:"혼자만의 아웃도어 시간을 즐겨요",url:"https://link.coupang.com/a/e6xKzsycMe"},{icon:"🧺",name:"보냉 가방",sub:"야외 활동 시 음료와 음식을 신선하게",url:"https://link.coupang.com/a/e6x9lMLPGe"}]},
ISFP:{emoji:"🎨",name:"감성 넘치는 예술가",color:"#e67e22",desc:"말없이 아름다움으로 세상과 소통하는 타입이에요. 지금 이 순간을 온전히 즐기는 것을 중요하게 여기고, 자신만의 독특한 스타일과 감각이 있어요.",str:"아름다움을 발견하고 표현하는 예술적 감각, 지금 이 순간에 집중하는 마음가짐, 상대방의 감정에 자연스럽게 공감하는 능력이 강점이에요.",weak:"장기적인 계획을 세우는 것이 어렵고, 비판에 예민하게 반응해서 쉽게 상처받아요.",love:"말보다 작은 행동과 선물로 사랑을 표현하고, 서로의 개성을 존중하는 파트너십을 꿈꿔요.",job:"화가 일러스트레이터 사진작가, 음악가 댄서, 패션디자이너 스타일리스트, 수의사 등이 추천이에요.",famous:"마이클 잭슨 (가수), 아리아나 그란데 (가수)",compat:"잘 맞는 유형: ESFJ, ESTJ / 무난한 유형: ISFP, INFP / 충돌 유형: ENTJ, ESTJ",products:[{icon:"🧴",name:"쿨링 마스크팩",sub:"감성 넘치는 여름 셀프 케어",url:"https://link.coupang.com/a/e6xPCN1UIe"},{icon:"👟",name:"아쿠아슈즈",sub:"자연 속 물놀이를 안전하게",url:"https://link.coupang.com/a/e6x5y0ethI"},{icon:"🌬️",name:"휴대용 미니 선풍기",sub:"감성적인 나들이의 필수템",url:"https://link.coupang.com/a/e6pbm4Zb08"}]},
ESTP:{emoji:"🏍️",name:"스릴을 즐기는 모험가",color:"#f1c40f",desc:"삶을 온몸으로 즐기는 타입이에요! 지금 이 순간을 가장 중요하게 여기고, 어떤 상황에서도 빠르게 적응하고 해결책을 찾아내요.",str:"어떤 상황에서도 빠르게 적응하고 문제를 해결하는 능력, 자연스러운 사교성, 어떤 환경에서도 즐거움을 찾는 낙관적인 에너지가 강점이에요.",weak:"장기적인 계획 없이 충동적으로 행동해서 후회하는 경우가 있어요. 다른 사람의 감정을 고려하지 못할 때가 있어요.",love:"자유롭고 즐거운 관계를 원하고, 즉흥적이고 신나는 데이트를 선물하는 타입이에요.",job:"영업사원 마케터, 소방관 경찰관 군인, 스포츠선수 트레이너, 사업가 투자가 등이 추천이에요.",famous:"어니스트 헤밍웨이 (소설가), 마이크 타이슨 (전 복서)",compat:"잘 맞는 유형: ISFJ, ISTJ / 무난한 유형: ESTP, ESTJ / 충돌 유형: INFJ, INTJ",products:[{icon:"🏄",name:"물놀이 튜브",sub:"스릴 넘치는 물놀이 여름 필수템!",url:"https://link.coupang.com/a/e6xIRZIAp2"},{icon:"👟",name:"아쿠아슈즈",sub:"물속 모험을 안전하게 즐겨요",url:"https://link.coupang.com/a/e6x5y0ethI"},{icon:"🔊",name:"방수 블루투스 스피커",sub:"어디서든 신나는 음악과 함께!",url:"https://link.coupang.com/a/e6pxtoZjBQ"}]},
ESFP:{emoji:"🎭",name:"무대 위의 연예인",color:"#ff6b9d",desc:"어디서든 분위기를 가장 밝게 만드는 타고난 엔터테이너예요! 웃음과 즐거움을 나누는 것을 진심으로 좋아해요.",str:"어디서든 분위기를 환하게 밝히는 에너지, 탁월한 사교성, 감각적인 분야의 뛰어난 취향, 어떤 상황에서도 즐거움을 찾는 긍정적인 마음이 강점이에요.",weak:"계획 없이 충동적으로 행동해서 후회하고, 지루함을 참지 못해서 중요한 일도 포기하는 경우가 있어요.",love:"항상 즐거움과 행복을 선물하고 싶은 열정적인 연인이에요. 지루한 일상은 참기 어려워요.",job:"연예인 배우 가수 댄서, 이벤트기획자 파티플래너, 패션디자이너 스타일리스트 등이 추천이에요.",famous:"마릴린 먼로 (배우), 저스틴 비버 (가수), 엘비스 프레슬리 (가수의 왕), 리한나 (가수)",compat:"잘 맞는 유형: ISTJ, ISFJ / 무난한 유형: ESFP, ESTP / 충돌 유형: INTJ, INFJ",products:[{icon:"🎉",name:"물놀이 튜브",sub:"파티같은 여름 물놀이 필수템!",url:"https://link.coupang.com/a/e6xIRZIAp2"},{icon:"🔊",name:"방수 블루투스 스피커",sub:"어디서든 신나게 음악을!",url:"https://link.coupang.com/a/e6pxtoZjBQ"},{icon:"🧴",name:"쿨링 스프레이",sub:"더위를 날리고 무대처럼 시원하게!",url:"https://link.coupang.com/a/e6yaSBkLZY"}]}
};

var msCur=0;
var msScores={E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0};

function msShow(id){
  var screens=document.querySelectorAll('.ms-screen');
  screens.forEach(function(s){s.classList.remove('active');});
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
        card.innerHTML='<span class="ms-prod-icon">'+p.icon+'</span><span class="ms-prod-info"><span class="ms-prod-name">'+p.name+'</span><span class="ms-prod-sub">'+p.sub+'</span></span><span class="ms-prod-arrow">→</span>';
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
    navigator.clipboard.writeText(url).then(function(){alert('링크가 복사되었어요! 친구에게 공유해보세요 😊');});
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
