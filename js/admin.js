const toggleBtn = document.getElementsByClassName('toggle-button')[0];
const navbar = document.getElementById('menu');

console.log(toggleBtn,navbar)

toggleBtn.addEventListener('click', ()=>{
    navbar.classList.toggle('show')
})

let personal_info = document.getElementById('personal_information')
let personal_info_links = document.getElementById('personal_info')

let contact_msg = document.getElementById('contact_messages')
let contact_msg_links = document.getElementById('contact_msg')

personal_info_links.addEventListener('click', ()=>{
    let active_section = document.getElementsByClassName('section')[0]
    active_section.classList.remove('section');
    active_section.classList.add('hide')
    personal_info.classList.add('section')
    personal_info.classList.remove('hide')
    navbar.classList.remove('show')

})

contact_msg_links.addEventListener('click', ()=>{
    let active_section = document.getElementsByClassName('section')[0]
    active_section.classList.remove('section');
    active_section.classList.add('hide')
    contact_msg.classList.add('section')
    contact_msg.classList.remove('hide')
    navbar.classList.remove('show')

})

let edit_profile_btn = document.getElementById('edit_profile_btn')
let edit_form = document.getElementsByClassName('edit_form')[0]

edit_profile_btn.addEventListener('click',()=>{
    edit_form.style.display = "block"
})

let cancel_btn = document.getElementsByClassName('cancel_btn')

for (let i = 0; i < cancel_btn.length; i++) {
    cancel_btn[i].addEventListener('click',()=>{
        edit_form.style.display = "none"
    })
    
}


