
import React from 'react'
import Card from "./components/card"
import User from './components/user'
const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/046/861/647/non_2x/google-logo-transparent-background-free-png.png",
    companyName: "Google",
    datePosted: "3 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHWXIPNdXbKSE0eC4wiiIMmO7aTUjuws_4hw&s",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://pngimg.com/d/meta_PNG12.png",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://cdn.produkto.io/photos/2025/09/24/amazon-logo-2000.webp",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png?quality=90&strip=all&crop=1.2535702951444%2C0%2C97.492859409711%2C100&w=2400",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RWCZER-Legal-IP-Trademarks-CP-MS-logo-740x417-1?wid=406&hei=230&fit=crop&resSharp=1",
    companyName: "Microsoft",
    datePosted: "6 days ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$68/hr",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/500px-Tesla_logo.png",
    companyName: "Tesla",
    datePosted: "10 days ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyv4e9feBj3SE51YujH3lgd0sIJEyf8jJHw&s",
    companyName: "NVIDIA",
    datePosted: "2 weeks ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://images.seeklogo.com/logo-png/28/1/spotify-logo-png_seeklogo-284480.png",
    companyName: "Spotify",
    datePosted: "1 week ago",
    post: "Data Scientist",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Stockholm, Sweden"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzTmVc7unwsynm3Ofz31vehWOoGK4FMpkPtw&s",
    companyName: "Adobe",
    datePosted: "8 days ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "San Jose, USA"
  }
];
  return (
    <>
    <div className="parent">
     {
      jobOpenings.map((i,idx)=>(
       <div key={idx}>
         <Card company={i.companyName} pay={i.pay} dateposted={i.datePosted} tag1={i.tag1} tag2={i.tag2} brandLogo={i.brandLogo} post={i.post} location={i.location} />
       </div>
      ))
     }

    </div>
    </>
  )
}
export default App;