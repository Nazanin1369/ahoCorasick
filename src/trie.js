'use strict'

var Trie = class Trie {
    constructor(words) {
        this.words = words;
        this.trie = {};
    }

    build() {
        for(let i = 0 ; i < this.words.length; i++) {
            var word = this.words[i],
                //get all the word letters
                letters = word.split(''),
                cur_trie = this.trie;

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

        return this.trie;
    }
}

module.exports = Trie;

