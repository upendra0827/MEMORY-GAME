const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const fourth = document.querySelector('.fourth')
const fifth = document.querySelector('.fifth')
const sixth = document.querySelector('.sixth')
const seventh = document.querySelector('.seventh')
const eighth = document.querySelector('.eighth')
const nineth = document.querySelector('.nineth')
const tenth = document.querySelector('.tenth')
const eleventh = document.querySelector('.eleventh')
const twelth = document.querySelector('.twelth')
const thirteenth = document.querySelector('.thirteenth')
const fourteenth = document.querySelector('.fourteenth')
const fifteenth = document.querySelector('.fifteenth')
const sixteenth = document.querySelector('.sixteenth')
const game = document.querySelector('.game')
let about1 = ''
let about2 = ''
let own_id_1 = ''
let own_id_2 = ''
let own_id
let about_of_pic

const img = document.querySelectorAll('img')

for (let image of img) {
    image.style.display = 'none'
}


game.addEventListener('click', function(event) {

    if (event.target.children[0].getAttribute('clicks_on_img') == 0) {

    
    event.target.children[0].style.display = 'block'

    about_of_pic = event.target.getAttribute('about')
    own_id = event.target.getAttribute('own_id')
    if (about1 == '') {
        about1 = about_of_pic
        own_id_1 = own_id
    }

    else {
        about2 = about_of_pic
        own_id_2 = own_id
    }

    if (about1 !== '' && about2 !== '') {
        if (about1 === about2) {

                setTimeout(function () {
                    document.querySelectorAll(`[about=${about1}]`)[0].children[0].style.display = 'none'
                    document.querySelectorAll(`[about=${about2}]`)[1].children[0].style.display = 'none'
                    document.querySelectorAll(`[about=${about1}]`)[0].style.background = 'gray'
                    document.querySelectorAll(`[about=${about2}]`)[1].style.background = 'gray'
                    document.querySelectorAll(`[about=${about1}]`)[0].children[0].setAttribute('clicks_on_img',1)
                    document.querySelectorAll(`[about=${about1}]`)[1].children[0].setAttribute('clicks_on_img',1)
                    about1 = ''
                    about2 = ''
                },500)
        } else {

            setTimeout(function () {
                // document.querySelectorAll(`[about=${about1}]`)[0].children[0].style.display = 'none'
                // event.target.children[0].style.display = 'none'
                document.querySelectorAll(`[own_id=${own_id_1}]`)[0].children[0].style.display = 'none'
                document.querySelectorAll(`[own_id=${own_id_2}]`)[0].children[0].style.display = 'none'
                about1 = ''
                about2 = ''
            },500)
        }
    }}
})

