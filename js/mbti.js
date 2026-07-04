// MBTI 질문 배열 (20문제)
const questions = [
    {emoji:"🎉", text:"주말에 친구들과 파티가 생겼다!", a:"신나서 바로 참석한다", b:"집에서 쉬고 싶은데...", type:"EI"},
    {emoji:"💭", text:"새로운 아이디어를 떠올릴 때 나는?", a:"현실적으로 가능한 것부터 생각한다", b:"상상력을 마음껏 펼친다", type:"SN"},
    {emoji:"⚖️", text:"친구가 고민을 털어놓을 때 나는?", a:"해결책을 먼저 제시한다", b:"공감하고 감정을 들어준다", type:"TF"},
    {emoji:"📅", text:"여행 계획을 세울 때 나는?", a:"꼼꼼하게 일정을 짠다", b:"즉흥적으로 떠난다", type:"JP"},
    {emoji:"📞", text:"모르는 번호로 전화가 왔을 때?", a:"바로 받는다", b:"문자로 먼저 확인한다", type:"EI"},
    {emoji:"🎨", text:"취미 활동을 고를 때 나는?", a:"실용적이고 배울 수 있는 것", b:"창의적이고 상상력이 필요한 것", type:"SN"},
    {emoji:"😤", text:"친구가 잘못했을 때 나는?", a:"직접적으로 말해준다", b:"감정을 다치지 않게 돌려 말한다", type:"TF"},
    {emoji:"🗂️", text:"과제나 업무를 할 때 나는?", a:"미리미리 계획하고 끝낸다", b:"마감 직전에 집중해서 한다", type:"JP"},
    {emoji:"🏫", text:"처음 만나는 자리에서 나는?", a:"먼저 말을 걸고 분위기를 띄운다", b:"조용히 관찰하다가 친해진다", type:"EI"},
    {emoji:"🔍", text:"정보를 받아들일 때 나는?", a:"사실과 세부사항을 중시한다", b:"전체적인 패턴과 가능성을 본다", type:"SN"},
    {emoji:"🤝", text:"팀 프로젝트에서 갈등이 생기면?", a:"논리적으로 문제를 분석한다", b:"팀원의 감정을 먼저 챙긴다", type:"TF"},
    {emoji:"🛒", text:"쇼핑할 때 나는?", a:"살 것을 미리 정해두고 간다", b:"구경하다가 마음에 드는 걸 산다", type:"JP"},
    {emoji:"🎤", text:"발표나 공연 전날 나는?", a:"설레고 기대된다", b:"긴장되고 피하고 싶다", type:"EI"},
    {emoji:"📖", text:"책을 읽을 때 나는?", a:"실용서나 정보성 책을 선호한다", b:"소설이나 판타지 같은 상상력 책을 선호한다", type:"SN"},
    {emoji:"💔", text:"누군가 나를 비판했을 때 나는?", a:"틀린 부분이 있으면 인정한다", b:"상처를 받고 오래 생각한다", type:"TF"},
    {emoji:"⏰", text:"약속 시간에 대해 나는?", a:"항상 일찍 도착한다", b:"딱 맞춰 오거나 조금 늦는다", type:"JP"},
    {emoji:"🌙", text:"혼자 있는 시간이?", a:"에너지를 소모하는 느낌", b:"에너지를 충전하는 느낌", type:"EI"},
    {emoji:"🌟", text:"미래에 대해 생각할 때 나는?", a:"현실적인 계획을 세운다", b:"꿈꾸고 상상하는 걸 즐긴다", type:"SN"},
    {emoji:"🧩", text:"문제를 해결할 때 나는?", a:"객관적인 사실을 바탕으로 판단한다", b:"나의 느낌과 가치관을 중요시한다", type:"TF"},
    {emoji:"🌈", text:"하루 일과가 끝난 후 나는?", a:"내일 할 일을 미리 정리한다", b:"그냥 자연스럽게 흘러가도록 둔다", type:"JP"}
];

let currentQ = 0;
let scores = {E:0, I:0, S:0, N:0, T:0, F:0, J:0, P:0};

function startTest() {
    currentQ = 0;
    scores = {E:0, I:0, S:0, N:0, T:0, F:0, J:0, P:0};
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('test-screen').classList.add('active');
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQ];
    document.getElementById('q-emoji').textContent = q.emoji;
    document.getElementById('question-text').textContent = q.text;
    document.getElementById('btn-a').textContent = q.a;
    document.getElementById('btn-b').textContent = q.b;
    const num = currentQ + 1;
    const total = questions.length;
    const pct = Math.round((currentQ / total) * 100);
    document.getElementById('progress-text').textContent = `${num} / ${total}`;
    document.getElementById('progress-pct').textContent = pct + '%';
    document.getElementById('progress-fill').style.width = pct + '%';
}

function answer(choice) {
    const q = questions[currentQ];
    const type = q.type;
    if (choice === 'a') {
        scores[type[0]]++;
    } else {
        scores[type[1]]++;
    }
    currentQ++;
    if (currentQ < questions.length) {
        showQuestion();
    } else {
        showLoading();
    }
}

function showLoading() {
    document.getElementById('test-screen').classList.remove('active');
    document.getElementById('loading-screen').classList.add('active');
    let width = 0;
    const interval = setInterval(() => {
        width += 2;
        document.getElementById('loading-fill').style.width = width + '%';
        if (width >= 100) {
            clearInterval(interval);
            goToResult();
        }
    }, 30);
}

function goToResult() {
    const mbti =
        (scores.E >= scores.I ? 'E' : 'I') +
        (scores.S >= scores.N ? 'S' : 'N') +
        (scores.T >= scores.F ? 'T' : 'F') +
        (scores.J >= scores.P ? 'J' : 'P');
    window.location.href = `result.html?type=${mbti}`;
}
