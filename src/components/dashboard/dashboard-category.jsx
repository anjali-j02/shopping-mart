import React from 'react'

const DashboardCategory = ({ Link }) => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="banner_item align-items-center" style={{ backgroundImage: "url(assets/images/banner_1.jpg)" }}>
                            <div className="banner_category">
                                <Link to='/'>women's</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="banner_item align-items-center" style={{ backgroundImage: "url(assets/images/banner_2.jpg)" }}>
                            <div className="banner_category">
                                <Link to='/'>accessories's</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="banner_item align-items-center" style={{ backgroundImage: "url(assets/images/banner_3.jpg)" }}>
                            <div className="banner_category">
                                <Link to='/'>men's</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardCategory
