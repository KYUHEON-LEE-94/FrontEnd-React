let liElems = document.querySelectorAll('.number li');
let numbers = []
let liElsNumer = []
liElems.forEach(li => liElsNumer.push(li));
liElems.forEach(li => numbers.push(Number(li.innerHTML)));


let evenbtn = document.querySelector('#even')
let oddbtn = document.querySelector('#odd')

function clickfunction(btn) {
    if (btn == evenbtn) {
        evenbtnClick(btn)
    } else {
        oddbtnClick(btn)
    }

}


function evenbtnClick(btn) {
    btn.addEventListener('click', function () {
        numbers.forEach((li, idx) => {
            if (li % 2 == 0) {
                liElsNumershow(idx)
            }
            if (li % 2 != 0) {
                liElsNumerhind(idx)
            }
        })
    })
}

function oddbtnClick(btn) {
    btn.addEventListener('click', function () {
        numbers.forEach((li, idx) => {

            if (li % 2 != 0) {
                liElsNumershow(idx)

            }
            if (li % 2 == 0) {
                liElsNumerhind(idx)
            }
        })
    })
}

function liElsNumershow(idx) {
    liElsNumer[idx].style.display = 'block'
    liElsNumer[idx].classList.add('on')
}
function liElsNumerhind(idx) {
    liElsNumer[idx].style.display = 'none'
    liElsNumer[idx].classList.remove('on')
}

clickfunction(evenbtn)
clickfunction(oddbtn)