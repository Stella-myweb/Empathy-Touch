어휘력 테스트 데이터를 만들어드리겠습니다.

```javascript
// vocabularyTest.js

const vocabularyTest = {
  id: 'vocabulary',
  title: '국어 어휘력 테스트',
  description: '당신의 어휘력 수준을 알아보세요!',
  questions: [
    {
      id: 1,
      question: "'노스탤지어'의 의미로 가장 적절한 것은?",
      choices: [
        { id: 'a', text: "과거에 대한 그리움과 향수" },
        { id: 'b', text: "새로운 시도나 도전" },
        { id: 'c', text: "현재의 만족감" },
        { id: 'd', text: "미래에 대한 희망" }
      ],
      correct: 'a'
    },
    {
      id: 2,
      question: "'각골난망'의 의미로 가장 적절한 것은?",
      choices: [
        { id: 'a', text: "뼈에 사무치도록 고통스러움" },
        { id: 'b', text: "뼈에 새겨도 잊지 못할 은혜" },
        { id: 'c', text: "힘든 시기를 겪고 있음" },
        { id: 'd', text: "몸과 마음이 지쳐있음" }
      ],
      correct: 'b'
    },
    {
      id: 3,
      question: "'난형난제'의 올바른 뜻은?",
      choices: [
        { id: 'a', text: "해결하기 쉬운 문제" },
        { id: 'b', text: "풀기 어려운 문제" },
        { id: 'c', text: "복잡한 상황" },
        { id: 'd', text: "곤란한 처지" }
      ],
      correct: 'b'
    },
    {
      id: 4,
      question: "'막역지우'의 의미는?",
      choices: [
        { id: 'a', text: "서로 멀어진 친구" },
        { id: 'b', text: "친하지 않은 사이" },
        { id: 'c', text: "격의 없이 친한 친구" },
        { id: 'd', text: "오랜만에 만난 친구" }
      ],
      correct: 'c'
    },
    {
      id: 5,
      question: "'적반하장'의 상황으로 가장 적절한 것은?",
      choices: [
        { id: 'a', text: "잘못한 사람이 도리어 큰소리침" },
        { id: 'b', text: "서로 양보하며 타협함" },
        { id: 'c', text: "좋은 일이 연달아 생김" },
        { id: 'd', text: "나쁜 소식이 겹쳐서 옴" }
      ],
      correct: 'a'
    },
    {
      id: 6,
      question: "'절치부심'의 의미는?",
      choices: [
        { id: 'a', text: "마음이 평화로움" },
        { id: 'b', text: "이를 갈며 분하게 여김" },
        { id: 'c', text: "매우 기뻐함" },
        { id: 'd', text: "깊이 후회함" }
      ],
      correct: 'b'
    },
    {
      id: 7,
      question: "'우이독경'의 의미로 가장 적절한 것은?",
      choices: [
        { id: 'a', text: "소가 경전을 읽음" },
        { id: 'b', text: "진리를 깨달음" },
        { id: 'c', text: "남의 말을 새겨들음" },
        { id: 'd', text: "남의 말을 귀담아듣지 않음" }
      ],
      correct: 'd'
    },
    {
      id: 8,
      question: "'부화뇌동'의 의미는?",
      choices: [
        { id: 'a', text: "자신의 주관을 지킴" },
        { id: 'b', text: "남의 의견에 맹목적으로 동조함" },
        { id: 'c', text: "신중하게 판단함" },
        { id: 'd', text: "현명한 결정을 함" }
      ],
      correct: 'b'
    },
    {
      id: 9,
      question: "'권토중래'의 의미로 적절한 것은?",
      choices: [
        { id: 'a', text: "실패를 딛고 다시 일어남" },
        { id: 'b', text: "처음부터 다시 시작함" },
        { id: 'c', text: "좌절하고 포기함" },
        { id: 'd', text: "현실에 안주함" }
      ],
      correct: 'a'
    },
    {
      id: 10,
      question: "'고진감래'의 의미는?",
      choices: [
        { id: 'a', text: "쓴 것이 다하면 단 것이 옴" },
        { id: 'b', text: "달콤한 것이 먼저 옴" },
        { id: 'c', text: "고생 끝에 실패함" },
        { id: 'd', text: "쉽게 성공함" }
      ],
      correct: 'a'
    },
    {
      id: 11,
      question: "'일거양득'은 무슨 뜻인가?",
      choices: [
        { id: 'a', text: "한 번 실패하고 두 번 성공" },
        { id: 'b', text: "한 가지 일로 두 가지 이익을 얻음" },
        { id: 'c', text: "두 번 노력해서 한 번 성공" },
        { id: 'd', text: "한 번의 시도로 실패함" }
      ],
      correct: 'b'
    },
    {
      id: 12,
      question: "'과유불급'의 의미로 알맞은 것은?",
      choices: [
        { id: 'a', text: "지나침은 모자람만 못함" },
        { id: 'b', text: "많으면 많을수록 좋음" },
        { id: 'c', text: "부족한 것이 더 좋음" },
        { id: 'd', text: "적당한 것이 가장 나쁨" }
      ],
      correct: 'a'
    },
    {
      id: 13,
      question: "'백해무익'의 반대말로 알맞은 것은?",
      choices: [
        { id: 'a', text: "유용무실" },
        { id: 'b', text: "무용지물" },
        { id: 'c', text: "백익무해" },
        { id: 'd', text: "이해무익" }
      ],
      correct: 'c'
    },
    {
      id: 14,
      question: "'교학상장'의 의미는?",
      choices: [
        { id: 'a', text: "가르치고 배우면서 서로 성장함" },
        { id: 'b', text: "학문의 깊이를 더함" },
        { id: 'c', text: "스승의 은혜에 보답함" },
        { id: 'd', text: "배움의 즐거움" }
      ],
      correct: 'a'
    },
    {
      id: 15,
      question: "'군계일학'의 의미로 알맞은 것은?",
      choices: [
        { id: 'a', text: "많은 사람 중 가장 뛰어난 한 사람" },
        { id: 'b', text: "평범한 무리 중의 하나" },
        { id: 'c', text: "여러 사람이 힘을 모음" },
        { id: 'd', text: "한 사람이 전체를 이끎" }
      ],
      correct: 'a'
    },
    {
      id: 16,
      question: "'금과옥조'의 의미는?",
      choices: [
        { id: 'a', text: "귀중한 보물" },
        { id: 'b', text: "절대적으로 지켜야 할 조항" },
        { id: 'c', text: "아름다운 음악" },
        { id: 'd', text: "완벽한 계획" }
      ],
      correct: 'b'
    },
    {
      id: 17,
      question: "'새옹지마'가 의미하는 것은?",
      choices: [
        { id: 'a', text: "인생의 길흉화복은 예측불가" },
        { id: 'b', text: "좋은 일만 있음" },
        { id: 'c', text: "나쁜 일이 계속됨" },
        { id: 'd', text: "모든 것이 정해져 있음" }
      ],
      correct: 'a'
    },
    {
      id: 18,
      question: "'막상막하'의 의미로 알맞은 것은?",
      choices: [
        { id: 'a', text: "서로 우위를 가리기 어려움" },
        { id: 'b', text: "한쪽이 월등히 뛰어남" },
        { id: 'c', text: "모두 실력이 부족함" },
        { id: 'd', text: "비교할 수 없을 정도로 다름" }
      ],
      correct: 'a'
    },
    {
      id: 19,
      question: "'사필귀정'의 의미는?",
      choices: [
        { id: 'a', text: "모든 일이 잘못됨" },
        { id: 'b', text: "일이 뜻대로 되지 않음" },
        { id: 'c', text: "모든 일은 바른 길로 돌아감" },
        { id: 'd', text: "정의는 실현되지 않음" }
      ],
      correct: 'c'
    },
    {
      id: 20,
      question: "'역지사지'의 의미로 알맞은 것은?",
      choices: [
        { id: 'a', text: "자신의 입장만 고수함" },
        { id: 'b', text: "상대방의 입장에서 생각함" },
        { id: 'c', text: "서로 의견이 다름" },
        { id: 'd', text: "한 곳에 머물러 있음" }
      ],
      correct: 'b'
    }
  ],
  calculateResult: function(score) {
    if (score >= 18) {
      return {
        level: "어휘력 천재",
        description: "당신은 상위 1%의 어휘력을 가지고 있습니다! 한자성어와 고급 어휘를 완벽하게 이해하고 있군요.",
        image: "genius.jpg"
      };
    } else if (score >= 15) {
      return {
        level: "어휘력 달인",
        description: "당신은 매우 뛰어난 어휘력을 보유하고 있습니다. 대부분의 한자성어를 정확히 이해하고 있어요.",
        image: "master.jpg"
      };
    } else if (score >= 12) {
      return {
        level: "어휘력 고수",
        description: "당신은 평균 이상의 어휘력을 가지고 있습니다. 대부분의 상황에서 적절한 어휘를 구사할 수 있어요.",
        image: "expert.jpg"
      };
    } else if (score >= 8) {
      return {
        level: "어휘력 중수",
        description: "당신은 기본적인 어휘력을 갖추고 있습니다. 조금 더 공부하면 고수가 될 수 있어요!",
        image: "intermediate.jpg"
      };
    } else {
      return {
        level: "어휘력 입문자",
        description: "기초부터 차근차근 공부해보는 건 어떨까요? 한자성어부터 시작해보세요!",
        image: "beginner.jpg"
      };
    }
  }
};

export default vocabularyTest;
```

이 코드는:
1. 20개의 한자성어/어휘 문제
2. 각 문제당 4개의 선택지
3. 정답에 따른 점수 계산
4. 5단계의 결과 레벨
   - 어휘력 천재 (18-20점)
   - 어휘력 달인 (15-17점)
   - 어휘력 고수 (12-14점)
   - 어휘력 중수 (8-11점)
   - 어휘력 입문자 (0-7점)

특별히 수정하거나 추가하고 싶은 부분이 있으신가요?
