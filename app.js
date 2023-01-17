var tags = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div']
var collectedTags = {}

for(var i = 0; i < tags.length; i++){
    if(collectedTags[tags[i]]) {
        collectedTags[tags[i]]++
    } else {
        collectedTags[tags[i]] = 1
    }
}

collectedTags = Object.keys(collectedTags).sort((a, b) => {
    if(collectedTags[a] > collectedTags[b]){
        return -1
    } else if(collectedTags[a] < collectedTags[b]){
        return 1
    } else return 0
})

console.log(collectedTags);