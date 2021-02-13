// using jquery
$(()=>{
    // cache the dom.
    // main color boxes.
    const $box1 = $("#box1")
    const $box2 = $("#box2")// top left 1, top right 2
    const $box3 = $("#box3")
    const $box4 = $("#box4")// bot left 3, bot left  4
    const $gameDiv = $(".easy-mode")

    const $test = $(".test")// delete this later

    // player ids.
    const $friends1 = $("#p1")
    const $friends2 = $("#p2")
    const $friends3 = $("#p3")
    const $friends4 = $("#p4")

    // modals for game prep.
    const $modal1 = $(".modal")
    const $modal2 = $(".modal2")

    // miss total
    const $miss1 = $("#miss1")
    const $miss2 = $("#miss2")
    const $miss3 = $("#miss3")
    const $miss4 = $("#miss4")

    // hit total
    const $hit1 = $("#hit1")
    const $hit2 = $("#hit2")
    const $hit3 = $("#hit3")
    const $hit4 = $("#hit4")


    const $play = $(".start-button")// start button
    const $quit = $(".give-up")// quit button

    // The winning color choses from an winArr
    const $selector = $('.color')

    let playerNum = 0
    let winArr = []
    let chosenColor = ''
    let hit = 0
    let miss = 0
    let setTimer

    $hit1.text(0)
    $hit2.text(0)
    $hit3.text(0)
    $hit4.text(0)

    $miss1.text(0)
    $miss2.text(0)
    $miss3.text(0)
    $miss4.text(0)

    playerOneDone = false
    playerTwoDone = false
    playerThreeDone = false
    playerFourDone = false

    // chose number of players.
    $friends1.on('click', ()=>{
        playerNum = 1
        $modal1.css('display', 'none')
        return playerNum
    })

    $friends2.on('click', ()=>{
        playerNum = 2
        $modal1.css('display', 'none')
        return playerNum
    })

    $friends3.on('click', ()=>{
        playerNum = 3
        $modal1.css('display', 'none')
        return playerNum
    })

    $friends4.on('click', ()=>{
        playerNum = 4
        $modal1.css('display', 'none')
        return playerNum
    })

    // create array of the div boxes. For easier function use.
    const $divArr = [$box1,$box3,$box2,$box4]
    // const allColors = ['blue','red','lime','purple','yellow', 'cyan', 'green', 'white','aqua','fuchsia']
    const allColors = ['green','red','yellow','blue','purple','white','black','orange']

    const getBoxIndex = () => {
        let randIndex = Math.floor(Math.random() * ($divArr.length))
        return randIndex
    }

    // // get a random color from all colors array
    // const getColorIndex = () => {
    //     let randColorIndex = Math.floor(Math.random() * (allColors.length))
    //     return randColorIndex
    // }

    // get a random color from color list every time its called.
    const colorFunc = () => {
        let rci1 = Math.floor(Math.random() * (allColors.length))
        let firCol = allColors[rci1]
        return firCol
    }

    // clear css colors, background, font, and text clors
    const clearCss = () => {
        for (let i = 0; i < $divArr.length; i++) {
            $divArr[i].css('color', 'black')
            $divArr[i].css('background', 'white')
            $divArr[i].text('') // this may need changing
            $divArr[i].css('border-color', 'black')
        }
        $selector.text('Cleared')
        $selector.css('color','white')
    }

    // style each choice box. and chose one color to be the winning color
    const choiceBoxesColorFill = (index) => {
        let firstCol = colorFunc()// random color 1
        let secondCol = colorFunc()// random color 2
        let thirdCol = colorFunc()// random color 3
        let fourthCol = colorFunc()// random color 4
        let fifthCol = colorFunc()// random color 5
        // style each box.
        $selector.css('color', fifthCol)
        $divArr[index].css('background', secondCol)
        $divArr[index].css('color', thirdCol)
        $divArr[index].css('border-color', fourthCol)
        $divArr[index].text(firstCol)
        winArr.push(firstCol)
        return winArr
    }

    // chose the winning color
    const choseWinningColor = () => {
        chosenColor = winArr[getBoxIndex()]
        $selector.text(chosenColor)
        return chosenColor
    }

    const fillBoxCss = () => {
        winArr = []
        choiceBoxesColorFill(0)
        choiceBoxesColorFill(2)
        choiceBoxesColorFill(1)
        choiceBoxesColorFill(3)
        return winArr // chose win color
    }

    const removeClick = () =>{
        $box1.off()
        $box2.off()
        $box3.off()
        $box4.off()
    }

    const returnClickedElem = (index) => {// player 1  this function works!
        $divArr[index].on('click', ()=>{
            if ($divArr[index].text() === $selector.text()) {
                hit++
                $hit1.text(hit)
                if (hit > 9) {
                    clearCss()
                    alert("You won!")
                    removeClick()
                    playerOneDone = true
                    clearInterval(setTimer)
                    return playerOneDone
                }
                return hit
            } else {
                miss++
                $miss1.text(miss)
                if (miss > 9) {
                    clearCss()
                    alert("You lost!")
                    playerOneDone = true
                    removeClick()
                    clearInterval(setTimer)
                    return playerOneDone
                }
                return miss
            }
            playerOneDone = true
            console.log('player one done');
            console.log(playerOneDone);
            return playerOneDone
        })
    }

    const returnClickedElem2 = (index) => {// player 2
        $divArr[index].on('click', ()=>{
            if ($divArr[index].text() === $selector.text()) {
                hit++
                $hit2.text(hit)
                if (hit > 9) {
                    clearCss()
                    alert("You won!")
                    removeClick()
                    clearInterval(setTimer)
                    playerTwoDone = true
                    return playerTwoDone
                }
                return hit
            } else {
                miss++
                $miss2.text(miss)
                if (miss > 9) {
                    clearCss()
                    alert("You lost!")
                    removeClick()
                    clearInterval(setTimer)
                    playerTwoDone = true
                    return playerTwoDone
                }
                return miss
            }
            console.log('player two done');
            console.log(playerTwoDone);
            playerTwoDone = true
            return playerTwoDone
        })
    }

    const returnClickedElem3 = (index) => {// player 3
        $divArr[index].on('click', ()=>{
            if ($divArr[index].text() === $selector.text()) {
                hit++
                $hit3.text(hit)
                if (hit > 9) {
                    clearCss()
                    alert("You won!")
                    removeClick()
                    clearInterval(setTimer)
                    playerThreeDone = true
                    return playerThreeDone
                }
                return hit
            } else {
                miss++
                $miss3.text(miss)
                if (miss > 9) {
                    clearCss()
                    removeClick()
                    clearInterval(setTimer)
                    alert("You lost!")
                    playerThreeDone = true
                    return playerThreeDone
                }
                return miss
            }
            playerThreeDone =  true
            return playerThreeDone
        })
    }

    const returnClickedElem4 = (index) => {// player 4
        $divArr[index].on('click', ()=>{
            if ($divArr[index].text() === $selector.text()) {
                hit++
                $hit4.text(hit)
                if (hit > 9) {
                    clearCss()
                    removeClick()
                    clearInterval(setTimer)
                    alert("You won!")
                }
                return hit
            } else {
                miss++
                $miss4.text(miss)
                if (miss > 9) {
                    clearCss()
                    removeClick()
                    clearInterval(setTimer)
                    alert("You lost!")
                }
                return miss
            }
            playerFourDone = true
            return playerFourDone
        })
    }

    const beginTimer = () => {
        // chang the color boxes every 2.5 seconds.
        setTimer = setInterval(()=>{
            fillBoxCss()
            choseWinningColor()
            console.log("2.5 seconds.");
        }, 2250)
        setTimer // origional call
        return setTimer
        let round = setTimeout(()=> {
            clearInterval(setTimer)
            clearCss()
            return setTimer
        },30000) //------------------------------------------------
        console.log("this should end");
        round
    }

    $('.begin').on('click', ()=>{
        $(".modal1").css('display','none')
    })

    $(".player1").on('click', ()=> {
        console.log('player 1 going');
        fillBoxCss()
        beginTimer()
        hit = 0
        miss = 0
        returnClickedElem(0)
        returnClickedElem(1)
        returnClickedElem(2)
        returnClickedElem(3)
        alert('player 1 go')
    })

    $(".player2").on('click', ()=> {
        console.log("player 2 going");
        fillBoxCss()
        beginTimer()
        hit = 0
        miss = 0
        returnClickedElem2(0)
        returnClickedElem2(1)
        returnClickedElem2(2)
        returnClickedElem2(3)
        alert('player 2 go')
    })

    $(".player3").on('click', ()=> {
        console.log("player 3 going");
        fillBoxCss()
        beginTimer()
        hit = 0
        miss = 0
        returnClickedElem3(0)
        returnClickedElem3(1)
        returnClickedElem3(2)
        returnClickedElem3(3)
        alert('player 3 go')
    })

    $(".player4").on('click', ()=> {
        console.log("player 4 going");
        fillBoxCss()
        beginTimer()
        hit = 0
        miss = 0
        returnClickedElem4(0)
        returnClickedElem4(1)
        returnClickedElem4(2)
        returnClickedElem4(3)
        alert('player 4 go')
    })

})
