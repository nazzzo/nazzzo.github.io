const v_btn = document.querySelector(".v1")
const v_txt = document.querySelector(".v2")

v_btn.addEventListener ("click", function (e){
  v_btn.classList.toggle("v_checked")
})
v_txt.addEventListener ("click", function (e){
  v_btn.classList.toggle("v_checked")
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





const checked1 = document.querySelector(".snb > li:nth-child(1)")
const checked2 = document.querySelector(".snb > li:nth-child(2)")
const checked3 = document.querySelector(".snb > li:nth-child(3)")


checked1.addEventListener("click", function(e) {
  checked1.className="checked"
  checked2.className=""
  checked3.className=""
})

checked2.addEventListener("click", function(e) {
  checked1.className=""
  checked2.className="checked"
  checked3.className=""
})

checked3.addEventListener("click", function(e) {
  checked1.className=""
  checked2.className=""
  checked3.className="checked"
})



// const checked = document.querySelectorAll('.snb > li');
// checked.forEach( (li) => {
//   li.addEventListener('click', function(e){
//     li.className="checked"
//   })
// })



// const elementList = document.querySelectorAll(".snb > li");
// elementList.forEach((e, i, arr) => {
// 	e.addEventListener("click", (event) => {
//     	let target = event.target;
//     	arr.forEach((e) => e.className = "");
//         target.className = "checked";
//     })
// })




const gnbPop =document.querySelectorAll(".gnb>li")








const pop1 = document.querySelector(".pop_1 > p")
const pop2 = document.querySelector(".pop_2 > p")


const item1 = document.querySelector("#item_box1 > #box_item1")
const item2 = document.querySelector("#item_box2 > #box_item2")
const item3 = document.querySelector("#item_box2 > #box_item3")
const item4 = document.querySelector("#item_box2 > #box_item4")
const item5 = document.querySelector("#item_box2 > #box_item5")


const vItem1 = document.querySelector("#video_item1")
const vItem2 = document.querySelector("#video_item2")
const vItem3 = document.querySelector("#video_item3")

const rockey = document.querySelector("#rockey")

const idol1 = document.querySelector("#idol_1")
const idol2 = document.querySelector("#idol_2")
const idol3 = document.querySelector("#idol_3")



document.addEventListener('scroll', function(e){
  if(window.pageYOffset > 400) {
    pop1.className="h1_in"
  }
  else if (window.pageYOffset < 200) {
    pop1.className="h1_out"
  }
  e.stopPropagation()
})




document.addEventListener("scroll", function (e) {
  if (window.pageYOffset > 400) {
    setTimeout(function(){
      item1.className = "in";
    },100)
    setTimeout(function(){
      item2.className = "in";
    },300)
    setTimeout(function(){
      item3.className = "in";
    },500)
    setTimeout(function(){
    item4.className = "in";
  },700)
    setTimeout(function(){
    item5.className = "in";
  },900)

  } else if (window.pageYOffset < 300) {
    item1.className = "out";
    item2.className = "out";
    item3.className = "out";
    item4.className = "out";
    item5.className = "out";
  }
  e.stopPropagation()
});



document.addEventListener('scroll', function(e){
  if(window.pageYOffset > 1000) {
    pop2.className="h1_in"
  }
  else if (window.pageYOffset < 500) {
    pop2.className="h1_out"
  }
  e.stopPropagation()
})



document.addEventListener('scroll', function(e){
  if (window.pageYOffset > 1000) {
    setTimeout(function(){
      vItem1.className = "in";
    },100)
    setTimeout(function(){
      vItem2.className = "in";
    },300)
    setTimeout(function(){
      vItem3.className = "in";
    },500)
  } else if (window.pageYOffset < 500) {
    vItem1.className = "out";
    vItem2.className = "out";
    vItem3.className = "out";
  }
  e.stopPropagation()
}); 



document.addEventListener('scroll', function(e){
  if(window.pageYOffset > 2500) {
    rockey.className="in"
  }
  else if (window.pageYOffset < 1600) {
    rockey.className="out"
  }
  e.stopPropagation()
})


document.addEventListener('scroll', function(e){
  if (window.pageYOffset > 3000) {
    setTimeout(function(){
      idol1.className = "in";
    },200)
    setTimeout(function(){
      idol2.className = "in";
    },400)
    setTimeout(function(){
      idol3.className = "in";
    },700)
  } else if (window.pageYOffset < 2400) {
    idol1.className = "out";
    idol2.className = "out";
    idol3.className = "out";
  }
  e.stopPropagation()
}); 



const toggleBtn = document.querySelector("#btn_toggle")
toggleBtn.addEventListener ("click", function (e){
  toggleBtn.classList.toggle("on")
})


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