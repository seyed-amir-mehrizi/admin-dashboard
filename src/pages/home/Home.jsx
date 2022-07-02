import React from 'react'
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../featuredInfo/FeaturedInfo';
import './home.css';
import data from '../../dummyData';
export default function Home() {
  
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={data} title='User Analytics' grid dataKey='Active User'/>
        </div>
    )
}
