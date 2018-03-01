## 井字游戏

给定一个已有任意棋子的棋盘，和玩家标示符（'x' 或 'o'），返回该玩家下一步有几种可能的获胜方式

* 棋盘长度必须大于 3
* 棋盘的长宽必须相等
* 获胜条件（直线上连接几个棋子）不能大于棋盘长度

### 使用方法

```	
	const howWin = require('./index.js')


	howWin(chessboard, player, emptyBoard, winCount)
```

`chessboard` : 棋盘（二位数组）
`player`: 玩家棋子标示符（比如 'x'）
`emptyBoard`: 棋盘没有棋子地格子标示符（默认是 'e'）
`winCount`: 直线上连接几个棋子获胜（默认 3 颗）

### 例如： 

```

const howWin = require('./index.js')


howWin(
	[
		['o', 'e', 'e'],
  		['o', 'x', 'o'],
  		['x', 'x', 'e']
  	]
	, 'x'
)
// return [ [2, 2], [0, 1], [0, 2] ]

howWin(
	[
		['x', 'o', 'o'],
  		['x', 'x', 'e'],
  		['e', 'o', 'e']
  	]
 	, 'x'
)
// return [ [2, 2], [1, 2], [2, 0] ]

howWin(
	[
		['x', 'x', 'o'],
  		['e', 'e', 'e'],
  		['e', 'e', 'e'] 
  	]
 	, 'x'
)
// return [ ]

howWin(
	[ 
		['o', 'o', 'o'],
  		['e', 'e', 'e'],
  		['e', 'e', 'e']
  	]
	, 'o'
)
// return [ ]


howWin(
	[ 
		['e', 'x', 'x', 'x', 'x', 'e', 'e', 'e'],
		['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
		['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
		['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
		['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
		['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
		['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'],
		['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e']														
  	]
	, 'x'
	, 'e'
	, 5
)
// return [[0,0] [0,5]]


```

