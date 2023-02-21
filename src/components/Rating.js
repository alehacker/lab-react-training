const Rating = ({children}) =>{

    const empty = '☆'
    const full = '★'

    let string = full.repeat(Math.round(children)) + empty.repeat(5-Math.round(children))

    return(
        <div>
            <p>{string}</p>
        </div>
    )

}

export default Rating