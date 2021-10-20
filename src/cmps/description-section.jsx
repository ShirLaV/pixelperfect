export function DescriptionSection({children}) {
return (
    <section className="home-description-section" style={children.style}>
        {children}
    </section>
)
}