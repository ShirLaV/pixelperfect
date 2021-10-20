import { DescriptionSection } from '../cmps/description-section.jsx'
import { HeroContainer } from '../cmps/hero-container.jsx'
import { SkillsContainer } from '../cmps/skills-container.jsx'
import {RecommendationContainer} from '../cmps/recommendation-container.jsx'
import {CallToActionSection} from '../cmps/call-to-action-section.jsx'
// import {Footer} from './cmps/footer.jsx'

export function Homepage() {

    const _cmpsToRender = [{id: "c101", component: <HeroContainer/>},
{id: "c102", component: <SkillsContainer/>},
{id: "c103", component: <RecommendationContainer/>}]

    return (
        <section className="home-page section-container">
            <ul className="description-sections-list clean-list">
                {_cmpsToRender.map(cmp => {
                    return <li key={cmp.id}>
                        <DescriptionSection children={cmp.component} />
                    </li>
                })}
            </ul>
            <CallToActionSection />
            {/* <Footer /> */}
        </section>
    )
}

