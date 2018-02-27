/*
 * 接受一个已有任意棋子的棋盘（二维数组 [['x', 'e', 'x'],['x', 'x', 'e'],['e', 'o', 'e']]）
 * 和玩家的标志（'x' 或 'o'），返回该玩家下一步有几种可能的获胜方式
 */

/**
 * 去重
 * @param  {Array}  array 二位数组
 * @return {Array}  去重后的二位数组
 */
const uniq = (array) => {
    if (!array || array.length < 2) return array
    let obj = {}
    array.forEach(item => {
        let s = JSON.stringify(item)
        obj[s] = 1;
    })
    return Object.keys(obj).map(item => {
        return JSON.parse(item)
    })
}

/**
 * 构造获胜 或 将要获胜 的正则匹配表达式
 * @param  {String} player     棋盘里玩家棋子的符号代表
 * @param  {String} emptyBoard 棋盘里未有棋子的呼号代表
 * @param  {Number} winCount  玩家棋子连接多少个标记获胜
 * @return {[RegExp, RegExp]}  已获胜正则 和 只需一步就获胜的正则
 */
const getRegExp = (player, emptyBoard, winCount) => {
    let winArr = []
    for (let i=0; i<winCount; i++) {
        winArr.push(player)
    }
    let winReg = winArr.join('')
    let result = [new RegExp(winReg, 'g')]
    for (let j=0; j<winCount; j++) {
        winArr[j] = emptyBoard
        let willWinReg = winArr.join('')
        winArr[j] = player
        result.push(new RegExp(willWinReg, 'g'))
    }
    return  result
}

/**
 * 棋盘转换
 * @param  {[Array]}  chessboard    原始棋盘 
 * @return {[Array,Array,Array]}                转换后的棋盘数组（多个）
 *   行为 X 轴的棋盘     [[x,o,o], [x,x,e], [e,o,e]] （原始棋盘）
 *   列为 X 轴的棋盘     [[x,x,e], [o,x,o], [o,e,e]] （横轴坐标交换）
 *   右斜线为 X 轴的棋盘   [[o], [o,e], [x,x,e], [x,o], [e]]
 *       x坐标：（原始X坐标 - 原始Y坐标 + 棋盘宽度 - 1)
 *       y坐标：（x 坐标小于棋盘宽度时为 原始X坐标，x 坐标大于等于棋盘宽度时为 原始Y坐标）
 *   左斜线为 X 轴的棋盘   [[x], [o,x], [o,x,e], [e,o], [e]]
 *       x坐标：（原始X坐标 + 原始Y坐标）
 *       y坐标：（x 坐标小于棋盘宽度时为 原始X坐标，x 坐标大于等于棋盘宽度时为 原始棋盘X坐标数字 - (x - 棋盘宽度 + 1) ）
 */
const parseChessboard = (chessboard) => {
    let len = chessboard.length;
    // 列，右斜边，左斜边
    let cArr = [], rbArr = [], lbArr = []
    for (let i=0; i<len; i++) {
        for (let j=0; j<len; j++) {
            if (!cArr[j]) {
                cArr[j] = []
            }
            cArr[j][i] = chessboard[i][j]
            let rIndex = i - j + len - 1
            let lIndex = i + j
            if (!rbArr[rIndex]) {
                rbArr[rIndex] = []
            }
            if (!lbArr[lIndex]) {
                lbArr[lIndex] = []
            }
            rbArr[rIndex].push(chessboard[i][j])
            lbArr[lIndex].push(chessboard[i][j])
        }
    }
    return [cArr, rbArr, lbArr]
}

/**
 * 检测下一步可以获胜的位置
 * @param  {Array}          list            连线集合
 * @param  {Number}         chessboardLen   棋盘宽度
 * @param  {String}         emptyBoard      棋盘为空的代表字符
 * @param  {RegExp}         regArr          已经获胜的正则，下一步可获胜的正则 数组
 * @param  {String}         type            连线集合类型（row, col, right, left）
 * @return {Array|Boolean}                  下一步可获胜点 或 已经获胜
 */
const checkWillWin = (result, list, chessboardLen, emptyBoard, regArr, type) => {
    if (typeof result === 'boolean') return result;
    let len = list.length

    let getCoordinate = (rowIndex, line, matched) => {
        for (let k=0; k<matched.length; k++) {
            let s = matched[k];
            // 计算坐标
            let emptyIndex = s.indexOf(emptyBoard);
            let index = line.indexOf(s) + emptyIndex + s.length * k;
            line = line.replace(s, '');
            if (type === 'row') { // 行
                result.push([rowIndex, index])
            } else if (type === 'col') { // 列
                result.push([index, rowIndex])
            } else if (type === 'right') { // 右斜边
                // list x 坐标小于原始棋盘宽度时，取的是原始棋盘的 x 坐标 为 转换后棋盘的 y 坐标
                // list x 坐标大于或等于原始棋盘宽度时，取的是原始棋盘的 y 坐标 为 转换后棋盘的 y 坐标
                let x, y                    
                if (rowIndex < chessboardLen) {
                    x = index
                    y = x + chessboardLen - 1 - rowIndex
                } else  {
                    y = index
                    x = y - chessboardLen + 1 + rowIndex
                }
                result.push([x, y])
            } else if (type === 'left') { // 左斜边
                // list x 坐标小于原始棋盘宽度时，转换后棋盘的 y 坐标 = 原始棋盘的X坐标
                // list x 坐标大于等于原始棋盘宽度时，转换后棋盘的 y 坐标 = 原始棋盘的X坐标 - （x坐标 - 原始棋盘宽度 + 1） 
                let x, y                    
                if (rowIndex < chessboardLen) {
                    x = index
                    y = rowIndex - x
                } else  {
                    x = index + (rowIndex - chessboardLen + 1)
                    y = rowIndex - x
                }
                result.push([x, y])                    
            }
        }
    }

    for (let i=0; i<len; i++) {
        let line = list[i].join('')
        // 已经获胜，返回 true
        if (regArr[0].test(line)) {
            return true
        }

        for (let j=1; j<regArr.length; j++) {
            let matched = line.match(regArr[j]);
            if (matched) {
                getCoordinate(i, line, matched)
            }
        }
    }
    return result;
}

/**
 * 获取下一步有几种可能的获胜方式的结果
 * @param  {[Array]} chessboard 二维数组棋盘，棋盘长度至少为 3 ，并且大于或等于 winCount 
 * @param  {String}  player     玩家在棋盘棋子的符号标记
 * @param  {String}  emptyBoard 棋盘未有棋子的符号标记，默认为 'e'
 * @param  {Number}  winCount  获胜的棋子的连接个数，默认 3 
 * @return {[Array]}            结果
 */
const howWin = (chessboard, player, emptyBoard = 'e', winCount = 3) => {
    if (
        !chessboard ||
        !chessboard[0] ||
        !chessboard[0][0] ||
        chessboard.length < 3 ||
        chessboard.length < winCount ||
        chessboard[0].length !== chessboard.length
    ) {
        return []
    }
    let edges = parseChessboard(chessboard)
    let regArr = getRegExp(player, emptyBoard, winCount)
    let chessboardLen = chessboard.length
    let result = []
    result = checkWillWin(result, chessboard, chessboardLen, emptyBoard, regArr, 'row')
    result = checkWillWin(result, edges[0], chessboardLen, emptyBoard, regArr, 'col')
    result = checkWillWin(result, edges[1], chessboardLen, emptyBoard, regArr, 'right')
    result = checkWillWin(result, edges[2], chessboardLen, emptyBoard, regArr, 'left')
    return typeof(result) === 'boolean' ? [] : uniq(result)
}

module.exports = howWin
