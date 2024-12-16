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
// const checkTodo = async(req,res)=>{
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
// }

const checkTodo = async (req, res) => {
    try {
        console.log(req)
        const { id, isChecked } = req.body; // 클라이언트에서 전송된 데이터 구조 분해
        
        if (!id) {
            return res.status(400).json({ error: "ID가 없습니다." });
        }

        // 해당 ID의 항목 찾기
        const findTodo = await Todo.findOne({ id });
        if (!findTodo) {
            return res.status(404).json({ error: "해당 ID를 가진 Todo를 찾을 수 없습니다." });
        }

        // isChecked 상태 업데이트
        const updateCheck = await Todo.updateOne(
            { id }, // 조건
            { $set: { isChecked: !isChecked } } // 업데이트할 내용
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