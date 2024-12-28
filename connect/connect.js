import mongoose from "mongoose";
// .env에서 사용하게끔 config 작업 필요
import dotenv from 'dotenv';

dotenv.config();
// url주소는 노출되면 안되기 때문에(안에 개인 정보들어있음) 환경변수로 설정해서 변수에 저장
// 내 로컬 환경에서만 적용되어야할 값
// 암호화 되어있는 key들 (나만 봐야하는 것) / .gitignore 파일: git에 올라가면 안되는거

const connection_url = process.env.CONNECT_URL;
// console.log(connection_url)

const connect = async () => {
  // 배포환경이 아니라면,
  if ( process.env.NODE_ENV !== "production" ){
    // 디버그 true로 설정, SQL문이 콘솔에 출력된다.
    mongoose.set("debug", true);
  }

  mongoose
    .connect(connection_url, {
      dbName : "todoList", // 컬렉션을 관리하는 database의 이름 설정
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected To MongoDB"); // 연결 성공
    })
    .catch((err) => {
      console.error("Connected failed to MongoDB")
      console.error(err)
    })

}

export default connect;