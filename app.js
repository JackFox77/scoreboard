let homescore = 0

let awayscore = 0





function hAdd1() {
    homescore += 1
    console.log('home', homescore);
    let codeElement= document.getElementById('homescore')
    codeElement.innerText = homescore;
}


function hAdd3() {
    homescore += 3
    console.log('home', homescore)
    let codeElement= document.getElementById('homescore')
    codeElement.innerText = homescore;
}


function aAdd1() {
    awayscore += 1
    console.log('away', awayscore);
    let awaypoints = document.getElementById('awayscore')
    awaypoints.innerText = awayscore;
}


function aAdd3() {
    awayscore += 3
    console.log('away', awayscore)
    let awaypoints = document.getElementById('awayscore')
    awaypoints.innerText = awayscore;
}


function startOver() {
    homescore = 0
    awayscore = 0
    let codeElement= document.getElementById('homescore')
    codeElement.innerText = homescore;
    let awaypoints = document.getElementById('awayscore')
    awaypoints.innerText = awayscore;
}


function addPlayer() {
    
}


function hLose2() {
    homescore -= 2
    console.log('home', homescore)
    let codeElement= document.getElementById('homescore')
    codeElement.innerText = homescore;
    console.log('homescore')

}

function aLose2() {
    awayscore -= 2
    console.log('away', awayscore)
    let codeElement= document.getElementById('awayscore')
    codeElement.innerText = awayscore;
    console.log('awayscore')

}


function total() {
    console.log('end game')
    if (homescore < awayscore) {
        window.alert('Home Won')
    } else if (awayscore < homescore) {
        window.alert('Away Won')
    } else if (homescore == awayscore) {
        window.alert('It is a tie')
    }
        
    startOver()
        
}