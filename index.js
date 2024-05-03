

const hour = document.getElementById('hour')

const mintes = document.getElementById('mintes')

const seconds = document.getElementById('seconds')


setInterval(function(){

    const currentDate = new Date()

   hour.style.transform = `translate(-50%,-50%) rotate(${currentDate.getHours()*30}deg)`

   mintes.style.transform = `translate(-50%,-50%) rotate(${currentDate.getMinutes()*6}deg)`

  seconds.style.transform = `translate(-50%,-50%) rotate(${currentDate.setSeconds()*6}deg)`
  
},1000)