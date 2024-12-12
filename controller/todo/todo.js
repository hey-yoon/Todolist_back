import Todo from "../../models/todo_schema.js"

// 추가 하는 로직(POST)
const insertTodo = async(req,res)=>{
    try{
        const {id,title,isChecked} = req.body;
        const add = await Todo.create({ id, title, isChecked });
        res.json(add);
    } catch (error){
        res.status(500).json({ error: "데이터베이스 오류" });
    }
}

// 체크 상태 관리(PUT)
const checkTodo = async(req,res)=>{
    // try{
    //     const findId = await Todo.findOne({isChecked: req.body.isChecked})
    //     const updateCheck = await Todo.updateOne(findId,{
    //         isChecked: !isChecked
    //     })
    //     res.json(updateCheck)
    // }
    // catch(error){
    //     res.status(500).json({error:"데이터베이스 오류"});
    // }
}

// 리스트 삭제(DELETE)
const deleteTodo = async(req,res)=>{

}

// 타이틀 수정(PUT)
const modifyTodo = async(req,res)=>{

}

export {insertTodo,checkTodo,deleteTodo,modifyTodo}