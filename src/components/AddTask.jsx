import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) {
            alert('Įveskite duomenis')
            return
        }
        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
          <div className='form-control'>
              <label>Pavadinimas</label>
              <input type="text" placeholder='Įrašyti
              užduotį' value={text} onChange={
                  (e) => setText(e.target.value)} /></div>
                    
           <div className='form-control'>
              <label>Data</label>
              <input type="text" placeholder='Įrašyti
              datą ir laiką' value={day}
              onChange={(e) => setDay(e.target.value)} /></div>

              <div className='form-control  form-control-check'>
              <label>Nustatyti priminimą</label>
              <input type='checkbox' 
              checked={reminder}
              value={reminder}
              onChange={(e) => setReminder(e.currentTarget.checked)} />
          </div>
          
          <input type="submit" value='Išsaugoti'
          className='btn btn-block' />
        </form>
    )
}

export default AddTask