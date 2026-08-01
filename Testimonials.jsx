import React from "react";
import "./Testimonials.css";

function Testimonials(){

const reviews=[
{
name:"Priya",
text:"Beautiful nail designs and amazing finishing. Loved my experience! 💅",
rating:"⭐⭐⭐⭐⭐"
},
{
name:"Riya",
text:"Professional service with premium quality. Highly recommended! ✨",
rating:"⭐⭐⭐⭐⭐"
},
{
name:"Neha",
text:"Best nail studio experience. My nails look gorgeous! 🌸",
rating:"⭐⭐⭐⭐⭐"
}
];


return(

<section className="testimonials">

<div className="testimonial-title">
<h2>Client Reviews</h2>
<p>Our happy clients love their luxury nail experience</p>
</div>


<div className="testimonial-grid">

{
reviews.map((review,index)=>(

<div className="testimonial-card" key={index}>

<div className="stars">
{review.rating}
</div>

<p>{review.text}</p>

<h3>{review.name}</h3>

</div>

))
}

</div>

</section>

);

}

export default Testimonials;