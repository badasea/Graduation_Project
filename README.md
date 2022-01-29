# 👨‍🎓 Graduation_Project

<div align="center">

**👨‍🎓 졸업 작품 작품명 : 리코 마켓(클라우드 기반 전통시장 라이브커머스)**

</div>

<div align="center">

![image](https://user-images.githubusercontent.com/57929751/149087226-b96d6163-8da9-47a1-9f1b-d241a2afbc80.png)

==============================

**Front-End : React**

**Back-End : Express, Django**

**DB : Mysql**

**Infra : Paas-Ta, AWS**

==============================

</div>

프로젝트 인원 총 1명

👨 badasea

</div>

## ⛔ 잇슈 ⛔

### 현재 개발 스터디 및 설계 고려가 필요한 부분(22년 1월 29일 기준)

1. 파이썬 django로 머신 러닝 서버 -> 사용자들 취향에 맞는 추천 시스템 알고리즘

<!-- A. Goals of Recommender Systems

Ranking version of Problem : 정확한 수치를 예측하는 것이 아닌, 랭킹을 고려해 top-k의 아이템을 선정하는 것이 목적
**_ 본 프로젝트에서는 랭킹 수치보단 상품의 구매 수치를 고려해 사용자에게 노출 시킬 예정 _** -->

추천 시스템 도입

- a. 콘텐츠 기반 필터링 (Content-base-filterling)
- b. 현업 필터링 CF(Collaborative Filtering)

2. 도커 및 쿠버네티스 도입? :
   프론트(react, ejs), 백(express, django) 총 4개 서버를 배포해야 하기 때문에 도커를 나누어 쿠버네티스에서 관리

3. AWS EC2 배포 :
   백엔드 서버에 경우 Paas-Ta Mysql 연동 잇슈가 있는 관계로 이번 버젼 업데이트에서 해결이 되는 경우 모든 클라우드 서버는 파스타 클라우드로 고려

4. SNS 로그인 버튼 위치 조정 :
   기업에 디자인 법으로 인한 로고 디자인 크기 수정 불가 잇슈로 버튼 크기가 다름 조정이 필요함

5. 카드 가운데 정렬 혹은 다중 카드 선언:
   요구사항에 맞는 기능은 구현 했으나, css3 언어에 부족으로 깔끔한 디자인은 구현 x,
   현재 더 중요한 기능들이 미구현임으로 디자인 보류

6. django와 mysql 연동 잇슈

# 🖥 화면 정의서 (~ing)

<p float="left">
<img src="https://user-images.githubusercontent.com/57929751/151015623-50ecfb69-2870-482f-9f03-655abe4dbbb1.png" width="30%" height="30%" >
<img src="https://user-images.githubusercontent.com/57929751/151016314-5ac30596-5be5-47ad-a5cb-1819b7637818.png" width="30%" height="30%" >
<img src="https://user-images.githubusercontent.com/57929751/151016433-86564773-eb04-42db-9c93-7d2a0f2fb929.png" width="30%" height="30%" >
<img src="https://user-images.githubusercontent.com/57929751/151016613-100fb215-9d1d-4696-9e03-3e5e63cab62d.png" width="30%" height="30%" >
<img src="https://user-images.githubusercontent.com/57929751/151016734-d56cb802-6a51-49fc-a609-46b14c75688c.png" width="30%" height="30%" >

</p>

<img src="https://user-images.githubusercontent.com/57929751/149899911-9cab2de6-5ebd-460d-8ad3-e7a4b8b16fea.png" width="80%" height="80%" >

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/57929751/150293856-80d1223f-cd12-495a-b56b-b5209f2a7163.gif)

# 📌 요구 사항 분석

**요구기술**

### 백 엔드

- Express REST API Server
- Mysql DB 연동
- 배포시 환경 AWS 배포
- socket.io
- 데이터 중복 제거

### 프론트 엔드

- React Hook
- React Home 화면 및 Main 화면 scroll 애니메이션
- 배포시 Spring boot(maven)이랑 묶어서 환경 Paas_Ta 배포
- socket.io
- 웹캠 화면 구성
- 구글, 카카오, 네이버 로그인

### 머신러닝

- Django REST API Server
- 상점 추천 알고리즘

### 클라우드

PaasTa, AWS 앱 배포

**공통**

로그인 기능

회원가입 기능

구글 로그인 기능

카카오 로그인 기능

네이버 로그인 기능

**사용자 관점**

회원 수정 기능

메인 화면 상단 광고 기능

사용자 편의를 위한 사이드바 기능

1. 서울시 시장별 구분

   1-1. 성북구

   1-2. 영등포구

   1-3. 종로구

2. 업종별 구분

   2-1. 음식점

   2-2. 한복

   2-3. 공방

   2-4. 기타

3. 가게(가게 사장님으로 user_type 변경시)

   3-1. 가게 등록

   3-2. 가게 수정

   3-3. 상품 등록

   3-4. 상품 수정

   3-5. 가게 등록시 사용자들과 소통 방송 켜기 기능 추가

4. 장바구니
5. 주문 목록
6. 로그아웃

구매자와 판매자간에 화상 통화를 위한 ZOOM 기능

구매자와 판매자간에 채팅 기능

다수 사용자 수용 기능(소켓)

암호화 기능

장바구니 목록 알림 기능

상품

- 구매 기능

장바구니

- 장바구니 물품 목록 조회 기능
- 장바구니 물품 선택 삭제 기능

구매(영수증)

- 구매 목록 조회 기능

고객센터 게시판 기능(TODOLIST 로)

**판매자 관점**

가게

- 등록 기능
- 수정 기능

상품

- 등록 기능
- 수정 기능
- 삭제 기능

**시스템관리자**

시스템 관리자 기능

대시보드 차트 분석(아마 chart.js) 기능

데이터 검색 기능

유저

- 등록 기능
- 수정 기능
- 삭제 기능

가게

- 등록 기능
- 수정 기능
- 삭제 기능

상품

- 등록 기능
- 수정 기능
- 삭제 기능

구매목록

- 등록 기능
- 수정 기능
- 삭제 기능

# ✔ 요구사항 체크리스트

- 개발자 관점
- [ ] 추천 시스템 알고리즘 구현
- [ ] 소스 코드 정리 (직관적인지)

- 공통
- [x] 로그인 페이지
- [x] 회원가입 페이지
- [x] 구글 로그인 기능
- [x] 카카오 로그인 기능
- [x] 네이버 로그인 기능

- 사용자 관점
- [x] 다수 사용자 영상 통화 기능
- [x] 다수 사용자 채팅 기능
- [ ] 메인 화면 구성
- [ ] 가게 랜덤 출력
- [ ] 상품 랜덤 출력
- [ ] 콘텐츠 기반 필터링 기능 (유저 취향에 따라)
- [ ] 협업 필터링 기능 (모든 유저 추천)
- [x] 메인 화면 광고 배너 프로그래스바 기능
- [x] 사용자 개인 메뉴 사이드바
- [x] 지역별 시장 카테고리
- [x] 업종별 시장 카테고리
- [x] 개인정보 수정을 위한 마이 페이지
- [ ] 고객센터 게시판 페이지
- [ ] 상품 구매 페이지
- [ ] 장바구니 페이지
- [ ] 영수증 페이지
- [ ] 구매 목록 페이지

- 가게 운영자 관점
- [x] 가게 등록 페이지
- [x] 가게 수정 페이지
- [x] 상품 등록 페이지
- [x] 상품 수정/삭제 페이지
- [ ] 사용자가 구매한 상품 리스트 페이지(영수증)

- 시스템 관리자 관점
- [ ] 대시보드 페이지
- [ ] 지역별 차트 분석
- [ ] 업종별 차트 분석
- [ ] 회원 관리 페이지
- [ ] 가게 관리 페이지
- [ ] 물품 관리 페이지
- [ ] 주문 관리 페이지

# ⚙ 기술 스택

개발언어 : CSS3, HTML5, JAVASCRIPT(ECMAScript6), REACTJS(JSX), Node.js, python3

Front-End : REACT

Back-End : Express(Node.js v16.13.1)

ML : Django

Package

Front-End : Npm( React-router-dom, Material-Ui, axios, react-google-login, react-kakao-login, slick... )

Back-End : Npm( Express, mysql, socket.io, dotenv, cors, morgan... )

ML : pip(django, djangorestframework, mysqlclient...)

API - google-login, kakao-login, naver-login

IDE - Visual Studio Code, Anaconda Jupyter Notebook

데이터베이스 - Mysql v8.0

API 테스트 - Postman

개발 운영체제 환경 - 윈도우10

배포 환경 - Paas-Ta, AWS EC2

디자인 툴 - Pigma

형상 관리 - Github

# ⚙ 시스템 아키텍처

# ⚙ ERD (~ing 2022. 01. 26)

![image](https://user-images.githubusercontent.com/57929751/151014356-99929edc-51db-4cfe-9c95-0c68cdcaea94.png)

# 📑 상세기술 정의서
