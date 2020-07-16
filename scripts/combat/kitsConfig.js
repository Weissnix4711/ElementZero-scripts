export default config = {
    "kitGroupA":{
        "singleChoice": true,
        "repurchase": false,
        "staffOnly": false,
        "kits": [
            "kitNameA": {
                "description": "blah blah",
                "items": [
                    { "name": "diamonds", "amount": 12 },
                    { "name": "diamond_sword", "amount": 1 }
                ]
            },
            "kitNameB": {
            }
        ]
    },
    "staff": {
        "singleChoice": false,
        "repurchase": true,
        "staffOnly": true,
        "kits": [
            "admin": {
            },
            "troll": {
            }
        ]
    }
}
