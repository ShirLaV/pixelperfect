import bgHome6 from '../assets/images/bg-pattern-home-6-about-5.svg'

export function CallToActionSection() {
    return (
        <section className="call-to-action-section">
            <img src={bgHome6} />
            <div className="call-to-action-wrapper main-layout">
                <div className="call-to-action-content flex space-between align-center">
                    <h1>Ready to get started?</h1>
                    <button className="contact-btn">contact us</button>
                </div>
            </div>
        </section>
    )
}