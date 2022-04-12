window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}

function CLASS(elem) {
    return document.getElementsByClassName(elem);
}

function QS(elem) {
    return document.querySelector(elem);
}

var tablaMeret = 10;


const kepek = [];
var kivalasztottak = [];

function init() {
    let mezoIndex = 0;
    /*for (let index = 0; index < 2; index++) {
        var txt = "";
        for (let index = 0; index < (tablaMeret)/2; index++) {
            txt += `<div class="mezo"><img src="kepek/kep${index}.jpg" alt="kep" id="${mezoIndex}"></div>`;
            //txt += `<div class="mezo" id="${index}">${index}</div>`;
            mezoIndex++;
        }
        CLASS("fotarolo")[0].innerHTML += txt;

    }*/


    for (let index = 0; index < 2; index++) {
        let i = 0;
        for (let index = 0; index < tablaMeret; index++) {
            kepek.push(`kepek/kep${i}.jpg`);

            i++;
        }
    }

    var txt = "";
    console.log(kepek);
    /*for (let index = 0; index < 2; index++) {
        kepek.forEach(function(elem, index){
            txt += `<div class="mezo" id="mezo${mezoIndex}"><img src="kepek/hatter.jpg" alt="kep" id="${mezoIndex}"></div>`;
            mezoIndex++;
        })

        
    }*/
    for (let index = 0; index < kepek.length; index++) {
        txt += `<div class="mezo" id="mezo${index}"><img src="kepek/hatter.jpg" alt="kep" id="${index}"></div>`;

    }

    CLASS("fotarolo")[0].innerHTML += txt;

    for (let index = 0; index < kepek.length; index++) {
        ID(index).addEventListener("click", felfordit);

    }

    /*for (let index = 0; index < tablaMeret; index++) {
        ID(`mezo${index}`).innerHTML = `<img src="kepek/hatter.jpg">`;
        
    }*/
}

function felfordit() {
    console.log(event.target.id);
    /*ID(`mezo${event.target.id}`).innerHTML = `<img src="kepek/${event.target.class}.jpg" alt="kep" id="${event.target.id}">`;*/
    let aktualisElem = event.target.id;
    event.target.src = kepek[aktualisElem];
    kivalasztottak.push(aktualisElem);
    console.log(kivalasztottak);
    
    if (kivalasztottak.length == 2) {
        kepek.forEach(function(elem){ 
            console.log("'"+elem+"'")
           ID("'"+elem+"'").removeEventListener("click", felfordit);
        });
        let feltetel = kepek[kivalasztottak[0]] === kepek[kivalasztottak[1]];
        if (!feltetel) {
            setTimeout(function() {
                kivalasztottak.forEach(function(elem) {
                    ID(elem).src = "kepek/hatter.jpg";
                    ID(elem).addEventListener("click", felfordit);
                })
                kivalasztottak.splice(0);
            }, 1000);

        } else {
            kivalasztottak.forEach(function(elem) {
                ID(elem).style.display = "none";

            })
            kivalasztottak.splice(0);
        }

    }



}