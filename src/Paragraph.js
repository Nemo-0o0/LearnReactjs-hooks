import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Paragraph() {

    const content = useContext(ThemeContext)

    return ( 
        <p className={content.theme}>Paragraph Paragraph Paragraph Paragraph Paragraph ParagraphParagraph Paragraph Paragraph</p>
     );
}

export default Paragraph;