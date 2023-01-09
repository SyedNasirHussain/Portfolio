import React from 'react'
import "./Portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.jpg"
import IMG6 from "../../assets/portfolio6.jpg"

const data=[{
  id: 1,
  image: IMG1,
  titile: 'Optimus Health',
  github: "https://www.myoptimushealth.com/",
  demo:"https://play.google.com/store/apps/details?id=com.infini8ai.fitnessapp"
},
{
  id: 2,
  image: IMG2,
  titile: 'Qurbani App',
  github: "https://github.com",
  demo:"https://play.google.com/store/apps/details?id=com.plan9.qurbaniapps.qurbani"
},
{
  id: 3,
  image: IMG3,
  titile: 'ManageKaro',
  github: "https://github.com",
  demo:"https://play.google.com/store/apps/details?id=com.infini8ai.managekaro"
},
{
  id: 4,
  image: IMG4,
  titile: 'Zip Unzip-File Extractor',
  github: "https://github.com",
  demo:"https://play.google.com/store/apps/details?id=zip.unzip.fast.zip.file.reader2020"
}
// {
//   id: 5,
//   image: IMG5,
//   titile: 'Quotes Land',
//   github: "https://github.com",
//   demo:"https://landwatch.org/pages/perspectives/quotesontheland.htm#:~:text=%22Land%20is%20the%20only%20thing,worth%20fighting%20for...%22&text=%22The%20nation%20that%20destroys%20its%20soil%2C%20destroys%20itself.%22&text=%22The%20earth%20belongs%20to%20the%20living."
// },
// {
//   id: 6,
//   image: IMG6,
//   titile: 'Kids Garments',
//   github: "https://github.com",
//   demo:"https://ehttps://gamesforlove.org/store/?gclid=Cj0KCQiA64GRBhCZARIsAHOLriKucGB0EePjxiEjDe-tfQISpBHc9BD2KDiLR079wQXZFokRajHU_jUaArvGEALw_wcBn.wikipedia.org/wiki/Computer_appliance"
// }

]


const Portfolio = () => {
  return (
    <section id='Portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container container-portfolio">
        {
          data.map(({id,image,titile,github,demo})=>{
            return(
              <article key={id} className='portfolio-item'>
          <div className="portfolio-item-img">
            <img src={image} alt={titile} />
          </div>
          <h3>{titile}</h3>
          <div className='portfolio-item-cta'>
          {/* <a href={github} className='btn' target="_blank">Github</a> */}
          <a href={demo} className='btn btn-primary' target="_blank">Play Store</a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio