import { useRouter } from "next/router"
import s from "./page.module.scss"
//import all jsons
import data_java from "@/data/technologies/data_java.json"
import AdvantagesSection from "@/app/sections/technologies_page/AdvantagesSection"

const Technology = () => {

    // const router = useRouter()
    // const technology = router.query.technologyId
    //знайти потрібний json за id (switch case)

    // const getData = () => {
    //     let data = {}
        // switch(technology)
        //case: java
        //data = data_java
        //default: null
    // }

    // const data = getData()

    // if(!data){
    //     return (
    //         <h1>Data not found</h1>
    //     )
    // }

    //створити інтерфейс за json'oм для data ()
    return (
        <div>
            <AdvantagesSection />
        </div>
    )
}

export default Technology