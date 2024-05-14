import { ExtraInfo, Heros, WhoWeAre, Services, TheTeam, Approach, Products, WhyUs, JobSection, News, Footer } from "../sections"

const HomePage = () => {
  return (

    <section className="max-container">
      <Heros/>
      <ExtraInfo/>
      <WhoWeAre/>
      <Services/>
      <TheTeam/>
      <Approach/>
      <Products/>
      <WhyUs/>
      <JobSection/>
      <News/>
      <Footer/>
    </section>
    
  )
}

export default HomePage