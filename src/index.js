lucide.createIcons()

const pinwheel  = document.querySelector("svg.pinwheel")
const copyright = document.querySelector("footer small")

const date = new Date()
const year = date.getFullYear()

copyright.innerHTML = copyright.innerHTML.replace(/\b\d{4}\b/, year)

const width  = window.innerWidth  / 2
const height = window.innerHeight / 2.5

window.onload = () => this.addEventListener("mousemove", moving, false)
const moving  = ({ clientX, clientY }) =>
  pinwheel.setAttribute("transform", `translate(${clientX - width}, ${clientY - height})`)
