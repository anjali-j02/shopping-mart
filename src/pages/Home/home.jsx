import React from 'react'
import { Link } from 'react-router-dom'
import Http from 'services/http/http'
import Footer from 'components/footer/footer'
import NavBar from 'components/nav-bar/nav-bar'
import AddToCart from 'components/add-to-cart/add-to-cart'
import DashboardTopBrands from 'components/dashboard/top-brands'
import DashboardBestSeller from 'components/dashboard/best-seller'
import DashboardNewArrival from 'components/dashboard/new-arrival'
import DashBoardDealOfWeek from 'components/dashboard/deal-of-week'
import DashboardBanner from 'components/dashboard/dashboard-banner'
import DashboardCategory from 'components/dashboard/dashboard-category'
import DashboardPopularProducts from 'components/dashboard/popular-products'

const Home = () => {
  const http = new Http()

  React.useEffect(() => {
    http.get('employees').then((response) => console.log(response))
  })

  return (
    <div id="app">
      <NavBar Link={Link} />
      <AddToCart Link={Link} />
      <DashboardBanner Link={Link} />
      <DashboardCategory Link={Link} />
      <DashboardNewArrival Link={Link} />
      <DashBoardDealOfWeek Link={Link} />
      <DashboardBestSeller Link={Link} />
      <DashboardPopularProducts Link={Link} />
      <DashboardTopBrands Link={Link} />
      <Footer Link={Link} />
    </div>
  )
}

export default Home