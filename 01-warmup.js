module.exports = {
  name: 'Warmup',
  description: 'Type a regex in the box. You get ten points per match (or ' +
    'lose ten, if you match something you shouldn\'t); each character ' +
    'costs one point.',
  myAnswer: /foo/,
  score: 207,
  shouldMatch: [
    'afoot',
    'catfoot',
    'dogfoot',
    'fanfoot',
    'foody',
    'foolery',
    'foolish',
    'fooster',
    'footage',
    'foothot',
    'footle',
    'footpad',
    'footway',
    'hotfoot',
    'jawfoot',
    'mafoo',
    'nonfood',
    'padfoot',
    'prefool',
    'sfoot',
    'unfool',
  ],
  shouldNotMatch: [
    'Atlas',
    'Aymoro',
    'Iberic',
    'Mahran',
    'Ormazd',
    'Silipan',
    'altared',
    'chandoo',
    'crenel',
    'crooked',
    'fardo',
    'folksy',
    'forest',
    'hebamic',
    'idgah',
    'manlike',
    'marly',
    'palazzi',
    'sixfold',
    'tarrock',
    'unfold',
  ]
};
