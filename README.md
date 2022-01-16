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

---

</div>

# 🖥 화면 정의서

# 📌 요구 사항 분석

**요구기술**

### 백 엔드

Express REST API Server
Mysql DB 연동
배포시 환경 AWS 배포
socket.io
데이터 중복 제거

### 프론트 엔드

React Hook
React Home 화면 및 Main 화면 scroll 애니메이션
배포시 Spring boot(maven)이랑 묶어서 환경 Paas_Ta 배포
socket.io
웹캠 화면 구성
구글, 카카오, 네이버 로그인

### 머신러닝

Django REST API Server
상점 추천 알고리즘

### 클라우드

PaasTa, AWS 앱 배포

## ⛔ 잇슈 ⛔

### 현재 개발 스터디 및 설계 고려가 필요한 부분(22년 1월 16일 기준)

1. 파이썬 django로 머신 러닝 서버 -> 사용자들 취향에 맞는 추천 시스템 알고리즘

A. Goals of Recommender Systems

Ranking version of Problem : 정확한 수치를 예측하는 것이 아닌, 랭킹을 고려해 top-k의 아이템을 선정하는 것이 목적
**_ 본 프로젝트에서는 랭킹 수치보단 상품의 구매 수치를 고려해 사용자에게 노출 시킬 예정 _**

2. AWS EC2 배포 :
   백엔드 서버에 경우 Paas-Ta Mysql 연동 잇슈가 있는 관계로 이번 버젼 업데이트에서 해결이 되는 경우 모든 클라우드 서버는 파스타 클라우드로 고려

3. 리액트 스크롤 애니메이션 이벤트 :
   단순한 웹 기능보다 리액트에 SPA 특성을 활용해 애니메이션을 제공하여 사용자로 하여금 웹 사용에 즐거움 부여

**공통**

로그인 기능

회원가입 기능

구글 로그인 기능

카카오 로그인 기능

네이버 로그인 기능

**사용자 관점**

회원 수정 기능

광고 기능

사용자 편의를 위한 사이드바 기능

1. 서울시 시장별 구분
2. 업종별 구분
3. 가게

   3-1. 등록

   3-2. 가게 등록시 수정 기능 추가

   3-3. 가게 등록시 사용자들과 소통 방송 켜기 기능 추가

4. 장바구니
5. 주문 목록
6. 최하단 로그아웃

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

# ✔ 요구사항 체크리스트(요구사항 정의 후 작성 예정)

# ⚙ 기술 스택

개발언어 : CSS3, HTML5, JAVASCRIPT(ECMAScript6), REACTJS(JSX), Node.js, python3

Front-End : REACT

Back-End : Express(Node.js v16.13.1)

ML : Django

Package

Front-End : Npm( React-router-dom, Material-Ui, axios, react-google-login, react-kakao-login, ... )

Back-End : Npm( Express, mysql, socket.io, dotenv, cors, morgan... )

ML : pip(django, djangorestframework, mysqlclient...)

API - google-login, kakao-login, naver-login

IDE - Visual Studio Code

데이터베이스 - Mysql v8.0

API 테스트 - Postman

개발 운영체제 환경 - 윈도우10

배포 환경 - Paas-Ta, AWS EC2

디자인 툴 - Pigma

형상 관리 - Github

# ⚙ 시스템 아키텍처

# ⚙ ERD (~ing)

![image](https://user-images.githubusercontent.com/57929751/149330368-d87eb7f9-3cc8-4bb3-81d9-22c0bdda7b87.png)

# 📑 상세기술 정의서
