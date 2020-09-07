alert("hello")
const line = document.querySelector('#line')
const item = document.querySelector('nav a')

function indicator(e){
	line.style.left = e.offsetLeft + 'px'
	line.style.width = e.offsetWidth + 'px'
}

item.forEach(link =>{
	link.addEventListener('click', (e)=>{
		indicator(e.target)
	})
})