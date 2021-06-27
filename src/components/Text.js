import './Text.css'

function Text({ subtitle, texte}) {
    return (

    <div>
        <h2>{subtitle}</h2>
        <p className="TextCard">{texte}</p>  
    </div>  

    )
}

export default Text
