let lockDivArr = [];
var winner;



function gameplayFunc(divNum) {
    return {
        divNum,

        start: function (i) {
            this.divNum = i;
            checks[i].onmousedown = () => {
                this.decide();
                document.getElementById("sfx-click").play();
            }

            checks[i].onmouseup = () => {

                this.setClass().lock(i);

                this.announceItemName().winnerSelection();
            }


        },
        decide: function () {
            if (checks[this.divNum].className == `check circleTurn`) {

                this.draw(this.divNum).circle();


            } else if (checks[this.divNum].className == `check crossTurn`) {
                this.draw(this.divNum).cross();
            }

            for (let j = 0; j < document.querySelectorAll(".locked").length; j++) {
                document.querySelectorAll(".locked")[j].onclick = () => {
                    
                    
                    
                    insertErrorPopUp(); // staying at index.html
                    
                }

            }


        },
        draw: function (divNum) {
            return {
                divNum,
                circle: function () {
                    let n = this.divNum;

                    checks[n].innerHTML = '<div class="circle"></div>';

                    gameplayFunc().setClass().cross();
                    gameplayFunc().announceItemName().itemIsCircle(this.divNum);
                },

                cross: function () {
                    let n = this.divNum;
                    checks[n].innerHTML = '<div class="cross"><div class = "first_line"></div><div class = "second_line"></div></div>';

                    gameplayFunc().setClass().Circle();
                    gameplayFunc().announceItemName().itemIsCross(this.divNum);
                }
            }
        },

        setClass: function () {
            return {

                Circle: function () {
                    for (let j = 0; j < checks.length; j++) {
                        checks[j].setAttribute("Class", "check circleTurn")

                    }
                },

                cross: function () {
                    for (let j = 0; j < checks.length; j++) {
                        checks[j].setAttribute("Class", "check crossTurn")
                    }

                },

                lock: function (n) {
                    lockDivArr.push(n)
                    for (let j = 0; j < lockDivArr.length; j++) {
                        checks[lockDivArr[j]].classList.add("locked")

                    }

                }
            }
        },


        announceItemName: function () {
            return {

                itemIsCircle: function (n) {
                    itemCircleArr.push(`n${n}`)

                },
                itemIsCross: function (n) {
                    itemCrossArr.push(`n${n}`)

                },

                winnerSelection: function () {



                    for (let k = 0; k < setContainer.length; k++) {
                        interSectionForCircle = itemCircleArr.filter(x => setContainer[k].includes(x))
                        interSectionForCross = itemCrossArr.filter(y => setContainer[k].includes(y))

                        if ((interSectionForCircle.sort()).join() === setContainer[k].join()) {
                            winner = "Circle Won"

                        } else if ((interSectionForCross.sort()).join() === setContainer[k].join()) {
                            winner = "Cross Won";

                        }

                    }

                    gameplayFunc().showWinner(winner)

                }
            }


        },


        showWinner: function (winnerName) {
            switch (winnerName) {
                case 'Circle Won':                    
                    this.finishingBeauty().circle();                    
                    break;
                case 'Cross Won':                    
                    this.finishingBeauty().cross();
                    break;
                default:
                    resultBox.innerHTML = "Match Draw";
                    this.finishingBeauty().MatchDraw();
                    break;
            }
        },


        finishingBeauty:function(){
            
            return{
                circle:()=>{
                    resultBox.innerHTML = "Circle Player Won";
                    resultBox.style.display = 'block'
                    document.querySelector(".rematch").style.display = 'block'
                    document.querySelector("#checkContainer").style.transform = "scale(0)"
                    document.querySelector(".reset").style.display = 'none'
                    document.querySelector("#afterGame").style.transform="scale(1)"
                },

                cross:()=>{
                    resultBox.innerHTML = "Cross Player Won";
                    resultBox.style.display = 'block'
                    document.querySelector(".rematch").style.display = 'block'
                    document.querySelector("#checkContainer").style.transform = "scale(0)"
                    document.querySelector(".reset").style.display = 'none'
                    document.querySelector("#afterGame").style.transform="scale(1)"
                },

                MatchDraw:function(){
                    let clickCounter = document.querySelectorAll(".locked").length;

                    if (clickCounter == 9) {
                        resultBox.innerHTML = "Match Draw";
                    resultBox.style.display = 'block'
                    document.querySelector(".rematch").style.display = 'block'
                    document.querySelector("#checkContainer").style.transform = "scale(0)"
                    document.querySelector(".reset").style.display = 'none'
                    document.querySelector("#afterGame").style.transform="scale(1)"
                    }
                }
            }
            
        }
    }
}

