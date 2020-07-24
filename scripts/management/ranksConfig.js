/*
This is the configuration file for ranks.

### PARTICLES
Note: The ranks script does NOT give the player any particle effects.
The "particles" array in here is only a list of tags given to a player when they recieve that rank.
This is because I use another addon for the particle effects themselves.

If you do not wish to use particles, leave the array empty.

### PREFIX
Prefix is meant for use with ElementZero's essentials mod. You must enable custom-name under essentials' config.

### DO NOT IMPORT THIS FILE!
It must only be imported once by the ranks script.
It is not necessary to import this config file from index.js
*/

export default {
    "rankOne" : {
        "prefix": "[One] ",
        "particles": [
            "52"
        ]
    },
    "rankTwo" : {
        "prefix": "[Two]",
        "particles": [
            "76"
        ]
    },
    "rankThree" : {
        "prefix": "[Three] ",
        "particles": [
            "76"
        ]
    },
    "vip" : {
        "prefix": "[VIP] ",
        "particles": [
            "40",
            "82",
            "65"
        ]
    }
};