const Random = ({ min, max }) => {
    return (
        <div id="random">
        <p>Random value between {min} and {max} {'=>'} {String(Math.round(Math.random() * (max-min) + min))}</p>
        
        </div>
    )
}

export default Random