const welcome_h1 = document.querySelector(".welcome h1")

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".welcome .h1 .welcome-img-1", {
    y: 400,
}, {
    delay: .7,
    duration: .6,
    y: 0
})

gsap.to(".welcome", {
    delay: 1.8,
    y: -950,
    duration: 1,
    display: "none"
})

gsap.fromTo(".section-2 h1", {
    y: 200,
}, {
    duration: .5,
    scale: 1,
    y: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".section-2 ",
        start: "35% 80%",

        // scrub: true,
        // yoyo:true,   
        toggleActions: "play pause pause pause",
        // markers:true
    }
})


// gsap.to(".section-2",{
//     backgroundColor: "#FCFAF3", 
//     duration:.3,

//     scrollTrigger:{
//         trigger:".section-2",
//         start: "top 80%",       

//         // scrub: true,
//         // yoyo:true,   
//         toggleActions: "play reverse play reverse",
//         // markers:true
//     }
// })


gsap.to(".section-2", {
    backgroundColor: "#FCFAF3",
    duration: .5,
    ease: "power4.in",
    scrollTrigger: {
        trigger: ".hero ",
        start: "80% 55%",
        // end:"bottom 55% ",

        // scrub: true,
         
        // yoyo:true, 

        toggleActions: "play pause pause pause",
          
        // markers:true

    }

})
gsap.to(".section-2", {
    color: "#18181a",
    duration: .2,
    scrollTrigger: {
        trigger: ".hero ",
        start: "80% 55%",
        // end:"bottom 55% ",

        // scrub: true,
        // yoyo:true,   
        toggleActions: "play pause pause pause",
        // markers:true
    }

})



gsap.to(".hero", {
    scrollTrigger: {
        trigger: ".hero ",
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,


    },
});



gsap.to(".section-3",{
    backgroundColor:"#18181a",
    duration: .5,
    scrollTrigger: {
        trigger: ".section-3 ",
        start: "top 85%",
      
        // markers:true
        }
})


gsap.to(".brand-2", {
    scrollTrigger: {
        trigger: ".brand-2 ",
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,


    },
});
gsap.to(".brand-1", {
    scrollTrigger: {
        trigger: ".brand-1 ",
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,

    },
});


const brand_1 = document.querySelector(".brand-1")

brand_1.addEventListener("mouseenter", () => {

})


// gsap.to("nav ul li",{
//  color:"#18181a",
//  backgroundColor:"#FCFAF3",
 
//  scrollTrigger:{
//     trigger:"section-2",
//     // markers:true,
//     start:"top top",
//  }
// })

// text animation
gsap.to(".section-3 .container h1", {
    backgroundPositionX: "0%",
    stagger: 1,
    scrollTrigger: {
      trigger: ".section-3 .container h1",
      scrub: 1,
      start: "top center",
    //   markers: true,
      end: "55% center"
    }
  });
gsap.to(".brand-info-1", {
    backgroundPositionX: "0%",
    stagger: 1,
    scrollTrigger: {
      trigger: ".brand-1",
      scrub: 1,
      start: "top center",
    //   markers: true,
      end: "55% center"
    }
  });
gsap.to(".brand-info-2", {
    backgroundPositionX: "0%",
    stagger: 1,
    scrollTrigger: {
      trigger: ".brand-2",
      scrub: 1,
      start: "top center",
    //   markers: true,
      end: "55% center"
    }
  });
gsap.to(".brand-info-3", {
    backgroundPositionX: "0%",
    stagger: 1,
    scrollTrigger: {
      trigger: ".brand-3",
      scrub: 1,
      start: "top center",
    //   markers: true,
      end: "40% center"
    }
  });
gsap.to(".brand-info-4", {
    backgroundPositionX: "0%",
    stagger: 1,
    scrollTrigger: {
      trigger: ".brand-3",
      scrub: 1,
      start: "20% center",
    //   markers: true,
      end: "50% center"
    }
  });
gsap.to(".brand-3 .feature", {
    backgroundPositionX: "0%",
    stagger: 1,
    scrollTrigger: {
      trigger: ".brand-3",
    //   scrub: 1,
      start: "20% center",
    //   markers: true,
      end: "65% center"
    }
  });



  function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedHours = hours.toString().padStart(2, '0');
    document.getElementById('time').textContent = `${formattedHours}:${minutes} ${ampm} - Los Angeles, CA`;
}

// Update time immediately
updateTime();
// Update time every minute
setInterval(updateTime, 60000);












// ****//

// const brand = document.querySelector(".b-1")
// const popup = document.querySelector(".popup-1")

// gsap.to(".popup", {
//     scale: 0,
//     opacity: 0,
// })

// brand.addEventListener("mouseover", () => {
//     popup.style.display = "block";
//     console.log("skdhvasfdhiabl");
//     gsap.to(".popup-1", {
//         scale: 1,
//         opacity: 1,
//         duration: .5
//     })
// })
// brand.addEventListener("mouseout", () => {
//     popup.style.display = "none";

//     gsap.to(".popup-1", {
//         scale: 0,
//         opacity: 0,
//         duration: .5
//     })
//     console.log("bye");

// })


// ****//

const brand_2 = document.querySelector(".b-2")
const popup_2 = document.querySelector(".popup-2")

gsap.to(".popup-2", {
    scale: 0,
    opacity: 0,
})

brand_2.addEventListener("mouseover", () => {
    popup_2.style.display = "block";
    gsap.to(".popup-2", {
        scale: 1,
        opacity: 1,
        duration: .5
    })
    gsap.to(".brand-info-2",{
        opacity: 0,
    })
})
brand_2.addEventListener("mouseout", () => {
    popup_2.style.display = "none";

    gsap.to(".popup-2", {
        scale: 0,
        opacity: 0,
        duration: .5
    })
    gsap.to(".brand-info-2",{
        opacity: 1,
    })
})

// ****//

const brand_3 = document.querySelector(".b-3")
const popup_3 = document.querySelector(".popup-3")

gsap.to(".popup-3", {
    scale: 0,
    opacity: 0,
})

brand_3.addEventListener("mouseover", () => {
    popup_3.style.display = "block";
    gsap.to(".popup-3", {
        scale: 1,
        opacity: 1,
        duration: .5
    })
    gsap.to(".brand-info-2",{
        opacity: 0,
    })
})
brand_3.addEventListener("mouseout", () => {
    popup_3.style.display = "none";

    gsap.to(".popup-3", {
        scale: 0,
        opacity: 0,
        duration: .5
    })

    gsap.to(".brand-info-2",{
        opacity: 1,
    })

})


// video
var video_1 = document.querySelector(".video :nth-child(1)");

video_1.addEventListener("mouseover", () => {
    video_1.play();
})



video_1.onmouseout = function () {
    video_1.pause();
}


// var video_2 = document.querySelector(".video :nth-child(2)");

// video_2.addEventListener("mouseover", () => {
//     video_2.play();
// })



// video_2.onmouseout = function () {
//     video_2.pause();
// }


var video_3 = document.querySelector(".video-3");
console.log(video_3);
video_3.addEventListener("mouseover", () => {
    video_3.play();
})


video_3.onmouseout = function () {
    video_3.pause();
}




