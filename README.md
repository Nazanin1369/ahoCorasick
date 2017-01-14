# ahoCorasick
Aho-Corasick Pattern searching algorithm in Javascript

Aho-Corasick algorithm is a string search algorithm invented by Alfred V. Aho a Canadian Computer scientists mostly famous for his work on languages, compilers and related algorithms. This algorithm is used to find occurrences of text in a set of strings. The complexity of this algorithm is **linear** in the length of the strings plus the length of the searched text plus the number of output matches. 

The algorithm actually build a **finite state machine** which represents a **Trie** with additional links between various small nodes.  The automaton for this algorithm can get constructed once and then the compiled version of it can get used later. This algorithm later on formed the bases of **Unix command fgrep**.
