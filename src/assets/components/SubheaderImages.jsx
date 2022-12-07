import React from 'react'


// importing components goes in here
import Title from './Titles/BestSellerTitle'


const SubheaderImages = () => {
  return (
    <>
    <div className='subheaderimages half cr'>
        <div className="images">
        <img src="https://i.etsystatic.com/10204022/c/2068/2068/477/345/il/078ea2/2522816969/il_300x300.2522816969_6ytj.jpg" alt="img1" className='image' />
            <p>asdas2</p>
        </div>
        <div className="images">
            {/* give the first one class of image */}
            <img src="https://i.etsystatic.com/11046807/r/il/62d062/1472270880/il_300x300.1472270880_4tmx.jpg" alt="img1" className='image' />
            <p>Personalized Gifts Sales</p>
            </div>
            {/*  */}
        <div className="images">
        <img src="https://i.etsystatic.com/21873616/c/1592/1592/108/208/il/193c09/4317652633/il_300x300.4317652633_p5k2.jpg" alt="img1" className='image' />
            <p>Gifts for Home Sales</p>
            </div>
            {/*  */}
            <div className="images">
        <img src="https://i.etsystatic.com/22978294/c/1800/1800/0/0/il/63e471/4317738635/il_300x300.4317738635_aotg.jpg" alt="img1" className='image' />
            <p>Gifts for Her Sales</p>
            </div>
            {/*  */}
            <div className="images">
        <img src="https://i.etsystatic.com/22978294/c/1800/1800/0/0/il/63e471/4317738635/il_300x300.4317738635_aotg.jpg" alt="img1" className='image' />
            <p>Gifts for Her Sales</p>
            </div>
            {/*  */}
            <div className="images">
        <img src="https://i.etsystatic.com/22978294/c/1800/1800/0/0/il/63e471/4317738635/il_300x300.4317738635_aotg.jpg" alt="img1" className='image' />
            <p>Gifts for Her Sales</p>
            </div>
    </div>
    </>
  )
}

export default SubheaderImages
