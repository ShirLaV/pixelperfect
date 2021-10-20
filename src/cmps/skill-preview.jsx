export function SkillPriview({ skill }) {
    return (
        <section className="skill-preview flex">
            <img src={skill.icon} />
            <div className="skill-data">
                <h2>{skill.title}</h2>
                <p>{skill.txt}</p>
            </div>
        </section>
    )
}