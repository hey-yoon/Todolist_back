import Todo from "../../models/todo_schema.js"

// 추가 하는 로직(POST)
const insertTodo = async(req,res)=>{
    console.log(req)
    const {id,title,isChecked} = req.body;
    await Todo.create(title);
}

// 체크 상태 관리(PUT)
const checkTodo = async(req,res)=>{

}

// 리스트 삭제(DELETE)
const deleteTodo = async(req,res)=>{

}

// 타이틀 수정(PUT)
const modifyTodo = async(req,res)=>{

}

export {insertTodo,checkTodo,deleteTodo,modifyTodo}