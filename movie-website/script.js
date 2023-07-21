const title_nav = document.querySelector('.title-nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > title_nav.offsetHeight + 150) {
        title_nav.classList.add('active')
    } else {
        title_nav.classList.remove('active')
    }
}



const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})



const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Miyah Myles',
    position: 'User-1',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text: "So far so good for my first experience work at place like this. Typical day work is okay because I promise to myself doing job with best and I dont care how hard because at the time I need money. So, every thing is good.",
  },
  {
    name: 'June Cha',
    position: 'Guest',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'There are several things to do for me as a supervisor such as opening and closing the store which is a critical post. Just because you need to calculate the cashier.',
  },
  {
    name: 'Iida Niskanen',
    position: 'User-2',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: "It was a pleasure to work in clothes shop, is hardworking but, its worth it. People doesn't care what do you do, unless you are doing your job the way that must be done, who cares.",
  },
  {
    name: 'Renee Sims',
    position: 'Guest-2',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: "I worked in a VIC store. Everyone is so friendly. Area Managers are awesome, always encouraging you to be the best. 9 times out of 10 it rarely felt like work :)",
  },
  {
    name: 'Jonathan Nunfiez',
    position: 'User-3',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text: "Not a lot of room for career progression due to being a smaller company. Sometimes there was pressure to deliver certain sales/KPIS even during tough times however it’s like that in most retail companies.",
  },
  {
    name: 'Sasha Ho',
    position: 'User-4',
    photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text: 'As far back as I could remember, I was always in a rush to grow up and be responsible. I was about thirteen when I realized I wanted a job, so I could have my own money.',
  },
  {
    name: 'Veeti Seppanen',
    position: 'Subscriber',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text: 'The people are great. There are a lot of perks working here, if you are on the management team then that includes various events and opportunities to grow.',
  },
]

let edx = 3

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[edx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  edx++

  if (edx > testimonials.length - 1) {
    edx = 0
  }
}

setInterval(updateTestimonial, 10000)