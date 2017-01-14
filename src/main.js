'use strict'

const Trie = require('./trie'),
    fs   = require('fs'),
    text = fs.readFileSync('../string.txt', 'utf8'),
    words = text.replace('/\n/g', '').split(' ').sort();

var my_trie = new Trie( words );
var final_trie = JSON.stringify( my_trie.build() ).replace(/"/g, "");
fs.writeFileSync('./trie.txt', final_trie, 'utf8');