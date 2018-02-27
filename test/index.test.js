const should = require('should');
const howWin = require('../')


// 没有棋子符号，棋手1 棋子符号，棋手2 棋子符号
const emptyBoard = 'e', cPlayer1 = 'x', cPlayer2 = 'o'
const genChessboard = (chessboardLen) => {
  let chessboard = []
  for (let i=0; i<chessboardLen; i++) {
      if (!chessboard[i]) chessboard[i] = []
      for (let j=0; j<chessboardLen; j++) {
          chessboard[i][j] = emptyBoard
      }
  }
}

const flatten = (array) => {
  if (!array) return [];
  let result = [];
  for (let i=0; i<array.length; i++) {
    result = result.concat(array[i])
  }
  return result
}


describe('howWin', () => {


  it('return [ ]', (done) => {
    let _chessboard = null;
    let ret = howWin(_chessboard, 'x', 'e', 3);
    console.log(ret)
    ret.length.should.equal(0);
    JSON.stringify(flatten([]).sort()).should.equal(JSON.stringify(flatten(ret).sort()))
    done()
  });

  it('return [ ]', (done) => {
    let _chessboard = [
      ['o', 'e'],
      ['o', 'x']
    ]
    let ret = howWin(_chessboard, 'x', 'e', 3);
    console.log(ret)
    ret.length.should.equal(0);
    JSON.stringify(flatten([]).sort()).should.equal(JSON.stringify(flatten(ret).sort()))
    done()
  });


  it('return [ ]', (done) => {
    let _chessboard = [
      ['o', 'e', 'e'],
      ['o', 'x', 'o']
    ]
    let ret = howWin(_chessboard, 'x', 'e', 3);
    console.log(ret)
    ret.length.should.equal(0);
    JSON.stringify(flatten([]).sort()).should.equal(JSON.stringify(flatten(ret).sort()))
    done()
  });

  it('return [ [2, 2], [0, 1], [0, 2] ]', (done) => {
    let _chessboard = [
      ['o', 'e', 'e'],
      ['o', 'x', 'o'],
      ['x', 'x', 'e']
    ]
    let ret = howWin(_chessboard, 'x', 'e', 3);
    console.log(ret)
    ret.length.should.equal(3);
    JSON.stringify(flatten([[2, 2], [0, 1], [0, 2]]).sort()).should.equal(JSON.stringify(flatten(ret).sort()))
    done()
  });    

  it('return [ [2, 2], [1, 2], [2, 0] ]', (done) => {
    let _chessboard = [
      ['x', 'o', 'o'],
      ['x', 'x', 'e'],
      ['e', 'o', 'e']
    ]
    let ret = howWin(_chessboard, 'x', 'e', 3);
    ret.length.should.equal(3);
    console.log(ret)
    JSON.stringify(flatten([[2, 2], [1, 2], [2, 0]]).sort()).should.equal(JSON.stringify(flatten(ret).sort()))
    done()
  });

  it('return []', (done) => {
    let _chessboard = [
      ['x', 'x', 'o'],
      ['e', 'e', 'e'],
      ['e', 'e', 'e']
    ]
    let ret = howWin(_chessboard, 'x', 'e', 3);
    ret.length.should.equal(0);
    console.log(ret)
    JSON.stringify(flatten([]).sort()).should.equal(JSON.stringify(flatten(ret).sort()))
    done()
  });

  it('return [[1,2], [2,0], [2,2]]', (done) => {
    let _chessboard = [
      ['x', 'o', 'o'],
      ['x', 'x', 'e'],
      ['e', 'o', 'e']
    ]
    let ret = howWin(_chessboard, 'x', 'e', 3);
    ret.length.should.equal(3);
    console.log(ret)
    JSON.stringify(flatten([[1,2], [2,0], [2,2]]).sort()).should.equal(JSON.stringify(flatten(ret).sort()))
    done()
  });

  it('return [[1,2], [2,0], [2,2]]', (done) => {
    let _chessboard = [
      ['x', 'o', 'x'],
      ['x', 'x', 'e'],
      ['e', 'o', 'e']
    ]
    let ret = howWin(_chessboard, 'x', 'e', 3);   
    console.log(ret); 
    ret.length.should.equal(3);
    JSON.stringify(flatten([[1,2], [2,0], [2,2]]).sort()).should.equal(JSON.stringify(flatten(ret).sort()))
    done()
  });

  it('return []', (done) => {
    let _chessboard = [
      ['o', 'o', 'o'],
      ['e', 'e', 'e'],
      ['e', 'e', 'e']
    ]
    let ret = howWin(_chessboard, 'o', 'e', 3);
    console.log(ret)
    ret.length.should.equal(0);
    JSON.stringify(flatten([]).sort()).should.equal(JSON.stringify(flatten(ret).sort()))
    done()
  });

  it('return [[0,1],[1,2],[2,0],[2,2]]', (done) => {
    let _chessboard = [
      ['x', 'e', 'x'],
      ['x', 'x', 'e'],
      ['e', 'o', 'e']
    ]
    let ret = howWin(_chessboard, 'x', 'e', 3);
    ret.length.should.equal(4);
    console.log(ret)
    JSON.stringify(flatten([[0,1],[1,2],[2,0],[2,2]]).sort()).should.equal(JSON.stringify(flatten(ret).sort()))
    done()
  });

  it('return [[0,1],[2,0],[2,2]]', (done) => {
    let _chessboard = [
      ['x', 'e', 'x'],
      ['o', 'x', 'e'],
      ['e', 'o', 'e']
    ]
    let ret = howWin(_chessboard, 'x', 'e', 3);
    ret.length.should.equal(3);
    console.log(ret)
    JSON.stringify(flatten([[0,1],[2,0],[2,2]]).sort()).should.equal(JSON.stringify(flatten(ret).sort()))
    done()
  });


  it('return [[1,2],[2,0],[2,2]]', (done) => {
    let _chessboard = [
      ['x', 'o', 'o', 'e'],
      ['x', 'x', 'e', 'e'],
      ['e', 'o', 'e', 'e'],
      ['e', 'o', 'e', 'e']
    ]
    let ret = howWin(_chessboard, 'x', 'e', 3);
    ret.length.should.equal(3);
    console.log(ret)
    JSON.stringify(flatten([[1,2],[2,0],[2,2]]).sort()).should.equal(JSON.stringify(flatten(ret).sort()))
    done()
  });

  it('return [[1,2],[2,2],[1,3],[3,2],[2,0]]', (done) => {
    let _chessboard = [
      ['o', 'o', 'x', 'e'],
      ['x', 'x', 'e', 'e'],
      ['e', 'x', 'e', 'x'],
      ['e', 'o', 'e', 'x']
    ]
    let ret = howWin(_chessboard, 'x', 'e', 3);
    console.log(ret)
    ret.length.should.equal(5);
    JSON.stringify(flatten([[1,2],[2,2],[1,3],[3,2],[2,0]]).sort()).should.equal(JSON.stringify(flatten(ret).sort()))
    done()
  });  

  it('return [[1,3]]', (done) => {
    let _chessboard = [
      ['o', 'o', 'x', 'e'],
      ['x', 'x', 'e', 'e'],
      ['e', 'x', 'o', 'x'],
      ['e', 'o', 'e', 'x']
    ]
    let ret = howWin(_chessboard, 'o', 'e', 3);
    console.log(ret)
    ret.length.should.equal(1);
    JSON.stringify(flatten([[1,3]]).sort()).should.equal(JSON.stringify(flatten(ret).sort()))
    done()
  });

  it('return [[1,3]]', (done) => {
    let _chessboard = [
      ['o', 'o', 'x', 'e'],
      ['x', 'x', 'e', 'e'],
      ['e', 'x', 'o', 'x'],
      ['e', 'o', 'e', 'x']
    ]
    let ret = howWin(_chessboard, 'o', 'e', 3);
    console.log(ret)
    ret.length.should.equal(1);
    JSON.stringify(flatten([[1,3]]).sort()).should.equal(JSON.stringify(flatten(ret).sort()))
    done()
  });

  it('return []', (done) => {
    let _chessboard = [
      ['o', 'o', 'x', 'e'],
      ['x', 'x', 'e', 'o'],
      ['e', 'x', 'o', 'x'],
      ['e', 'o', 'e', 'x']
    ]
    let ret = howWin(_chessboard, 'o', 'e', 3);
    console.log(ret)
    ret.length.should.equal(0);
    JSON.stringify(flatten([]).sort()).should.equal(JSON.stringify(flatten(ret).sort()))
    done()
  });

  it('return [[4,1],[3,2],[2,3],[1,1],[4,4],[0,4],[2,4]]', (done) => {
    let _chessboard = [
      ['o', 'e', 'e', 'e', 'e'],
      ['e', 'e', 'o', 'x', 'e'],
      ['o', 'o', 'x', 'e', 'e'],
      ['e', 'o', 'e', 'x', 'e'],
      ['x', 'e', 'x', 'e', 'e']
    ]
    let ret = howWin(_chessboard, 'x', 'e', 3);
    console.log(ret)
    ret.length.should.equal(7);
    JSON.stringify(flatten([[4,1],[3,2],[2,3],[1,1],[4,4],[0,4],[2,4]]).sort()).should.equal(JSON.stringify(flatten(ret).sort()))
    done()
  });

  it('return []', (done) => {
    let _chessboard = [
      ['o', 'e', 'e', 'e', 'e'],
      ['e', 'e', 'o', 'x', 'e'],
      ['o', 'o', 'x', 'e', 'e'],
      ['e', 'x', 'e', 'x', 'e'],
      ['x', 'e', 'x', 'e', 'e']
    ]
    let ret = howWin(_chessboard, 'x', 'e', 3);
    console.log(ret)
    ret.length.should.equal(0);
    JSON.stringify(flatten([]).sort()).should.equal(JSON.stringify(flatten(ret).sort()))
    done()
  });

  it('return [[4,1], [5,1], [3,0], [3,2], [2,3], [1,5], [4,5], [1,1], [4,4], [0,4], [3,1]]', (done) => {
    let _chessboard = [
      ['o', 'e', 'e', 'e', 'e', 'x'],
      ['e', 'e', 'o', 'x', 'e', 'e'],
      ['o', 'o', 'x', 'e', 'o', 'x'],
      ['e', 'e', 'e', 'x', 'o', 'x'],
      ['x', 'e', 'x', 'o', 'e', 'e'],
      ['x', 'e', 'x', 'e', 'e', 'e']
    ]
    let ret = howWin(_chessboard, 'x', 'e', 3);
    console.log(ret)
    ret.length.should.equal(11);
    JSON.stringify(flatten([[4,1], [5,1], [3,0], [3,2], [2,3], [1,5], [4,5], [1,1], [4,4], [0,4], [3,1]]).sort()).should.equal(JSON.stringify(flatten(ret).sort()))
    done()
  });

  it('return [[1,1],[1,4], [1,5], [1,8]]', (done) => {
    let _chessboard = [
      ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      ['x', 'e', 'x', 'x', 'e', 'e', 'x', 'x', 'e', 'x'],
      ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e']                                                      
    ]
    let ret = howWin(_chessboard, 'x', 'e', 3);
    console.log(ret)
    ret.length.should.equal(4);
    JSON.stringify(flatten([[1,1],[1,4], [1,5], [1,8]]).sort()).should.equal(JSON.stringify(flatten(ret).sort()))
    done()
  });

  it('return []', (done) => {
    let _chessboard = [
      ['e', 'e', 'e', 'x', 'e', 'e', 'e', 'e', 'e', 'e'],
      ['x', 'e', 'x', 'x', 'e', 'e', 'x', 'x', 'e', 'x'],
      ['e', 'x', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e']                                                      
    ]
    let ret = howWin(_chessboard, 'x', 'e', 3);
    console.log(ret)
    ret.length.should.equal(0);
    JSON.stringify(flatten([]).sort()).should.equal(JSON.stringify(flatten(ret).sort()))
    done()
  });  


  it('围棋棋盘8*8 return [[0,0], [0,5]]', (done) => {
    let _chessboard = [
      ['e', 'x', 'x', 'x', 'x', 'e', 'e', 'e'],
      ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e']
    ]
    let ret = howWin(_chessboard, 'x', 'e', 5);
    console.log(ret)
    ret.length.should.equal(2);
    JSON.stringify(flatten([[0,0], [0,5]]).sort()).should.equal(JSON.stringify(flatten(ret).sort()))
    done()
  }); 

  it('围棋棋盘18*18 return [[11, 6], [11, 9], [9,7], [12, 7], [4,8],[8,6], [6,10], [5,7], [8,10], [6,6], [9,6], [12,9]]', (done) => {
    let _chessboard = [
      /*        0    1    2    3    4    5    6    7    8    9    10   11   12   13   14   15   16   17*/
      /* 0 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 1 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],      
      /* 2 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 3 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 4 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 5 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'x', 'o', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 6 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'x', 'o', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 7 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'x', 'o', 'x', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 8 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'x', 'o', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 9 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'x', 'o', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 10*/ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'x', 'o', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 11*/ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'x', 'x', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 12*/ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'o', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 13*/ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 14*/ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 15*/ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 16*/ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 17*/ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e']
    ]
    let ret = howWin(_chessboard, 'x', 'e', 3);
    console.log(ret)
    ret.length.should.equal(12);
    JSON.stringify(flatten([[11, 6], [11, 9], [9,7], [12, 7], [4,8],[8,6], [6,10], [5,7], [8,10], [6,6], [9,6], [12,9]]).sort()).should.equal(JSON.stringify(flatten(ret).sort()))
    done()
  });

  it('围棋棋盘18*18 return []', (done) => {
    let _chessboard = [
      /*        0    1    2    3    4    5    6    7    8    9    10   11   12   13   14   15   16   17*/
      /* 0 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 1 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],      
      /* 2 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 3 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 4 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 5 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'x', 'o', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 6 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'x', 'o', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 7 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'x', 'o', 'x', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 8 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'x', 'o', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 9 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'x', 'o', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 10*/ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'x', 'o', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 11*/ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'x', 'x', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 12*/ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'o', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 13*/ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 14*/ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 15*/ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 16*/ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 17*/ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e']
    ]
    let ret = howWin(_chessboard, 'x', 'e', 5);
    console.log(ret)
    ret.length.should.equal(0);
    JSON.stringify(flatten([]).sort()).should.equal(JSON.stringify(flatten(ret).sort()))
    done()
  }); 


  it('围棋棋盘18*18 return [[11,11], [9,7], [9,2],[11,2],[6,7], [14, 7], [9,11], [14,6], [4,7], [9,12], [10, 9]]', (done) => {
    let _chessboard = [
      /*        0    1    2    3    4    5    6    7    8    9    10   11   12   13   14   15   16   17*/
      /* 0 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 1 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],      
      /* 2 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 3 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 4 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 5 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'x', 'o', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 6 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'x', 'x', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 7 */ ['e', 'e', 'e', 'e', 'e', 'e', 'x', 'x', 'o', 'x', 'x', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 8 */ ['e', 'e', 'e', 'e', 'e', 'x', 'e', 'x', 'x', 'o', 'e', 'x', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 9 */ ['e', 'e', 'e', 'e', 'x', 'e', 'e', 'e', 'x', 'o', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 10*/ ['e', 'e', 'e', 'x', 'e', 'e', 'e', 'x', 'o', 'e', 'x', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 11*/ ['e', 'e', 'e', 'e', 'x', 'e', 'o', 'x', 'x', 'x', 'x', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 12*/ ['e', 'e', 'e', 'e', 'e', 'x', 'e', 'o', 'x', 'o', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 13*/ ['e', 'e', 'e', 'e', 'e', 'e', 'x', 'x', 'o', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 14*/ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'o', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 15*/ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 16*/ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 17*/ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e']
    ]
    let ret = howWin(_chessboard, 'x', 'e', 5);
    console.log(ret)
    ret.length.should.equal(11);
    JSON.stringify(flatten([[11,11], [9,7], [9,2],[11,2],[6,7], [14, 7], [9,11], [14,6], [4,7], [9,12], [10, 9]]).sort()).should.equal(JSON.stringify(flatten(ret).sort()))
    done()
  });


  it('围棋棋盘18*18 return []', (done) => {
    let _chessboard = [
      /*        0    1    2    3    4    5    6    7    8    9    10   11   12   13   14   15   16   17*/
      /* 0 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 1 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],      
      /* 2 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 3 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 4 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 5 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'x', 'o', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 6 */ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'x', 'x', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 7 */ ['e', 'e', 'e', 'e', 'e', 'e', 'x', 'x', 'o', 'x', 'x', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 8 */ ['e', 'e', 'e', 'e', 'e', 'x', 'e', 'x', 'x', 'o', 'e', 'x', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 9 */ ['e', 'e', 'e', 'e', 'x', 'e', 'e', 'e', 'x', 'o', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 10*/ ['e', 'e', 'e', 'x', 'e', 'e', 'e', 'x', 'o', 'e', 'x', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 11*/ ['e', 'e', 'e', 'e', 'x', 'e', 'o', 'x', 'x', 'x', 'x', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 12*/ ['e', 'e', 'e', 'e', 'e', 'x', 'e', 'o', 'x', 'o', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 13*/ ['e', 'e', 'e', 'e', 'e', 'e', 'x', 'x', 'o', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 14*/ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'x', 'e', 'o', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 15*/ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 16*/ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
      /* 17*/ ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e']
    ]
    let ret = howWin(_chessboard, 'x', 'e', 5);
    console.log(ret)
    ret.length.should.equal(0);
    JSON.stringify(flatten([]).sort()).should.equal(JSON.stringify(flatten(ret).sort()))
    done()
  }); 

});