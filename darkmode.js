const header = document.querySelector("header")
const main = document.querySelector("main")
const toggleModeButton = document.querySelector("#toggler")

toggleModeButton.addEventListener("click", function (){

    if(toggleModeButton.classList.contains("dark-mode-btn") ){
        // we are in dark mode---- change to light mode
        toggleModeButton.classList.remove("dark-mode-btn")
        header.classList.remove("dark-header")
        main.classList.remove("dark-main")
        toggleModeButton.textContent = "Dark Mode"
    }else{
        toggleModeButton.classList.add("dark-mode-btn")
        header.classList.add("dark-header")
        main.classList.add("dark-main")
        toggleModeButton.textContent = "Light Mode"
    }
})

// js allows us to manipulat element's text content, inner html, properties(class, id, name, src,href ... ), handle events

// Build an image slider with html css and javascript --- 

// const users = ["albert", "vic", "jane", "alvin", "george","angel"]
const users = [
    "David",
    "Peter",
    "Joseph",
    "Samuel",
    "Paul",
    "John",
    "James",
    "Michael",
    "Daniel",
    "Francis",
    "Charles",
    "Emmanuel",
    "Stephen",
    "Jeremiah",
    "Elijah",
    "Joshua",
    "Caleb",
    "Benjamin",
    "Matthew",
    "Mark",
    "Luke",
    "Thomas",
    "Andrew",
    "Philip",
    "Bartholomew",
    "Thaddeus",
    "Simon",
    "Judas",
    "Jacob",
    "Isaac",
    "Abraham",
    "Moses",
    "Aaron",
    "Noah",
    "Jonah",
    "Ezekiel",
    "Jeremiah",
    "Isaiah",
    "Daniel",
    "Hosea",
    "Joel",
    "Amos",
    "Obadiah",
    "Jonah",
    "Micah",
    "Nahum",
    "Habakkuk",
    "Zephaniah",
    "Haggai",
    "Zechariah",
    "Malachi",
    "Mugo",
    "Kamau",
    "Mwangi",
    "Karanja",
    "Njoroge",
    "Ngugi",
    "Mbugua",
    "Kimeu",
    "Wambugu",
    "Mary",
    "Elizabeth",
    "Sarah",
    "Ruth",
    "Hannah",
    "Rachel",
    "Leah",
    "Rebecca",
    "Esther",
    "Deborah",
    "Abigail",
    "Priscilla",
    "Dorcas",
    "Lydia",
    "Eunice",
    "Lois",
    "Martha",
    "Mary Magdalene",
    "Joanna",
    "Salome",
    "Elizabeth",
    "Anna",
    "Rhoda",
    "Julia",
    "Tryphena",
    "Tryphosa",
    "Persis",
    "Nympha",
    "Chloe",
    "Phoebe",
    "Wambui",
    "Wanjiru",
    "Wangui",
    "Njeri",
    "Muthoni",
    "Njoki",
    "Nduta",
    "Wangechi",
    "Nyambura",
    "Wanjiku",
    "Wanja",
    "Waithira",
    "Wamaitha",
    "Wangeci",
    "Wambura",
    "Wangechi",
    "Wanjiru",
    "Wanja",
    "Waithira",
    "Wamaitha"
  ];


function renderNames(names){
    document.querySelector(".names").innerHTML = ""
    names.forEach(name=>{
        let p = document.createElement("a")
        p.textContent = name
        p.setAttribute("href", `https://eldohub.co.ke/student/${name}`)
        document.querySelector(".names").append(p)
    })

}
renderNames(users)
document.getElementById("search").addEventListener("keyup", ()=>{
    let searchWord = document.getElementById("search").value
    let newNames = users.filter( name => name.toLowerCase().startsWith(searchWord.toLowerCase()) )
    renderNames(newNames)
})