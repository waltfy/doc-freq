doc-freq
========
[![Build Status](https://travis-ci.org/waltervascarvalho/doc-freq.svg?branch=master)](https://travis-ci.org/waltervascarvalho/doc-freq)

[![Gitter chat](https://badges.gitter.im/waltervascarvalho/doc-freq.png)](https://gitter.im/waltervascarvalho/doc-freq)

Calculate how many documents contain a certain term, within a list (`Array`) of text documents (`String`).

## Version
* `0.0.1` Release.

## Usage

### Document Frequency (`df.run(corpus, noStopWords, shouldStem)`)
Returns an object containing the frequency of each term in the `corpus` provided–i.e. how many documents contain a given word.
* `corpus` is the string (text document) in which the calculations are to be performed on.
* `noStopWords` defaults to `true`. Set to `false` if you want to include stop words–e.g words such as "I" and "the".
* `shouldStem` defaults to `true`. Set to `false` if you want words not to be stemmed.

```javascript
var df = require('doc-freq');

var myDocs = [
	'I love the stars',
	'I hate the sun',
	'I love the moon',
	'I just like watching the sky',
	'The moon is beautiful'
];

var freq = df.run(myDocs);
>> { 'love':   2, // 2 documents containing love
      'star':   1,
      'hate':   1,
      'sun':    1,
      'moon':   2,
      'watch':  1,
      'sky':    1,
      'beauti': 1 
    }
```
