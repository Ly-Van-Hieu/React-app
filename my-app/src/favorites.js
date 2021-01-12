import React, {Fragment, useState} from 'react'

const Contents = () => {
  const [data] = useState([
    {
      images: '/img/dubstep2.jpg',
      title: 'Living Nightmare',
      discaption: 'Snowflake',
      time: '2:58'
    },
    {
      images: '/img/happyrock.jpg',
      title: 'Dubstep',
      discaption: 'Bensound',
      time: '2:04'
    },
    {
      images: '/img/retrosoul.jpg',
      title: '42',
      discaption: 'Secret Of Life',
      time: '1:18'
    },
    {
      images: '/img/snowflake.jpg',
      title: 'Retrosoul',
      discaption: 'Bensound',
      time: '2:55'
    },
    {
      images: '/img/snowflake2.jpg',
      title: 'Holiday Funky Blues',
      discaption: 'Snowflake',
      time: '2:20'
    },
    {
      images: '/img/track3.jpeg',
      title: 'Happy Rock',
      discaption: 'Bendsound',
      time: '12:00',
      
    },
  ])

  return (
    <Fragment>
      {
        data.map(item => {
          return(
            <div>
              <div className="row p-3">
                <div className="col-12 d-flex justify-content-between align-items-center">
                    <div className="discaption-item d-flex align-items-center">
                      <img className="rounded mx-auto d-block" src={item.images}></img>
                      <div className="text-item pl-2">
                        <h5>{item.title}</h5>
                        <p>{item.discaption}</p>
                      </div>
                    </div>
                    <p>{item.time}</p>
                  </div>
              </div>
            </div>
        )})
      }
    </Fragment>
  ) 
}

export default Contents
