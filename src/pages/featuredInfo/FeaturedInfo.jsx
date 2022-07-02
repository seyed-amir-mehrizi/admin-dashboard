import React from 'react'
import './featuredInfo.css';
import ArrowDownWard from '@mui/icons-material/ArrowDownward';
import ArrowUpward from '@mui/icons-material/ArrowUpward';

export default function FeaturedInfo() {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">-11.4 <ArrowDownWard  className='featuredIcon negative'/></span>
                </div>
                <span className="featuredSub">Compare to last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,415</span>
                    <span className="featuredMoneyRate">-1.4 <ArrowDownWard  className='featuredIcon negative'/></span>
                </div>
                <span className="featuredSub">Compare to last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,225</span>
                    <span className="featuredMoneyRate">11.4 <ArrowUpward  className='featuredIcon'/></span>
                </div>
                <span className="featuredSub">Compare to last Month</span>
            </div>
        </div>
    )
}
