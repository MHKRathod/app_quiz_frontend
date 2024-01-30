import "./QuizCard.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context";    

export const QuizCard = ({quizCategory}) => {
    
          
    const {image,title,description,category} = quizCategory;
    const {token,authDispatch} = useAuth();
    const navigate = useNavigate();

    const handlePlayNowClick = () => {
        if(token){
            authDispatch({
                type: "CATEGORY",
                payload: category
            });
            navigate("/quiz");
        }else{
            navigate("/auth/login");
        }
    }
    return(
        <div className="container d-flex direction-column">
            <div className="img-box">
                <img className="img" src={image} alt="quizcard" />
            </div>
            <div className="details">
                <h3 className="title">{title}</h3>
                <span>{description}</span>
            </div>
            <button className="button play-now-btn btn-primary cursor" onClick={handlePlayNowClick}>Play Now</button>
        </div>
    )
}




