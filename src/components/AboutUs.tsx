import React from 'react';
import canada from '../assets/img/illustration-canada.svg';
import australia from '../assets/img/illustration-australia.svg';
import uk from '../assets/img/illustration-united-kingdom.svg';

export default function AboutUs() {
    return (
        <div>
            <img src="https://images.unsplash.com/photo-1510130146128-7a7b6afb6f9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
            <div>
                <h2>About Us</h2>
                <p>Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences.</p>
            </div>
            <img src="https://images.unsplash.com/photo-1522152302542-71a8e5172aa1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8YmFjayUyMHdvbWFuJTIwd29ya3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
            <div>
                <h2>World-class talent</h2>
                <p>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.</p>
                <p>Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.</p>
            </div>
            <div>
                <img src={canada} alt=""/>
                <h2>Canada</h2>
                <img src={australia} alt=""/>
                <h2>Australia</h2>
                <img src={uk} alt=""/>
                <h2>United Kingdom</h2>
            </div>
            <img src="https://images.unsplash.com/photo-1495653797063-114787b77b23?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGhhbmR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
            <div>
                <h2>The real deal</h2>
                <p>As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.</p>
                <p>We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
            </div>
        </div>
    )
}
