const button = document.querySelector('button')
button.addEventListener('click', albumSearch)

async function albumSearch(){
    const albumName = document.querySelector('input').value
    try{
        const response = await fetch(`http://localhost:2000/api/${albumName}`)
        const data = await response.json()
        console.log(data)
    }catch(err){
        console.log(err)
    }
}