import { useState } from "react"


const Greetings = ({ lang, children}) => {

    const [ greeting, setGreeting ] = useState('')

    let greetingSpan = ''

        switch(lang) {
            case 'de':
                greetingSpan = 'Hallo'
                break;
            case 'fr':
                greetingSpan = 'Bonjour'
                break;
    
            case 'es':
                greetingSpan = 'Hola'
                break;
    
            case 'en':
                greetingSpan = 'Hell0'
                break;
            
            default:
                greetingSpan = 'Unkown Language'
            break;
    
        }       


    return (
        <div id='greeting'>
            <p>{greetingSpan} {children}</p>
        </div>
    )
}


export default Greetings







