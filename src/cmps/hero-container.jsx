import React from 'react'
import { Header } from './header'
import { Hero } from './hero'

export class HeroContainer extends React.Component {
    render() {
        return (
            <section className="home-hero-container" >
                <div className="home-hero-wrapper main-layout">
                    <Header />
                    <Hero />
                </div>
            </section>
        )
    }
}