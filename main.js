'use strict'

const fs = require('fs'),
    text = fs.readFileSync('string.txt', 'utf8'),
    words = text.replace('/\n/g', '').split(' ').sort(),
    trie = {};


for(let i = 0 ; i < words.length; i++) {
    var word = words[i],
        //get all the word letters
        letters = word.split(''),
        cur_trie = trie;

    //iterate through all letters of a word
    for(let j = 0; j < letters.length; j++) {
        let letter = letters[j],
            position = cur_trie[ letter ];

        //If this letters does not exist in the cur_trie create a leaf
        if(position === undefined) {
            // If it is the end of the word make zero as and
            // Otherwise make an object to continue building the trie
            cur_trie = cur_trie[ letter ] = j === letters.length - 1 ? 0 : {};
        } else if(position === 0) {
            // If a final leaf already exists we need to turn it
            // into an object to continue building the trie
            cur_trie = cur_trie[ letter ] = { $: 0 };
        } else {
            // Otherwise there is nothing to be set, so continue on
            cur_trie = cur_trie[ letter ];
        }
    }
}
var final_trie = JSON.stringify( trie ).replace(/"/g, "");
fs.writeFileSync('./trie.txt', final_trie, 'utf8');