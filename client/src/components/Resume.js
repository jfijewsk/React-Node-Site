import ResumePDF from "../Assests/James Fijewski Resume.pdf"

export default function Resume(){  

    return(

        <div className = "PDF">
          <a href = {ResumePDF} rel="noopener noreferrer">Download Pdf</a>
        </div>
    )

}