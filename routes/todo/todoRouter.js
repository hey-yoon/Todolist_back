import express from "express";
import { checkTodo, deleteTodo, insertTodo, modifyTodo } from "../../controller/todo/todo.js";
import Todo from "../../models/todo_schema.js";

const todoRouter = express.Router();

// 추가 하는 로직(POST)
todoRouter.post("/insert",insertTodo);

// 체크 상태 관리(PUT)
todoRouter.put("/check",checkTodo);

// 리스트 삭제(DELETE)
todoRouter.delete("/delete",deleteTodo);

// 타이틀 수정(PUT)
todoRouter.put("/modify",modifyTodo);

// 할 일 목록 조회 (GET)
todoRouter.get("/", async (req, res) => {
    try {
        const todos = await Todo.find();  // 데이터베이스에서 할 일 목록을 조회
        res.json(todos);  // 할 일 목록을 JSON 형식으로 응답
    } catch (error) {
        res.status(500).json({ error: "데이터베이스 오류" });
    }
});

export default todoRouter; 