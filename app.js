// package.json type : module 추가(import하기전에 추가)
// dbname : project 이름으로 변경(connect.js)
// 1. db : DBMS 연결 및 설정
// 2. app.js(server.js) : 서버 설정, 미들웨어 설정 및 라우팅 설정
// 3. routers : 요청한 경로에 맞는 controller로 실행하기 위한 라우터 작성
// 4. controller : DB에 접근하는 비즈니스 로직 작성(회원가입,로그인 로직)
// 5. schemas : 데이터에 맞는 스키마 구성 (models 폴더 안에)
// 6. utils : 중복 코드를 하나의 유틸 함수로 묶거나 외부 라이브러리들
// 7. auth : 인증, 인가 (OAuth, JWT, local)

// 설치한 라이브러리 모듈 가져오기
import connect from './connect/connect.js' //확장자!
import express from 'express';
import dotenv from 'dotenv';
import cors from "cors"; //crossorigin 리소스

// 4.16버전 이상 내장
import bodyParser from 'body-parser';//body에 들어오는 데이터를 쉽게 가져오게끔 도와주는 라이브러리
import rootRouter from './routes/rootRouter.js';

// passport
// import passport from 'passport';
// import { initializePassport } from './auth/auth.js';


connect(); // mongoDB 연결
dotenv.config() // 환경변수 설정

const port = 8000; //포트 번호 설정
const app = express(); //express 사용

// .use()는 미들웨어
// 어떤 요청이든 지정된 로직보다 먼저 작업한다. 즉 전처리이다.
// 그 모든 데이터들을 json으로 바꿔서 온다. 그러면 매번 바꿀 필요가 없게된다.
app.use(bodyParser.json());

// CORS 전체 허용
// CORS 테스트용 서버에서 모두 허용
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  next()
})

// extended true면 qs모듈을 사용하여 쿼리스트링으로 인식
app.use(express.urlencoded({extended : false})); //객체 인식할거라서 false로 적음
app.use(cors({
  origin : "*", //요청 경로 전부 받을게
  method : ['GET', 'POST', 'DELETE', 'PUT'], //이 방식들로 받을게
  credentials : true, //쿠키같은 정보들 모두 허용
}))

// passport 로직
// initializePassport()

// 라우터 경로 기본설정
//  /경로로 들어오면 싹다 보내줘
app.use("/",rootRouter)

// 서버 실행
app.listen(port, () => {
  console.log("express 서버 실행!")
})
