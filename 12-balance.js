module.exports = {
  myAnswer: /.{37}|^(<>|<<>>)*$|^(?!<{0,2}>|(<{5}(>{5}|>>><>>>))).*[^<]{2}$/,
  shouldMatch: [
    '',
    '<<<<<>><<>>><<>>><<><>><<>>><<<<<>>>>><<<><>><<<<>><>>>><<><>>',
    '<<<<<>><>><<><<>>>><>><<<<<>><<>>><<><<>>>><<<>>><<<><<>>><<<>>>><<<<>><<>>>>><<<<>>><<><<>><>><<<<>>><<<>>>>>',
    '<<<<<>><>><>><<<<>>><<>><<>>>><<<<<>><<>>>><<<><<>>><<<>>>>><<<<<>><<>>><<<>><<>>>><<<<>>><>>><<<<>>>>',
    '<<<<<>><>>>><<<>><<<<>>>>><<<<<>><>>><<<><<>>>><<<<>>>><<<<>>><<>>>><<<<<>><>><<<>><>>>>',
    '<<<<<>>><<<>><>>><<<>>>><><<<><<<>><>>><>><<><<><<><>>><>>',
    '<<<<<>>><<><>>><<<>>><<<<>>><>><<<<>><<>>><><<>>>><<<><<>>><<<<>>><<<>>>>><<<<>>><<<<>>><<>><<<>>>><<>>><<<><<<>>>><<><<><>>><<<<>><<>>><<<>>>><<><<>>>>',
    '<<<<<>>><<>><<>>><<>>><<<<><<>>>><<<<>>>>>',
    '<<<<<>>><>><<<>>>><<>>',
    '<<<<<>>>><<<<>>>><<<>>><<<<>>><<>>>><<<<><<>>><><<><<>>>><<><>>><<<<<>><<>>>><<<><<>>>><<<>><<<>><>>>>',
    '<<<<<>>>><<<><>>>><<<<<>><>>>>',
    '<<<<<>>>><><<<<>>>>><<<<>><<>>><<<>><>><<<<>><<>>><<>><<<>><>>>><>',
    '<<<<<>>>><><<<>><><<<>><<>>>>><<><<>><><<<<>><<>>><<<>><>>>><><<<><<<>>>><<><<>><<<>>>><><<<>>>><<<><<>>><<<>>><<<><<>>>><>>',
    '<<<<<>>>><>><<>>',
    '<<<<><<>>><<<>>>>><<<<<>><>>><<>>>',
    '<<<<>><<<>>>><<><<>>>><<<<>><>><<><<>><<><<>>>>><<<<<>>><<<>>>><<<<>><<>>><<<>>><<<>>>><<>>>',
    '<<<<>>><<<<>><>><<<>>>>>',
    '<<<<>>><<<><<>>><><<>>>><<>>',
    '<<<<>>><<><<<>><>>><<><<><<>>><<>>>><<<><<<>>><<><<>>>><<<<>>><>><<<<>><<>>><><<>>>>',
    '<<<<>>>><<<><<>>>><><<<<>>>><<<><<<>><<>>>><<<<>>>>>',
    '<<<><<<>>>><<<<>>><>>><<<>>><<<<>>><<<>><<<>><>>>>',
    '<<<><<><>>>>',
    '<<<><>><<<>>>>',
    '<<<>><<<><<>>><<<>><>>>><><<<<><<>>>>><<<>>>',
    '<<<>><><<<><>>>><<<<>><<>><<<>>>><<<<>>><<>><>>>',
    '<<<>>><<><<<<>>>><<><<<>>>>>',
    '<<><<<<>><>>>><<<><<<>>><<>>><<<>><<><<>>>><<<>><<<>><<>>>>>',
    '<<>>',
    '<<>><<<<<>>>>><<<<<>><<>>><<><<>>>><>><<><<<<<<>>>>>>>',
    '<<>><<<<>><<<>>><<<>>>><>><<<<<>><>><<><>>><<>><<><><<<>><<>>>>><<<<<>>>>>',
    '<>',
    '<><>',
  ],
  shouldNotMatch: [
    '<',
    '<<<<<<>>><<><>>>>>><<>',
    '<<<<<>>><>>><<<>>>><>>',
    '<<<<<>>>>>>',
    '<<<<>><<<<<><<>><><<<<',
    '<<<>><<<<><><><><',
    '<<<>>>><><<<><>',
    '<<><<<<><<><<>>><<',
    '<<><<<>>>>><<',
    '<<>>><<<>>',
    '<><<<>><<>>><<>',
    '<><<>>><<<><>><<<>>><<>>>><',
    '<><<>>><><<<>',
    '<><>><>>><><<<<<><><>>>>>><><<><><<>',
    '<>><><<<><>',
    '<>>>>>><<<>><<>><><',
    '<>>>>>>><<<',
    '>',
    '><',
    '><<<>><><<<><<',
    '><<<>>>><><<<<><>>><<><><<',
    '><<><<<<><<<<>>>><',
    '><><><<<>>>>>',
    '><><>>><>><>',
    '><><>>>><>>>>>>><>>><>>',
    '><>><<<<<>>',
    '><>><><><<>><<>>><<',
    '><>>><>>>>><<><<<><>><>><<<',
    '>><<<><<<<<<><>><<',
    '>><>>><<<><>>><><<>><<><><<',
    '>>>><>><>>>><>>><>><><',
    '>>>>><<<>>>',
  ]
};
