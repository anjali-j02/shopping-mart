import React from 'react'

const DashboardBanner = ({ Link }) => {
    return (
        <section className="welcome_area bg-img background-overlay" style={{ backgroundImage: "url(assets/img/bg-img/bg-1.jpg)" }}>
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12">
                        <div className="hero-content">
                            <h6>asoss</h6>
                            <h2>New Collection</h2>
                            <Link to="/" className="btn essence-btn">view collection</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DashboardBanner
