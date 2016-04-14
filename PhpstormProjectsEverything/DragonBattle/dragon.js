
    var slaying = true;
// A bit of new math magic to calculate the odds
// of hitting the dragon. We'll cover this soon!
    var youHit = Math.floor(Math.random() * 2);
    var damageThisRound = Math.floor(Math.random() * 4 + 1);
    var totalDamage = 0;

    while (slaying) {
        if (youHit) {
            console.log("You hit the dragon and did " + damageThisRound + " damage!");
            totalDamage += damageThisRound;

            if (totalDamage >= 4) {
                console.log("You did it! You slew the dragon!");
                slaying = true;
                console.log("You won, and move on to a new dragon")
            } else {
                youHit = Math.floor(Math.random() * 2);
            }
        } else {
            console.log("The dragon incinerates you! You're toast.");
            slaying = false;
        }
    }

/**
 * Created by session2 on 9/25/15.
 */