var t = require('tap').test;
var df = require('../');

var myDocs = [
	'I love the stars',
	'I hate the sun',
	'I love the moon',
	'I just like watching the sky',
	'The moon is beautiful'
];

t('returns number of documents containing a given word, removing stopwords and stemming', function (t) {
	t.deepEqual(
		df.run(myDocs),
		{ 'love':   2,
      'star':   1,
      'hate':   1,
      'sun':    1,
      'moon':   2,
      'watch':  1,
      'sky':    1,
      'beauti': 1 
    },
		"dictionaries should match"
	);
	t.end();
});

t('returns number of documents containing a given word, including stopwords and stemming', function (t) {
	t.deepEqual(
		df.run(myDocs, false),
		{ 'i': 4,
			'love':   2,
			'the': 5,
      'star':   1,
      'hate':   1,
      'sun':    1,
      'moon':   2,
      "just" : 1,
			"like" : 1,
      'watch':  1,
      'sky':    1,
      'is': 1,
      'beauti': 1 
    },
		"dictionaries should match"
	);
	t.end();
});

t('returns number of documents containing a given word, including stopwords and without stemming', function (t) {
	t.deepEqual(
		df.run(myDocs, false, false),
		{ 'i': 4,
			'love':   2,
			'the': 5,
      'stars':   1,
      'hate':   1,
      'sun':    1,
      'moon':   2,
      "just" : 1,
			"like" : 1,
      'watching':  1,
      'sky':    1,
      'is': 1,
      'beautiful': 1 
    },
		"dictionaries should match"
	);
	t.end();
});

t('returns number of documents containing a given word, removing stopwords and wuhout stemming', function (t) {
	t.deepEqual(
		df.run(myDocs, true, false),
		{ 'love':   2,
      'stars':   1,
      'hate':   1,
      'sun':    1,
      'moon':   2,
      'watching':  1,
      'sky':    1,
      'beautiful': 1 
    },
		"dictionaries should match"
	);
	t.end();
});