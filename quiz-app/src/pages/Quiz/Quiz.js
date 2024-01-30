import { Fragment,useState,useEffect } from "react";
import { Navbar, QuestionAndOptions } from "../../component/index";
import { useAuth } from "../../context/auth-context";
import axios from "axios";
export const Quiz = () => {

    const [quiz,setQuiz] = useState([])
    const[quizCategory] = useAuth();
    console.log(quizCategory)

    useEffect (() => {
        const fetchQuizData = async () => {
            try{
                const {data: {data}} = await axios.get("https://quizzyapp-e896bfaca54b.herokuapp.com/quiz ")
                    setQuiz(data)
            }
            catch(error){
                console.log(error)
            }

        }
        fetchQuizData();
    },[])


    return(
        <Fragment>
            <Navbar/>
            <QuestionAndOptions quizData={quiz}/>
        </Fragment>
    )
}
