function countOccurencesOfWord(sentance, word){
    let regex = new RegExp(`\\b${word}\\b`, 'gi'); // gi = global, insensitive
    let result = sentance.match(regex);

    console.log(result? result.length: 0);
}

countOccurencesOfWord('The waterfall was so high, that the child couldn’t see its peak.', 'the');
