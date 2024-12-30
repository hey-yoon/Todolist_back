import User from "../../models/user_schema.js";

const registerUser = async(req,res) => {
    // 작성한 email,password를 가져와서
    const {email,password} = req.body;

    // User 스키마에 입력한 email을 찾고 변수에 저장
    // lean이 자바스크립트 객체로 만들어준다.
    const findUser = await User.findOne({email:email}).lean();
    console.log(findUser)

    //  그 변수가 존재한다면, 회원가입 성공 여부와 메시지 띄우기(나중에 front단으로 보내줌)
    if(findUser){
        res.status(409).json({
            registerSuccess : false,
            message: "이미 존재하는 이메일입니다."
        })
    }else{
        // 만약에 user가 없다면, 아이디/비밀번호를 변수에 담아서, 스키마에 저장한다.
        let register = {
            email: email,
            password: password
        }
        await User.create(register);

        // 그리고 front단으로 결과 전송
        return res.status(201).json({
            registerSuccess: true,
            message: "축하드립니다. 회원가입이 완료되었습니다."
        })
    }
}

const loginUser = (req,res) => {}
const updateUser = (req,res) => {}
const deleteUser = (req,res) => {}

export {registerUser,loginUser,updateUser,deleteUser}