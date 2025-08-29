

//function to copy text
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        alert(`Copied: ${text}`); 
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}


// heart count 
const hearts = document.getElementsByClassName('fa-heart')
const heartCounter = document.getElementById('heart')
let count = 0

for (const h of hearts) {
    h.addEventListener('click', function () {
        if (h.classList.contains('active')) {
            // toogle
            h.classList.remove('active')
            h.style.color = 'black' // 
            count--
        } else {
            h.classList.add('active')
            h.style.color = 'red'
            count++
        }
        heartCounter.innerText = count
    })
}



// coin count 
const coins = document.getElementsByClassName('call')
let coinElement = document.getElementById('coin')

let coinCounter = parseInt(coinElement.innerText)

for (const c of coins) {
    c.addEventListener('click', function () {
        if (coinCounter >= 20) {
            coinCounter -= 20
            coinElement.innerText = coinCounter

            let card = c.closest('.card')

            let serviceName = card.getElementsByClassName('service')[0].innerText.trim()

            let number = card.getElementsByClassName('number')[0].innerText.trim()

            alert("Service: " + serviceName + "\nNumber: " + number)
        }
        else {
            alert("Not available coin")
        }
    })
}




// copy count 
const copies = document.getElementsByClassName('copy')
let copyElement = document.getElementById('copy-value')

let copyCounter = parseInt(copyElement.innerText)

for (const copy of copies) {
    copy.addEventListener('click', function () {
        // console.log('get')
        // console.log(coinCounter)
        alert('increase the copy count')
        copyCounter++
        copyElement.innerText = copyCounter
    })
}


//copy number
// Get all "copy" buttons
const copyButtons = document.getElementsByClassName('fa-copy')

for (const btn of copyButtons) {
    btn.addEventListener('click', function () {
        // Find the parent card (it has the class shadow-lg)
        let card = btn.closest('.shadow-lg')

        // Get the number inside that card
        let numberElement = card.getElementsByClassName('number')[0]
        let numberText = numberElement.innerText.trim()

        // Copy the number
        navigator.clipboard.writeText(numberText)
    })
}



