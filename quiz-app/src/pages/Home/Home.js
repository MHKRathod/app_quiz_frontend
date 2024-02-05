import {Navbar,QuizCard} from "../../component/index";
import axios from "axios";
import {Fragment} from "react";
import { useEffect,useState } from "react";
export const Home = () => {

    const [categories,setcategories] = useState([])
    // console.log(categories)
    useEffect (() => {
        (async () => {
            try{
                 const {data : {data}} = await axios.get("https://quizzyapp-e896bfaca54b.herokuapp.com/categories")
                 setcategories(data);
                 console.log(data)
            }
            catch(error){
                console.log(error)
            }
        })()
    },[])

    
    return (
        <Fragment>
            <Navbar route="/home"/>
            <main className="main d-flex wrap gap-md align-center justify-center">
                {
                   categories.map(category => <QuizCard quizCategory={category} key={category.id}/>)
                }
            </main>
        </Fragment>
           
    )
}