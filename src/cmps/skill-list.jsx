import iconPreson from '../assets/images/icon-person.svg'
import iconCog from '../assets/images/icon-cog.svg'
import iconChart from '../assets/images/icon-chart.svg'

import { SkillPriview } from './skill-preview'
export function SkillList() {
    const _skillsToRender = [{ id: 's101', title: 'Experienced Individuals', icon: iconPreson, txt: 'Our network is made up of highly experienced professionals who are passionate about what they do.' },
    { id: 's102', title: 'Easy to Implement', icon: iconCog, txt: 'Our processes have been refined over years of implementation meaning our teams always deliver.' },
    { id: 's103', title: 'Enhanced Productivity', icon: iconChart, txt: 'Our customized platform with in-built analytics helps you manage your distributed teams.' }
    ]
    return (
        <ul className="skill-list flex column">
            {_skillsToRender.map(skill => {
                return <SkillPriview key={skill.id} skill={skill} />
            })}
        </ul>
    )
}