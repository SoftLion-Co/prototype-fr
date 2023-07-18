import ImpressionSection from "../sections/article_page/ImpressionSection"
import { ArticleSection } from "../sections/article_page/ArticleSection"
import s from "./page.module.scss"

const Blogs = () => {

    return (
        <div>
            <h1>Blogs</h1>
            <ArticleSection/>
            <ImpressionSection/>
        </div>
    )
}

export default Blogs