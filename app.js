const person = [
    {
        name: 'Tanya Sinclair',
        job: 'UX Engineer',
        desc: `“ I’ve been interested in coding for a while but never taken the jump, until now.
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so
        excited about the future. ”`,
        avatar: './images/image-tanya.jpg'
    },
    {
        name: 'John Tarkpor',
        job: 'Junior Front-end Developer',
        desc: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”`,
        avatar: './images/image-john.jpg'
    }
]

const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const description = document.querySelector('.description')
const fullName = document.querySelector('#name')
const job = document.querySelector('#job')
const img = document.querySelector('.prof-pic')

let curentitem = 0;

next.addEventListener('click', ()=>{
   curentitem++;
   if(curentitem >= person.length){
       curentitem = 0
   }
   showPerson();
})
prev.addEventListener('click', ()=>{
  curentitem--;
  if(curentitem < 0 ){
      curentitem = person.length -1
  }
  showPerson()
})


function showPerson() {
    description.textContent = person[curentitem].desc
    fullName.textContent = person[curentitem].name
    job.textContent = person[curentitem].job
    img.src = person[curentitem].avatar
}