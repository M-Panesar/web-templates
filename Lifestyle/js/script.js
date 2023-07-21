const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})

const textEl = document.getElementById('text_1')
const text_1 = 'The trends of the season...'
let idx = 1
let speed = 90

writeText()

function writeText(){
    textEl.innerText = text_1.slice(0, idx)

    idx++

    if(idx > text_1.length){
        idx = 1
    }

    setTimeout(writeText, speed)
}

const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input_1 = document.querySelector('.input_1')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input_1.focus()
})

const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Miyah Myles',
    position: 'Salesgirl-1',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text: "So far so good for my first experience work at place like this. Typical day work is okay because I promise to myself doing job with best and I dont care how hard because at the time I need money. So, every thing is good.",
  },
  {
    name: 'June Cha',
    position: 'Cashier-1',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'There are several things to do for me as a supervisor such as opening and closing the store which is a critical post. Just because you need to calculate the cashier.',
  },
  {
    name: 'Iida Niskanen',
    position: 'Casher-2',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: "It was a pleasure to work in clothes shop, is hardworking but, its worth it. People doesn't care what do you do, unless you are doing your job the way that must be done, who cares.",
  },
  {
    name: 'Renee Sims',
    position: 'Receptionist',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: "I worked in a VIC store. The company as a whole is like a big family, everyone is so friendly and supportive to one another. Always addresses and helps out with any concerns you have. Area Managers are awesome and always encouraging you to be the best you can be. Working in store as sales was by far the most fun part with creating regular customers and building an awesome relationship with your team. Just an all round awesome vibe and have never experienced anything like it at any other company. 9 times out of 10 it rarely felt like work :)",
  },
  {
    name: 'Jonathan Nunfiez',
    position: 'Salesguy-1',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text: "Not a lot of room for career progression due to being a smaller company. Sometimes there was pressure to deliver certain sales/KPIS even during tough times however it’s like that in most retail companies.",
  },
  {
    name: 'Sasha Ho',
    position: 'Salesgirl-2',
    photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text: 'As far back as I could remember, I was always in a rush to grow up and be responsible. I was about thirteen when I realized I wanted a job, so I could have my own money. I’d even fill out applications online, lying about my age but it never worked. A few birthdays went by and I was celebrating my sixteenth birthday and a few weeks later; I received my first retail job. My very first job was at a popular teen store called Lifestyle. I learned and experienced a lot working there and made friends.',
  },
  {
    name: 'Veeti Seppanen',
    position: 'Manager',
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