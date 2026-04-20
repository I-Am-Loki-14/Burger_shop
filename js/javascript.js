// Dark Vs Light Js 
const light = document.getElementById('light')
const dark = document.getElementById('dark')

dark.addEventListener('click', ()=>{
    document.body.classList.add('dark-theme')
    document.body.classList.remove('light-theme')
    console.log("Dark Mode On");
})
light.addEventListener('click', ()=>{
    document.body.classList.add('light-theme')
    document.body.classList.remove('dark-theme')
    console.log("Light Mode On");
    
})

// menu bar js 
const menutoggle =  document.getElementById('menubar');
const navlinks = document.querySelector('.navlinks');


menutoggle.addEventListener('click' , ()=>{
    // menutoggle.classList.toggle("show")
    navlinks.classList.toggle("show")
    console.log("Menu Click");
    
})