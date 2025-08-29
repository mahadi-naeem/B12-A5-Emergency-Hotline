
const callHistory = []


//function 
function renderHistory() {
    const historyContainer = document.getElementById('history-container')
    historyContainer.innerHTML = ""
    for (const data of callHistory) {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="flex justify-between items-center p-5 bg-slate-50 mt-3 rounded-xl">
            <div>
                <h1 class="font-bold">${data.Title}</h1>
                <p>${data.number}</p>
            </div>
            <div>
                <p class="text-sm text-gray-500">${data.Date}</p>
            </div>
        </div>
        `
        historyContainer.appendChild(div)
    }
}


// heart count 
const hearts = document.getElementsByClassName('fa-heart')
const heartCounter = document.getElementById('heart')
let count = 0

for (const h of hearts) {
    h.addEventListener('click', function () {
        count++
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

            let serviceName = card.getElementsByClassName('service')[0].innerText

            let number = card.getElementsByClassName('number')[0].innerText

            alert("Calling " + serviceName + " " + number + "...")

            const data = {
                Title: serviceName,
                number: number,
                Date: new Date().toLocaleTimeString()
            }
            callHistory.push(data)
            console.log(data)
            renderHistory()
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
        // alert('increase the copy count')
        copyCounter++
        copyElement.innerText = copyCounter

        // copy number
        let card = copy.closest('.card')

        let numberElement = card.getElementsByClassName('number')[0]
        let numberText = numberElement.innerText

        navigator.clipboard.writeText(numberText)
        alert("Number is Copied: " + numberText)
    })
}

//History
document.getElementById('history').addEventListener('click', function () {
    const historyContainer = document.getElementById('history-container')

    historyContainer.innerHTML = ""

    for (const data of callHistory) {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="flex justify-between items-center p-5 border-b border-gray-200">
            <div>
                <h1 class="font-bold">${data.Title}</h1>
                <p>${data.number}</p>
            </div>
            <div>
                <p class="text-sm text-gray-500">${data.Date}</p>
            </div>
        </div>
        `
        historyContainer.appendChild(div)
    }
})

document.getElementById('clear-history').addEventListener('click', function () {
    callHistory.length = 0  
    renderHistory()         
})




