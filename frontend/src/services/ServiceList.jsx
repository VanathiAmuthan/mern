import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Calculate Weather`,
      desc: `Easily calculate and access real-time weather updates to plan your journey or daily activities.`,
   },
   {
      imgUrl: guideImg,
      title: `Best Tour Guide`,
      desc: `Ensure a memorable and enriching adventure with the best in the business.`,
   },
   {
      imgUrl: customizationImg,
      title: 'Customization',
      desc: ` From unique itineraries to personalized activities, create a travel experience that is uniquely yours.`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList