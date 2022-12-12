// 팝업창


const loadDay = new Date();
const thisMinutes = loadDay.getMinutes()
const thisDay = loadDay.getDate();
console.log(thisMinutes)

const v_btn = document.querySelector(".v1")
const v_txt = document.querySelector(".v2")

v_btn.addEventListener ("click", function (e){
  v_btn.classList.toggle("v_checked")
  localStorage.setItem('today', thisDay);
  localStorage.setItem('Minutes', thisMinutes);
})
v_txt.addEventListener ("click", function (e){
  v_btn.classList.toggle("v_checked")
  localStorage.setItem('today', thisDay);
  localStorage.setItem('Minutes', thisMinutes);
})


const x_btn = document.querySelector(".x_btn")
const conf_btn = document.querySelector(".conf_btn")
const layer = document.querySelector(".layer_bg")
const popup = document.querySelector(".layer_popup")

x_btn.addEventListener("click", function (e) {
  layer.className="layer_off"
  popup.className="layer_off"
})
conf_btn.addEventListener("click", function (e) {
  layer.className="layer_off"
  popup.className="layer_off"
})

// 오늘 하루 다시 보지 않기
// if (localStorage.getItem('today') == thisDay) {
//   layer.className="layer_off"
//   popup.className="layer_off"
// }


// 1분간 다시 보지 않기
if (localStorage.getItem('Minutes') == thisMinutes) {
  layer.className="layer_off"
  popup.className="layer_off"
}





// 헤더 버튼

// const checked1 = document.querySelector(".snb > li:nth-child(1)")
// const checked2 = document.querySelector(".snb > li:nth-child(2)")
// const checked3 = document.querySelector(".snb > li:nth-child(3)")


// checked1.addEventListener("click", function(e) {
//   checked1.className="checked"
//   checked2.className=""
//   checked3.className=""
// })

// checked2.addEventListener("click", function(e) {
//   checked1.className=""
//   checked2.className="checked"
//   checked3.className=""
// })

// checked3.addEventListener("click", function(e) {
//   checked1.className=""
//   checked2.className=""
//   checked3.className="checked"
// })


const checked = document.querySelectorAll(".snb > li")

checked.forEach(el => {
  el.addEventListener("click", () => {
    checked.forEach(el => {
      el.className = ""
    })
    el.className = "checked"
  })
})








// 스크롤 이벤트

const pop1 = document.querySelector(".pop_1 > p")
const pop2 = document.querySelector(".pop_2 > p")

document.addEventListener('scroll', function(e){
  if(window.pageYOffset > 400) {
    pop1.className="in"
  }
  else if (window.pageYOffset < 200) {
    pop1.className="out"
  }
})

document.addEventListener('scroll', function(e){
  if(window.pageYOffset > 1000) {
    pop2.className="in"
  }
  else if (window.pageYOffset < 500) {
    pop2.className="out"
  }
})



const itemBox = document.querySelectorAll("#box_item1, #item_box2 > div")



for (let i = 0; i < itemBox.length; i++) {
  document.addEventListener("scroll", function (e) {
    if (window.pageYOffset > 500) {
      setTimeout(function () {
        itemBox[i].style.opacity = "1";
        itemBox[i].style.transition = "all 0.8s ease-out";
        itemBox[i].style.bottom = "0px";
      }, 100 * (i + (i + 2)));
    } else if (window.pageYOffset < 100) {
      itemBox[i].style.opacity = "0";
      itemBox[i].style.transition = "all 0.3s ease-out";
      itemBox[i].style.bottom = "-50px";
    }
  });
}




const videoBox = document.querySelectorAll("#video_box > li")

for (let i = 0; i < videoBox.length; i++) {
  document.addEventListener('scroll', function (e) {
      if (window.pageYOffset > 1200) {
        setTimeout(function () {
          videoBox[i].style.opacity = "1";
          videoBox[i].style.transition = "all 1.2s ease-out";
          videoBox[i].style.left = "-200px";
        }, 100*(i+(i+1)))
      } else if (window.pageYOffset < 800) {
        videoBox[i].style.opacity = "0";
        videoBox[i].style.transition = "all 0.2s ease-out";
        videoBox[i].style.left = "0px";
      }
  });
}


const rockey = document.querySelector("#rockey")

document.addEventListener('scroll', function(e){
  if(window.pageYOffset > 2300) {
    rockey.className="in"
  }
  else if (window.pageYOffset < 1600) {
    rockey.className="out"
  }
})


const idolBox = document.querySelectorAll(".content_block1 > ul > li")

for (let i = 0; i < idolBox.length; i++) {
  document.addEventListener('scroll', function (e) {
      if (window.pageYOffset > 3000) {
        setTimeout(function () {
          idolBox[i].style.opacity = "1";
          idolBox[i].style.transition = "all 1.2s ease-out";
          idolBox[i].style.margin = "80px 0 0 0";
        }, 200*(i+2))
      } else if (window.pageYOffset < 2400) {
        idolBox[i].style.opacity = "0";
        idolBox[i].style.transition = "all 1.2s ease-out";
        idolBox[i].style.margin = "140px 0 0 0";
      }
  });
}



// 슬라이더 메뉴
const items = document.querySelectorAll("#slide > ul")
const prevBtn = document.querySelector(".prev_btn > button")
const nextBtn = document.querySelector(".next_btn > button")

let intervalId = 0
let count = 0



    function findIndex() {
        for (let i = 0; i < items.length; i++) {
            if (items[i].getAttribute("class") === "on") return i
        }
    }

    function slide() {
        let prev = count === 0 ? (items.length - 1) : (count - 1)
        items[count].className = "on"
        items[prev].className = "off"

        for (let i = 0; i < items.length; i++) {
            if (count !== i && prev !== i) { 
                items[i].className = "out"
            }
        }

        if (++count === 3) count = 0
    }
    slide()



    function prevHandler(e) {
        const current = findIndex()
        const index = current === 0 ? (items.length - 1) : (current - 1)
        items[current].className = "out"
        items[index].className = "on"

        for (let i = 0; i < items.length; i++) {
            if (current !== i && index !== i) {
                items[i].className = "off"
                const slide = document.querySelector("slide")
            count = index
            }
        }
    }

    function nextHandler(e) {
        const current = findIndex()
        const index = current === items.length - 1 ? 0 : current + 1
        items[current].className = "off"
        items[index].className = "on"

        for (let i = 0; i < items.length; i++) {
            if (current !== i && index !== i) { 
                items[i].className = "out"
            }
        count = index
        }
    }

    prevBtn.addEventListener("click", prevHandler)
    nextBtn.addEventListener("click", nextHandler)



// footer 토글 버튼

const toggleBtn = document.querySelector("#btn_toggle")
toggleBtn.addEventListener ("click", function (e){
  toggleBtn.classList.toggle("on")
})


// 챗봇

const chatbot = document.querySelector("#chat_bot > .bot_icon")
const botPop = document.querySelector("#chat_bot > .bot_popup")


chatbot.addEventListener('click', function (e) {
  chatbot.classList.toggle("on")
  botPop.classList.toggle("on")
})


const quick = document.querySelector("#quick_btn")

document.addEventListener('scroll', function(e){
  if(window.pageYOffset > 100) {
    quick.className="on"
  }
  else if (window.pageYOffset < 100) {
    quick.className=""
  }
})

