import bgPatternHome2 from "../assets/images/bg-pattern-home-2.svg"

export function Hero() {
    return (
        <div className="hero flex column">
            <div className="flex space-between align-center">
                <h1>Find the best <span>talent</span></h1>
                <p>Finding the right people and building high performing teams can be hard.
                    Most companies aren’t tapping into the abundance of global talent.
                    We’re about to change that.</p>
            </div>
            <img src={bgPatternHome2} />
        </div>
    )
}