import { Fragment,useState,useEffect } from "react";
import { Navbar, QuestionAndOptions } from "../../component/index";
import { useQuiz } from "../../context/index";
import axios from "axios";
export const Quiz = () => {

    
    const{quizCategory,quiz,quizDispatch} = useQuiz();


    console.log(quizCategory)

    useEffect (() => {
        const fetchQuizData = async () => {
            // try{
            //     const {data: {data}} = await axios.get("https://quizzyapp-e896bfaca54b.herokuapp.com/quiz ",{
            //         headers: {authorization: localStorage.getItem("token")}
            //     })
            //     console.log("API Response:", data);
            //         const filteredData = data.filter(({category}) => category === quizCategory)
            //         console.log(filteredData)
            //         setQuiz(filteredData)
            //         console.log("API Response:", data);
            // }
            // catch(error){
            //     console.log("not getting the api data")
            //     console.log(error)
            // }

            try {
                const response = await axios.get("https://quizzyapp-e896bfaca54b.herokuapp.com/quiz ", {
                    headers: { authorization: localStorage.getItem("token") }
                });
            
                console.log("API Response:", response.data); // Log API response here
            
                // Extracting quiz data from the response
                const data = response.data;
            
                // Filtering the quiz data based on the selected category
                const filteredData =
          data &&
          data.length > 0 &&
          data.filter(({ category }) => category === quizCategory);
        if (filteredData && filteredData.length > 0) {
          quizDispatch({
            type: "SET_QUIZ",
            payload: filteredData,
          });
          localStorage.setItem("quiz", JSON.stringify(filteredData));
        }
            } catch (error) {
                console.log("Error fetching API data:", error);
            }

            // try {
            //     const response = await axios.get("https://quizzyapp-e896bfaca54b.herokuapp.com/quiz ", {
            //         headers: { authorization: localStorage.getItem("token") }
            //     });
            
            //     console.log("API Response:", response.data); // Log API response here
            
            //     const data = response.data && response.data.data; // Check if response.data and response.data.data exist
            //     if (data) {
            //         const filteredData = data.filter(({ category }) => category === quizCategory);
            //         console.log(filteredData);
            //         setQuiz(filteredData);
            //     } else {
            //         console.log("API response format incorrect");
            //     }
            // } catch (error) {
            //     console.log("Error fetching API data:", error);
            // }
            

        }
        fetchQuizData();
    },[])


    return(
        <Fragment>
            <Navbar route="/quiz"/>
            {
                quiz && quiz.length > 0 && <QuestionAndOptions quizData={quiz}/>
            }
            
        </Fragment>
    )
}
