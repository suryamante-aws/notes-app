import {useState} from 'react'
const Header = () => {

    const [mode, setMode] = useState(true)

    const changeTheme = () =>{
        if(mode){
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            setMode(false)
        }else{
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
            setMode(true)
        }
    }

    return (
        <div className='header'>
            <h2>Notes-App</h2>
            <button className='save-button toggle-button'
            onClick={changeTheme}>
                Toggle Mode
            </button>
        </div>
    )
}

export default Header