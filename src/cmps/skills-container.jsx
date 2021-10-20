import { SkillList } from './skill-list'

export function SkillsContainer() {
    return (
        <section className="skills-container" >
            <div className="skills-wrapper main-layout">
                <div className="skills-content flex">
                    <h1>Build & manage distributed teams like no one else.</h1>
                    <SkillList />
                </div>
            </div>
        </section>
    )
}