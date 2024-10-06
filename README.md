# ai-quiz

<div align='center'>

**CS 면접, 이제 게임처럼 준비하세요!**

AI 기반 퀴즈 플랫폼으로 CS 지식을 재미있게 테스트하고 향상시킬 수 있습니다.

<br/>

🚀 **Demo** &nbsp; | &nbsp; https://ai-cs-quiz.netlify.app/

</div>

<br/>

![preview](/docs/preview.png)

<br/>

`Open AI API`를 활용하여 면접 문제를 자동으로 생성하고, 이를 대화형 퀴즈 형태로 제공하는 애플리케이션입니다. <br/>
사용자들은 이 애플리케이션을 통해 CS 면접 준비를 효과적으로 할 수 있으며, 다양한 주제에 대한 지식을 테스트하고 향상시킬 수 있습니다.

<br/>

## 주요 기능

#### 1. 주제 선택

- 메인 주제 선택
- 선택한 메인 주제에 따른 세부 주제 선택

#### 2. 퀴즈 설정

> 모달을 통한 퀴즈 설정

- 난이도 선택
- 문제 수 설정
- 문제 유형 선택:
  - OX 퀴즈
  - 객관식
  - 빈칸 채우기

#### 3. 퀴즈 생성

- 설정에 따른 AI 기반 퀴즈 자동 생성

#### 4. 퀴즈 응시

- 사용자가 생성된 퀴즈에 답변

#### 5. 결과 분석

> 퀴즈 완료 후 결과 페이지 제공

- 정답 개수
- 오답 개수
- 오답 노트:
  - 틀린 문제에 대한 정답 및 설명 제공

<br/>

## 사용 기술

[![Tech Stack](https://skillicons.dev/icons?i=ts,react,tailwind,vite,expressjs,mongodb,yarn)](https://skillicons.dev)

- zustand(전역 상태 관리)
- react0query(서버 상태 관리)
