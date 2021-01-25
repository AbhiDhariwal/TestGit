let main = document.body
let mydiv = document.createElement("div")
mydiv.setAttribute("style","width:100%;height:auto;")
mydiv.setAttribute("class",'container')


let header_div = document.createElement("div")
header_div.setAttribute("class",'container')
header_div.setAttribute("style",'text-align:center')


let header = document.createElement("h1")
header.setAttribute('style',"color:black;font-family:times-new-roman;margin-top:20px;font-size:50px;")
header.innerHTML = "THE PERTINET TIMES"
header_div.appendChild(header)

let nav_bar = document.createElement("nav")
nav_bar.setAttribute('class','navbar navbar-expand-lg navbar-light bg-light')
nav_bar.setAttribute("style","border-top:1px solid black;border-bottom:1px solid black")


let navbar_button = document.createElement("button")
navbar_button.setAttribute("class","navbar-toggler")
navbar_button.setAttribute("type","button")
navbar_button.setAttribute("data-toggle","collapse")
navbar_button.setAttribute("data-target","#navbar")
navbar_button.setAttribute("aria-controls","navbar")
nav_bar.appendChild(navbar_button)


let navbar_button_span1 = document.createElement("span")
navbar_button_span1.setAttribute("class","navbar-toggler-lcon")
navbar_button.appendChild(navbar_button_span1)

let nav_bar_div = document.createElement("div") 
nav_bar_div.setAttribute("class","cottapse navbar-collapse justify-content-center") 
nav_bar_div.setAttribute("id","navbar") 


let nav_ul = document.createElement("u1") 
nav_ul.setAttribute("class","navbar-nav")

 
let li1 = document.createElement("li") 
li1.setAttribute("class","nav-item") 
let a1 = document.createElement("a") 
a1.setAttribute("class","nav-link btn") 
a1.setAttribute("style","color:black;") 
a1.innerText = "HOME" 
a1.setAttribute("id","home") 
a1.addEventListener("click",function(){ 
processData("home") 
})

li1.appendChild(a1)
nav_ul.appendChild(li1)

let li2 = document.createElement("li") 
li2.setAttribute("class","nav-item") 
let a2 = document.createElement("a") 
a2.setAttribute("class","nav-link btn") 
a2.setAttribute("style","color:black;") 
a2.innerText = "WORLD" 
a2.setAttribute("id","world") 
a2.addEventListener("click",function(){ 
	processData("world") 
})

li2.appendChild(a2)
nav_ul.appendChild(li2)

let li3 = document.createElement("li") 
li3.setAttribute("class","nav-item") 
let a3 = document.createElement("a") 
a3.setAttribute("class","nav-link btn") 
a3.setAttribute("style","color:black;") 
a3.innerText = "POLITICS" 
a3.setAttribute("id","politics") 
a3.addEventListener("click",function(){ 
	processData("politics") 
})

li3.appendChild(a3)
nav_ul.appendChild(li3)

let li4 = document.createElement("li") 
li4.setAttribute("class","nav-item") 
let a4 = document.createElement("a") 
a4.setAttribute("class","nav-link btn") 
a4.setAttribute("style","color:black;") 
a4.innerText = "TECHNOLOGY" 
a4.setAttribute("id","technology") 
a4.addEventListener("click",function(){ 
	processData("technology") 
})

li4.appendChild(a4)
nav_ul.appendChild(li4)

let li5 = document.createElement("li") 
li5.setAttribute("class","nav-item") 
let a5 = document.createElement("a") 
a5.setAttribute("class","nav-link btn") 
a5.setAttribute("style","color:black;") 
a5.innerText = "SCIENCE" 
a5.setAttribute("id","science") 
a5.addEventListener("click",function(){ 
	processData("science") 
})

li5.appendChild(a5)
nav_ul.appendChild(li5)


let li6 = document.createElement("li") 
li6.setAttribute("class","nav-item") 
let a6 = document.createElement("a") 
a6.setAttribute("class","nav-link btn") 
a6.setAttribute("style","color:black;") 
a6.innerText = "HEALTH" 
a6.setAttribute("id","health") 
a6.addEventListener("click",function(){ 
	processData("health") 
})

li6.appendChild(a6)
nav_ul.appendChild(li6)

let li7 = document.createElement("li") 
li7.setAttribute("class","nav-item") 
let a7 = document.createElement("a") 
a7.setAttribute("class","nav-link btn") 
a7.setAttribute("style","color:black;") 
a7.innerText = "SPORTS" 
a7.setAttribute("id","SPORTS") 
a7.addEventListener("click",function(){ 
	processData("sports") 
})

li7.appendChild(a7)
nav_ul.appendChild(li7)






nav_bar_div.appendChild(nav_ul)


let main_div = document.createElement("div")
main_div.setAttribute("class",'container')

nav_bar.appendChild(nav_bar_div)
mydiv.appendChild(header_div)
mydiv.appendChild(nav_bar)


main.appendChild(header_div)
main.appendChild(mydiv)
main.appendChild(main_div)


let api_key = "1S8DwrvmOfWWF9DMUSyjKgarUFhZmOlF"

async function getData(url){
	let data = await fetch(url)
	let arr = await data.json()
	return arr
}

async function processData(section){
	main_div.innerHTML = ""
	let arr = await getData(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${api_key}`)
	data = arr["results"]
	console.log(data)
	for(i of data){
		var container = document.createElement("div")
		container.setAttribute("class",'container')
		container.setAttribute("style","margin-top:30px;width:100%;")
		
		var row = document.createElement("div")
		row.setAttribute("class","row")
		
		var card = document.createElement("div")
		card.setAttribute("class","card")
		card.setAttribute("style","width:100%;")
		
		var left = document.createElement("div")
		left.setAttribute("class","col-md-8")
		
		var sec_card = document.createElement("div")
		sec_card.setAttribute("class","sectioncard")
		sec_card.innerHTML = section.toUpperCase()
		
		var title_card = document.createElement("div")
		title_card.setAttribute("class","titlecard")
		title_card.innerHTML = i["title"]
		
		var date_card = document.createElement("div")
		date_card.setAttribute("class","datecard")
		date_card.innerHTML = i["published_date"]
		
		var abstract_card = document.createElement("div")
		abstract_card.setAttribute("class","abstractcard")
		abstract_card.innerHTML = i["abstract"]
		
		var continuereading = document.createElement("div")
		continuereading.setAttribute("class", "continuereading")
		continuereading.setAttribute("href",`${i["url"]}`)
		continuereading.innerHTML = "Continue Reading"
		
		left.append(sec_card,title_card,date_card,abstract_card,continuereading)
		
		var right = document.createElement("div")
		right.setAttribute("class","col-md-4")
		right.setAttribute("style","text-align:right;")
		
		var thumb_image = document.createElement("img")
		thumb_image.setAttribute("class","img-thumbnail")
		thumb_image.setAttribute("src",`${i["multimedia"][0]["url"]}`)
		thumb_image.setAttribute("style","width:300;height:150px;")
		
		right.append(thumb_image)
		
		var innerrow = document.createElement("div")
		innerrow.setAttribute("class","row card-body")
		
		innerrow.append(left,right)
		card.append(innerrow)
		row.append(card)
		container.append(row)
		
		main_div.append(container)
	}
}

document.addEventListener("DOMContentLoaded",function(event){
	document.getElementById("home").click()
})