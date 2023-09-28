let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function fireShip() {
    if (shipCanFire()) {
        shipAmmo--;
        if (isHit()) {
            targetHealth--;
            console.log('hit - targetHealth:', targetHealth);
        }
        else {
            console.log('miss');
        }
    }
    else {
        reloadShip();
        console.log('reloading, shipHealth', shipHealth);
    }
    
}

function encounter() {
    console.log('You see a target');
    if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
        fireShip();
        if (isDestroyed(targetHealth)) {
            console.log('Target is destroyed')
        }
        if (isDestroyed(shipHealth)) {
            console.log('Ship is destroyed'); 
        }
    }
}


function shipCanFire() {
    if (shipHealth > 0 && shipAmmo > 0) {
        return true;
    }
    else {
        return false;
    }
}
function isDestroyed(health) {
    if (health <= 0) {
        return true;
    }
    else {
        return false;
    }
}
function isHit() {
    return Math.random() >.5 ;
}
function reloadShip() {
    shipHealth -- -1
    shipAmmo += 3
}

encounter();