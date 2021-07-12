function findMatching(origin, search) {
    return origin.filter (viableMatch =>
    viableMatch.toLowerCase() === search.toLowerCase()
    )
}

function fuzzyMatch (origin, quizString) {
    return origin.filter (viableMatch =>
    viableMatch.toLowerCase () .indexOf(quizString.toLowerCase ()) === 0
    )
}// Code your solution here

function matchName (origin, searchName) {
    return origin.filter (data => data.name === searchName)
}