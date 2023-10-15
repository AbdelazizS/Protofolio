// AOS.init();

// //  Work experience cards

// const experiencecards = document.querySelector(".experience-cards");
// const exp = [
//   {
//     title: "Web developer",
//     cardImage: "./assets/images/experience-page/software.png",
//     place: "Microlaps =>  Road To Sudan Airport , mecha Street",
//     time: "(februray, 2022 - Present)",
//     desp: `
//     As a  trainer <b> Junior FrontEnd Developer</b>, :
//     <ul>
//     <li>We designed many landing Pages</li>
//     <li>We go through react great roadmap completed with big broject</li>
//     </ul>
//     `,
//   },
// ];

// const showCards1 = () => {
//   let output = "";
//   exp.forEach(
//     ({ title, cardImage, place, time, desp }) =>
//     (output += `        
//     <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
//       <div class="card card1" style="height:350px">
//         <img src="${cardImage}" class="featured-image"/>
//         <article class="card-body">
//           <header>
//             <div class="title">
//               <h3>${title}</h3>
//             </div>
//             <p class="meta">
//               <span class="pre-heading">${place}</span><br>
//               <span class="author">${time}</span>
//             </p>
//             <ol>
//               ${desp}
//             </ol>
//           </header>
//         </article>
//       </div>
//     </div>
//       `)
//   );
//   experiencecards.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards1);
