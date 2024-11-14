const endpoint = "http://192.168.1.2"

let int = 0
function setDapurLed(){
    int++

    if(int % 2 == 1){
        dapurBulp.style.backgroundColor = "red"
        dapurImg.src = "./Assets/led-on.png"
    } else{
        dapurBulp.style.backgroundColor = "burlywood"
        dapurImg.src = "./Assets/led-off.png"
    }
}

function getKamarLed(){
    fetch(endpoint + "/kamar").then(response => response.text()).then(result => {
        if(result == "ON"){
            kamarBulp.style.backgroundColor = "red"
            kamarImg.src = "./Assets/led-on.png"
        }else{
            kamarBulp.style.backgroundColor = "burlywood"
            kamarImg.src = "./Assets/led-off.png"
        }
    })
}

function getTamuLed(){
    fetch(endpoint + "/tamu").then(response => response.text()).then(result => {
        if(result == "ON"){
            tamuBulp.style.backgroundColor = "red"
            tamuImg.src = "./Assets/led-on.png"
        }else{
            tamuBulp.style.backgroundColor = "burlywood"
            tamuImg.src = "./Assets/led-off.png"
        }
    })
}

function getTerasLed(){
    fetch(endpoint + "/teras").then(response => response.text()).then(result => {
        if(result == "ON"){
            terasBulp.style.backgroundColor = "red"
            terasImg.src = "./Assets/led-on.png"
        }else{
            terasBulp.style.backgroundColor = "burlywood"
            terasImg.src = "./Assets/led-off.png"
        }
    })
}


function setKamarLed(){
    fetch(endpoint + "/kamar", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload())
}
function setTamuLed(){
    fetch(endpoint + "/tamu", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload())
}
function setTerasLed(){
    fetch(endpoint + "/teras", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload())
}


getKamarLed()
getTamuLed()
getTerasLed()