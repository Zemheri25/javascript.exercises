function random1(list1) {
    let choice =  Math.floor(Math.random()*2)
    return list1[choice]
}
let list1 = ["fighter1", "fighter2"]
let compchoice = random1(list1)




let fighter1 = 0;
let fighter2 = 0;
let punch = 10;

let fightend = false;


if (compchoice == "fighter1"){
    while(fightend != true) {
        fighter1 += punch;
        console.log("fighter1 punch");
        let a = Math.floor(Math.random()*101);
        if (a <= fighter1) {
            fightend = true;
            console.log("fighter1 wins");
        } else {
            fighter2 += punch;
            console.log("fighter2 punch");
            let b = Math.floor(Math.random()*101);
            if (b <= fighter2) {
                fightend = true;
                console.log("fighter2 wins");
            }
        }

    }

} else {
    while(fightend != true) {
        fighter2 += punch;
        console.log("fighter2 punch");
        let b = Math.floor(Math.random()*101);
        if (b <= fighter2) {
            fightend = true;
            console.log("fighter2 wins");
        } else {
            fighter1 += punch;
            console.log("fighter1 punch");
            let a = Math.floor(Math.random()*101);
            if (a <= fighter1) {
                fightend = true;
                console.log("fighter1 wins");
            }
        }

    }
}
