import quotes from '../assets/images/icon-quotes.svg'

export function RecommentPreview({recomment}) {
    return (
        <div className="recomment-preview flex column align-center">
            <img src={quotes} className="quotes"/>
            <div className="recomment-data flex column align-center">
                <p className="txt">{recomment.txt}</p>
                <h3>{recomment.name}</h3>
                <p className="role">{recomment.role}</p>
                <img src={recomment.img}/>
            </div>
        </div>
    )
}