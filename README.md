# 👨‍🎓 Graduation_Project

<div align="center">

**👨‍🎓 졸업 작품 작품명 : LI.CO. MARKET(클라우드 기반 전통시장 라이브커머스)**

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

### 현재 개발 스터디 및 설계 고려가 필요한 부분(22년 2월 8일 기준)

1. 파이썬 django로 머신 러닝 서버 -> 사용자들 취향에 맞는 추천 시스템 알고리즘

추천 시스템 도입

- a. 콘텐츠 기반 필터링 (Content-base-filterling)
- b. 현업 필터링 CF(Collaborative Filtering)

2. 도커 및 쿠버네티스 도입? :
   프론트(react, ejs), 백(express, django) 총 4개 서버를 배포해야 하기 때문에 도커를 나누어 쿠버네티스에서 관리

3. 데이터 베이스 이미지 처리

4. Order 테이블 생성 필요

5. 네이버 로그인 리다이렉트 오류

6. 관심 지역, 업종 Array DB 잇슈

7. 가게 및 상품 랜덤 호출시 언바운드 랜덤 잇슈 발생

8. Input 태그 고려

9. 상품 등록 페이지, 고객 센터 페이지

10. 어드민 페이지

# 🖥 화면 정의서 (~ing)

<p float="left">
<img src="https://user-images.githubusercontent.com/57929751/151015623-50ecfb69-2870-482f-9f03-655abe4dbbb1.png" width="30%" height="30%" >
<img src="https://user-images.githubusercontent.com/57929751/151016314-5ac30596-5be5-47ad-a5cb-1819b7637818.png" width="30%" height="30%" >
<img src="https://user-images.githubusercontent.com/57929751/152172172-eb4f7782-31ca-4fed-bbbe-6ddc77369138.png" width="30%" height="30%" >

<img src="https://user-images.githubusercontent.com/57929751/151016433-86564773-eb04-42db-9c93-7d2a0f2fb929.png" width="30%" height="30%" >
<img src="https://user-images.githubusercontent.com/57929751/151016613-100fb215-9d1d-4696-9e03-3e5e63cab62d.png" width="30%" height="30%" >
<img src="https://user-images.githubusercontent.com/57929751/151016734-d56cb802-6a51-49fc-a609-46b14c75688c.png" width="30%" height="30%" >

</p>
메인 화면

![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/57929751/152551442-bf7052fc-9ebb-435d-8b4c-ba739a3c0620.gif)

가게, 상품 상세 페이지

<p float="left">
<img src="https://user-images.githubusercontent.com/57929751/152690359-0691edf4-692f-402b-8d3e-90ce7f77a30f.png" width="30%" height="30%" >
<img src="https://user-images.githubusercontent.com/57929751/152691342-f3ce8b84-30f2-445f-bc3d-52a5be72c2ff.png" width="30%" height="30%" >
<img src="https://user-images.githubusercontent.com/57929751/152692533-9df1cbb2-bb24-4ae6-b00c-a922ef876ea2.png" width="30%" height="30%" >
</p>

가게 관리 수주 매출 페이지

<p float="left">
<img src="https://user-images.githubusercontent.com/57929751/152842842-43cde642-2db2-49c9-b412-5b2d4b27c037.png" width="30%" height="30%" >
<img src="https://user-images.githubusercontent.com/57929751/152842915-09615471-918c-4ab7-8858-4711b656a6fc.png" width="30%" height="30%" >
<img src="https://user-images.githubusercontent.com/57929751/152842948-4ae34455-d4ca-4479-98e0-288efa362710.png" width="30%" height="30%" >
</p>

# ⚙ 시스템 아키텍처 (~ing 2022. 02. 08)

![image](https://user-images.githubusercontent.com/57929751/152846393-dfb27536-d21a-4cb7-835f-85fbd940584f.png)

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

   3-5. 수주 매출

   3-6. 가게 등록시 사용자들과 소통 방송 켜기 기능 추가

4. 장바구니
5. 주문 목록
6. 로그아웃

구매자와 판매자간에 화상 통화를 위한 ZOOM 기능

구매자와 판매자간에 채팅 기능

다수 사용자 수용 기능(소켓)

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

수주 / 매출 조회 기능

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
- [ ] 소스 코드 정리 (직관적인지)
- [ ] 클라우드 서버 배포 기능

- 공통
- [x] 로그인 페이지
- [x] 회원가입 페이지
- [x] 구글 로그인 기능
- [x] 카카오 로그인 기능
- [x] 네이버 로그인 기능

- 사용자 관점
- [x] 다수 사용자 영상 통화 기능
- [x] 다수 사용자 채팅 기능
- [x] 메인 화면 구성
- [x] 가게 랜덤 출력
- [x] 상품 랜덤 출력
- [ ] 콘텐츠 기반 필터링 기능 (유저 취향에 따라)
- [ ] 협업 필터링 기능 (모든 유저 추천)
- [x] 메인 화면 광고 배너 프로그래스바 기능
- [x] 사용자 개인 메뉴 사이드바
- [x] 지역별 시장 카테고리
- [x] 업종별 시장 카테고리
- [x] 개인정보 수정을 위한 마이 페이지
- [x] 고객센터 게시판 페이지
- [x] 상품 구매 페이지
- [x] 장바구니 페이지
- [x] 구매 목록 페이지

- 가게 운영자 관점
- [x] 가게 등록 페이지
- [x] 가게 수정 페이지
- [x] 상품 관리 페이지
- [x] 수주 매출 페이지

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

Front-End : Npm( React-router-dom, Material-Ui, axios, react-google-login, react-kakao-login, slick, chart.js... )

Back-End : Npm( Express, mysql, socket.io, dotenv, cors, morgan... )

ML : pip(django, djangorestframework, mysqlclient, django-cors-headers, pymysql...)

API - google-login, kakao-login, naver-login

IDE - Visual Studio Code, Anaconda Jupyter Notebook

데이터베이스 - Mysql v8.0

API 테스트 - Postman

개발 운영체제 환경 - 윈도우10

배포 환경 - Paas-Ta, AWS EC2

디자인 툴 - Pigma

font : Sans TTF

형상 관리 - Github

# ⚙ ERD (~ing 2022. 02. 05)

![image](https://user-images.githubusercontent.com/57929751/152569829-121f2eef-a6a1-46b9-8dd5-7bea19b1db11.png)

# 📑 상세기술 정의서
