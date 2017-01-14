'use strict'

ahoCorasickSearch(trie, s) => {
    let current_node = trie,
        state = '',
        sentence = s.split(''),
        j = 0;

    while(1) {
       for (i = j; i < sentence.length; i++) {
            let r = current_node.hasChild(sentence[i]);
            // Does this character exist in the children of where we
            //are in the trie?
            if (r) {
                // If so, append to the state, and traverse to
                // that child
                state += sentence[i];
                current_node = r;
                // Have we found a word now?
                if (trie.getWordCount(state) != 0) {
                    return true;
                }
            } else {
                // If not, go back to where we started to match,
                //reduce i, and empty the state
                current_node = trie;
                i = i - state.length;
                state = '';
            }
        }
        // Reached the end of the string
        if (state == '') {
            // Just found nothing
            return false;
        } else {
            // Was in the middle of finding something, so possibly
            //missed something, so go back to check.
            current_node = trie;
            j = i - state.length + 1;
            state = '';
        }
    }
}