import Todo from "../../models/todo_schema.js"

// 추가 하는 로직(POST)
const insertTodo = async(req,res)=>{
    try{
        const {id,title,isChecked} = req.body;
        const add = await Todo.create({ id, title, isChecked });
        res.status(201).json(add);
    } catch (error){
        console.error(error)
        res.status(500).json({ error: "데이터베이스 오류" });
    }
}

// 체크 상태 관리(PUT)

const checkTodo = async (req, res) => {
    try {
        console.log(req)
        const { id, isChecked } = req.body;
        
        const updateCheck = await Todo.updateOne(
            { id },
            { isChecked: !isChecked}
        );

        res.status(200).json({ message: "성공적으로 업데이트되었습니다.", updateCheck });
    } catch (error) {
        console.error("오류 발생:", error);
        res.status(500).json({ error: "데이터베이스 오류" });
    }
};


// 리스트 삭제(DELETE)
const deleteTodo = async(req,res)=>{
    try{
        const {id} = req.body;
        await Todo.deleteOne({id});
        res.status(200).json({message:"삭제성공"});
    }
    catch(error){
        console.error("오류 발생:",error);
        res.status(500).json({error:"데이터베이스 오류"})
    }
}

// 타이틀 수정(PUT)
const modifyTodo = async(req,res)=>{
    try{
        const {id,isChecked,title} = req.body
        await Todo.updateOne({id},{title,isChecked});
        res.status(200).json({message:"수정완료"})
    }
    catch(error){
        console.error("오류발생:",error);
        res.status(500).json({error:"데이터베이스 오류"})
    }
}

export {insertTodo,checkTodo,deleteTodo,modifyTodo}