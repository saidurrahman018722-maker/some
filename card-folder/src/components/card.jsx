import React from 'react'
import { Bookmark } from 'lucide-react'
function card(info) {
  return (
    <>
     <div className="card">
        <div>
          <div className="top">
          <img src={info.brandLogo} alt="amazon" />
          <button>Save <Bookmark size={20}/></button>
        </div>
        <div className="center">
          <h3>{info.company} <span>{info.dateposted}</span></h3>
          <h2>{info.post}</h2>
          <div className='tag'>
            <h4>{info.tag1}</h4>
            <h4>{info.tag2}</h4>
          </div>
        </div>
        </div>
        <div className="bottom">
          
            <div>
              <h3>{info.pay}</h3>
              <p>{info.location}</p>
            </div>
            <button>
              Apply Now
            </button>
          
        </div>
      </div>
    </>
  )
}

export default card;