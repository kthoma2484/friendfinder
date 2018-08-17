//-------------Data-----------------------------------
// array to hold new friend data entered in form

let friendArray = [
    {
        name: "Jack Napier",
        photo: "https://i.ytimg.com/vi/ELMbpGRTjRM/maxresdefault.jpg",
        scores: [
            5,
            1,
            2,
            4,
            2,
            3,
            5,
            3,
            2,
            5
        ]
    },
    {
        name: "Alley Parker",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO3Ts9Nr4E8nWc-di2lf50dhy__jnInzyHmeCcFL6tXzsleVJn",
        scores: [
            3,
            1,
            5,
            1,
            2,
            1,
            5,
            5,
            2,
            1
        ]
    },
    {
        name: "Jamie Wilson",
        photo: "https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1526646990/1526646887.jpg",
        scores: [
            5,
            1,
            2,
            4,
            2,
            3,
            5,
            3,
            2,
            5
        ]
    }
]

// Export array for accessibility by other files using require
module.exports = friendArray;