const qnaList = [{
    q: '1.<br><br>남자친구에게 서운한 일이 생겨 용기를 내서 말해봤다. 그는...',
    a: [{
        answer: '묵묵히 들어주고 넘어간다',
        type: [0, 1, 7, 5, 12, 13]
      },
      {
        answer: '본인의 의견을 열심히 피력한다',
        type: [2, 6, 8, 9, 11, 14, 15]
      },
    ]
  },
  {
    q: '2.<br><br>갓 돈을 벌기 시작한 나의...',
    a: [{
        answer: '매번 선물로 명품을 사주는 잔고 0원 남친',
        type: [6, 5, 8, 12, 13, 14]
      },
      {
        answer: '우리의 미래를 생각하며 삼각김밥에 라면을 시키는 남친',
        type: [0, 1, 2, 7, 9, 11, 15]
      },
    ]
  },
  {
    q: '3.<br><br>친구들과의 약속 장소에 나를 데리러 온 그가 끌고온...',
    a: [{
        answer: '60개월 풀할부 페라리 스포츠카',
        type: [0, 2, 7, 12, 13, 14, 15]
      },
      {
        answer: '공유 자전거 따릉이',
        type: [1, 6, 5, 8, 9, 11]
      },
    ]
  },
  {
    q: '4.<br><br>나와 동갑인 남친, 그런데 가끔은...',
    a: [{
        answer: '큰아버지의 목욕탕 스킨향이 난다',
        type: []
      },
      {
        answer: '유튜브 스트리머에 푹 빠진 내 사촌동생의 모습이 보인다',
        type: []
      },
    ]
  },
  {
    q: '5.<br><br>우연히 보게 된 남친의 카톡을 보게 된다면 차라리 뭐가 나으려나...',
    a: [{
        answer: '남자 동기들보다 여자 동기들과 유독 사이좋게 지내는게 나아',
        type: []
      },
      {
        answer: '남친을 애칭으로 부르는 여자 사람 친구 한 명이 나아',
        type: []
      },
    ]
  },

  {
    q: '6.<br><br>남친이랑 첫 1박 2일 여행을 왔다. 그런데 그가...',
    a: [{
        answer: '자기 옷을 벗는데 뭔가 버벅... 어색...',
        type: [0, 1, 2, 5, 8, 11, 12]
      },
      {
        answer: '태어나서 처음 보는 성인용품을 준비했다',
        type: [0, 1, 2, 7, 9, 11, 15]
      },
    ]
  },
  {
    q: '7.<br><br>드디어 그와 했다...',
    a: [{
        answer: '하늘이 내린 얼굴천재... 하지만 플라토닉 러브를 추구하는 걸로...',
        type: []
      },
      {
        answer: '평범한 외모 속에 숨겨진 그의 엄청난 POWER...',
        type: []
      },
    ]
  },
  {
    q: '8.<br><br>다이어트를 선언한 당신...',
    a: [{
        answer: '진심으로 응원한다며 식단관리사를 자처하는 남친',
        type: []
      },
      {
        answer: '뺄 살이 어딨다고 자꾸 먹이는 남친',
        type: []
      },
    ]
  }
]

const infoList = [{
    name: '다 계획이 있는 츤데레',
    desc: '근심걱정러인 당신에게 어울리는 츤데레 남친 😂 안 그런 척 하면서 사실은 데이트 가기 일주일 전부터 모든 계획을 세워두고 나만 따라와 하는 사람! 내색은 안하지만 연인과 조금이라도 더 행복한 시간을 보내기 위해 노력하는 열정 가득한 사랑꾼을 강추합니다!<br><br>그렇지만 가끔 정해둔 일을 먼저 해결하지 못하면 하루종일 전전긍긍할지도..'
  },
  {
    name: '인간 비글 🐕🐾',
    desc: '연애 이론만 만렙인 당신에게 어울리는 인간 비글 남친! 너 좋아? 나도 좋아!! 인간 댕댕이 같아서 한 번 연애가 시작되면 시도때도 없이 연인에게 좋아좋아 애정공세에 SNS를 탈탈 털어 핫하다는 곳은 꼭 같이 가봐야 직성이 풀리는 사람을 강추합니다!<br><br>그런데 의외로 자기만의 기준이 있어서 친근한 모습에 선을 넘지 않도록 조심!'
  },
  {
    name: '완벽주의자 💯🥇',
    desc: '프로 금사빠인 당신에게 어울리는 완벽주의자 남친! 그렇지만 그도 돌다리도 두들겨보고 지나가는 완벽주의자의 탈을 두른 또 한명의 근심걱정러일 뿐이죠. 썸이 길어지는 이유는 당신이 싫어서가 아니라 완벽한 사랑을 하고 싶기 때문인 사람을 추천합니다!<br><br>그렇다고 생각할 시간을 너무 주면 혼자 삽질할 수 있으니.. 적당히 끊어줍시다!'
  },
  {
    name: '자기애 충만한 독신주의자',
    desc: '젊은 꼰대인 당신에게 어울리는 독신주의자 남친! 상대가 싫은게 아니라.. 내 자유와 내 여유와 내 자신이 쏘 골져스하게 느껴질 뿐.. 스스로를 너무너무 잘 알고 있어서 나르시즘에 빠질 수 있지만 서로의 경계를 존중하는 연인과는 fall in love 쌉 가능한 사람이기 때문에 추천합니다!<br><br>단, 불과 불이 만나면 더 큰 불이 된다고 하죠..'
  },
  {
    name: '공감만 프로 😲',
    desc: '램프의 요정 지니같은 당신에게 어울리는 공감만 프로인 남친! 남보다 남을 더 잘 이해해주는 프로 공감러. 어? 하면 아! 할 수 있는 대단한 능력을 가진 사람을 추천합니다! 쿵짝이 아주그냥 최고일거에요!<br><br>단, 가끔은 공감이 지나쳐 감정이 너무 격해질 수 있어요..'
  },
  {
    name: '프로 금사빠 😍😘',
    desc: '완벽주의자인 당신에게 어울리는 프로 금사빠 남친! 잘나가고 멋있고 이쁜 것들 최고야! 맥시멀리스트의 길을 걷는 남친의 눈에는 세상에 아름다운게 너무너무 많죠. 덕심의 깊이도 만만치 않아서 울 쟈기 내가 지키는 열렬한 지지자 같은 사람을 추천합니다!<br><br>단, 흥미로운건 다 좋아하는게 문제라면 문제...'
  },
  {
    name: '연애 이론만 만렙',
    desc: '인간 비글같은 당신에게 어울리는 연애 이론만 만렙인 남친! 연애 개념, 응용, 기출문제까지 문제집은 벌써 30권째 풀면서, 머릿속으로 당신과의 완벽한 연애를 꿈꾸다보니 가끔 오작동이 일어나요. 그렇지만 일단 연애를 시작하면 쌓아왔던 내공으로 자기가 꿈꿔왔던연애를 실현하는 준비성 만빵 사람을 추천합니다!<br><br>어... 그런데 준비 시간이 길어도 너무 길어!'
  },
  {
    name: '당신만을 생각하는 근심걱정러',
    desc: '츤데레같은 당신에게 어울리는 근심걱정러 남친! 데이트 가는 길에 갑자기 천둥번개가 내리치면 어쩌지..? 연애가 시작되기 전부터 인생에 벌어질 온갖 좋은 일 나쁜 일을 하나하나 다 걱정하며 근심 걱정하지만 다 당신이 너무 좋아서 그런... 그런 사람을 추천합니다!<br><br>다만 걱정이 너무 많아 가끔은 빡..ㅊ..ㅣㄹ 수 있음'
  },
  {
    name: '밀어 붙이기의 달인 불도저',
    desc: '돌다리도 두들겨보는 당신에게 추천하는 불도저 같은 남친! 밀어 붙이기의 달인. 인싸력으로 무장하고 마음에 드는 사람이 나타나며 앞뒤 안재고 우선 바로 옆에 착석하는 사람이죠. 당신이 정신 못 차리게 애정공세를 퍼부어버리는 그런 직진남을 추천합니다!<br><br>단, 한다면 하는 성격이라 쿨한면도 있지만 칼같은 면도 있기 때문에 가끔 상처받을 수도...'
  },
  {
    name: '늘 새로워! 핵인싸 😎',
    desc: '물음표 살인마인 당신에게 어울리는 핵인싸 남친! 말 그대로 좋아하는 것도 많고,  관심있는 것도 많아서 항상 새로운 데이트 코스를 추구하는 남친을 추천합니다! 남친만 따라가면 세상 재밌는 일들은 모든 다 경험할 수 있을 거에요!<br><br>단, 색다름에 지쳐 평온함이 그리운 시절이 올지도..'
  },
  {
    name: '알고보면 순정파 겉바속촉',
    desc: '프로 결정러인 당신에게 어울리는 겉바속촉 남친! 남친의 독립적인 겉모습 때문에 다가가기 어렵지만 알고보면 순정파..♥ 당신의 취미 성향을 세심하게 이해해주기 때문에 같이 있으면 편안함을 느낄 수 있는 사람을 추천합니다!<br><br>단, 혼자만의 시간을 배려해주지 않으면 급발진 할지도...'
  },
  {
    name: '램프의 요정 지니',
    desc: '공감만 프로인 당신에게 어울리는 램프의 요정 지니 같은 남친! 램프에 꽁꽁 숨어살면서 사람을 잘만나지 않지만 한번 사랑에 빠지면 연인이 원하는건 다 들어준답니다! 나만을 바라보고 늘 나를 위해줘서 내마음을 편하게 해주는 그런 사람을 추천합니다!<br><br>마음 여는데 너무 오래걸려서 중도 포기 가능성 多多多'
  },
  {
    name: '인생을 올바르게 젊은 꼰대',
    desc: '독신주의자인 당신에게 어울리는 젊은 꼰대같은 남친! 꼰대는 50대의 전유물이 아니기에 "인생은 올바르게 살아야지!" 정신을 가진 살짝 선비과인 남친은 연애를 즐겁게 하기도 하지만 서로의 공과 사를 철저히 존중하면서 당신과 아주 잘 어울릴겁니다!<br><br>단, 선이 너무 명확해서 베일지도!'
  },
  {
    name: '프로 결정러 ✔',
    desc: '겉바속촉인 당신에게 어울리는 프로 결정러 남친! 모두의 마음을 잘 헤아려줘서 언제나 최선의 선택을 눈 감고도 골라내죠. 평화로운 관계를 추구해서 언제나 상대방을 편하게 해주기 위해 노력하는 그런 멋진 사람을 추천합니다!<br><br>단, 받은 만큼 돌려줘야한다는 사실을 잊지 마세요!'
  },
  {
    name: '돌다리도 두들겨보자',
    desc: '불도저 같은 당신에게 어울리는 돌다리도 두들겨보는 남친! 완벽한 연애를 하고싶다보니 조심조심 언제나 신중하게 행동하는 사람이지만 은근히 오래도록 뜨거운 온돌같은 사랑을 주는 사람을 추천합니다!<br><br>마음 여는데 너무 오래걸려서 중도 포기 가능성 多多多'
  },
  {
    name: '물음표 살인마',
    desc: '핵인싸 같은 당신에게 어울리는 물음표 살인마 같은 남친! 한번 연애를 시작하면 해바라기가 되서 상대방이 돌잡이때 뭘 잡았는지부터 오늘아침점심저녁을뭘 먹었는지 모두 궁금한 남친 덕분에 하루하루가 즐거워질 거에요!<br><br>단, 그의 투머치 질문이 가끔은 버거울지도..'
  }
]
