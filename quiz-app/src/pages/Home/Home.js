import {Navbar,QuizCard} from "../../component/index";
import axios from "axios";
import {Fragment} from "react";
import { useEffect,useState } from "react";
export const Home = () => {

    const [categories,setcategories] = useState([])

    useEffect (() => {
        (async () => {
            try{
                 const {data : {data}} = await axios.get("https://quizzyapp-e896bfaca54b.herokuapp.com/categories")
                 console.log(data);
                 setcategories(data);
            }
            catch(error){
                console.log(error)
            }
        })()
    },[])
    return (
        <Fragment>
            <Navbar/>
            <main className="main d-flex wrap gap-md align-center justify-center">
                {
                   categories.map(category => <QuizCard category={category} key={category.id}/>)
                }
            </main>
        </Fragment>
           
    )
}