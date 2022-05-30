import { useEffect, useState } from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";
import { DnsTwoTone } from '@material-ui/icons';

export default function Portfolio() {

  const [selected, setSelected] = useState("featured")
  const [portfolioData, setData] = useState([])
  
  useEffect(() => {
    switch(selected)
    {
      case "featured":
        setData(featuredPortfolio)
        break;
      case "web":
        setData(webPortfolio)
        break;
      case "mobile":
        setData(mobilePortfolio)
        break;
      // case "design":
      //   setData(designPortfolio)
      //   break;
      // case "content":
      //   setData(contentPortfolio)
      //   break;
      default:
          setData(featuredPortfolio)
    }
  }, [selected])


  //List we send as props to our PortfolioList
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    // {
    //   id: "design",
    //   title: "Design",
    // },
    // {
    //   id: "content",
    //   title: "Content",
    // }
  ]



  return (
    <div className="portfolio"  id="portfolio">
      <h1>Portfolio</h1> 
      <ul>
        {list.map(item=> (
          <PortfolioList
             title={item.title} 
             active={selected === item.id} 
             setSelected={setSelected}
             id={item.id}
             />
        ))}
      </ul>
      <div className="container">
        {portfolioData.map(data => (
          <>
          <a href={data.link} target="_blank">
            <div className="item">
              <img src= {data.img}
                alt=""/>
            <h3>{data.title}</h3>
          
            </div>
         </a>
        </>
        ))}
      </div>
    </div>
  )
}
