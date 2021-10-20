import {RecommentPreview} from '../cmps/recomment-preview.jsx'

import avatarKady from '../assets/images/avatar-kady.jpg'
import avatarAiysha from '../assets/images/avatar-aiysha.jpg'
import avatarArthur from '../assets/images/avatar-arthur.jpg'

export function RecommendationList() {
    const _recomments = [
        {
            id: 'r101',
            txt: ' “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”',
            name: 'Kady Baker',
            role: 'Product Manager at Bookmark',
            img: avatarKady
        },
        {
            id: 'r102',
            txt: '“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”',
            name: 'Aiysha Reese',
            role: 'Founder of Manage',
            img: avatarAiysha
        },
        {
            id: 'r104',
            txt: '“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”',
            name: 'Arthur Clarke',
            role: 'Co-founder of MyPhysio',
            img: avatarArthur
        }
    ]
    return (
        <ul className="flex recomment-list">
            {_recomments.map(recomment => {
                return <RecommentPreview key={recomment.id} recomment={recomment} />
            })}
        </ul>
    )
}