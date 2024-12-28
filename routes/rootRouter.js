import express from 'express';
import { index } from '../controller/index.js'; //확장자 확인
// import userRouter from './user/userRouter.js';
// import authRouter from './auth/authRouter.js';
import todoRouter from './todo/todoRouter.js';
//app에서 use로 가로채서 rootRouter에서 경로 처리

// express에서 router가져옴
const rootRouter = express.Router();

// fetch에 따라서 실행(method방식 구분)
// get: url 경로를 입력해서 들어오는 요청, get데이터도 요청 가능
// get요청을 했을때 index함수가 실행되도록 로직 작성(index-> controller에서 만듦.)

rootRouter.get("/",index);
// rootRouter.post("/",index);
// rootRouter.delete("/",index);
// rootRouter.put("/",index);

// 또 가로채서, /user 경로로 들어오면 userRouter 함수 실행
rootRouter.use("/user",userRouter);
// rootRouter.use("/auth",authRouter);
rootRouter.use("/todo",todoRouter);

export default rootRouter;