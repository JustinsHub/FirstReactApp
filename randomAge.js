const RandomAge = ({age}) =>{
    const idx = Math.floor(Math.random() * age.length)
    const randomAge = age[idx]
    return (
        <ul>
            <li>Random Animal Age:{randomAge}</li>
        </ul>
    )
}