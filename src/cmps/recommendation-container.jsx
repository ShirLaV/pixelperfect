import { RecommendationList } from '../cmps/recommendation-list.jsx'

export function RecommendationContainer() {
    return (
        <section className="recommendation-container">
            <div className="recommendation-wrapper main-layout flex column">
                <h1>Delivering real results for top companies. Some of our <span>success stories.</span></h1>
                <RecommendationList />
            </div>
        </section>
    )
}