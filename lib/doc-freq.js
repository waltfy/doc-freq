var wf = require('word-freq');

module.exports = {
	/**
	  * Returns a dictionary (`Object`) containing how
	  *
	  * corpus - `Array`. The text in which frequency is to be calculated.
	  * noStopWords (true) - `Boolean`. Toggles stopwords removal.
	  * shouldStem (true) - `Boolean`. Turns stemming on and off. http://en.wikipedia.org/wiki/Stemming
		*/
	run: function (corpus, noStopWords, shouldStem) {
		var dictionary = {};
		noStopWords = (typeof noStopWords === 'undefined') ? true : noStopWords;  // set default to `true`
		shouldStem = (typeof shouldStem === 'undefined') ? true : shouldStem;  // set default to `true`
		
		corpus.map(function (doc) { return wf.freq(doc, noStopWords, shouldStem); })
			.forEach(function (doc) {
				for (var word in doc) {
					if (dictionary.hasOwnProperty(word)) dictionary[word] += 1;
					else dictionary[word] = 1;
				}
			});

		return dictionary;
	}	
}