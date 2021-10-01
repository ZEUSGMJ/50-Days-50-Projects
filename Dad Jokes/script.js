const jokeElement = document.getElementById('joke')
const btn = document.getElementById('jokeBtn')

generateJoke()

btn.addEventListener('click', generateJoke)


async function generateJoke() {

    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    const result = await fetch('https://icanhazdadjoke.com', config)
    const data = await result.json()
    
    const { status, joke } = data

    if (status == 200) {
        return jokeElement.innerText = joke
    } else {
        return jokeElement.innerText = 'Hmmmm...This shouldn\'t have happened.\n Try again later'
    }
    
}