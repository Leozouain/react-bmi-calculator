import styles from './App.module.css'

import { useState } from 'react'
import { GridItem } from './components/GridItem'
import leftArrowImage from './assets/leftarrow.png'
import { levels, calculateImc, Level } from './helpers/imc'




const App = ()=>{
  const [heightField, setHeightField ] = useState<number>(0)
  const [weightField, setWeightField] = useState<number>(0)
  const [toShow, setToShow] = useState<Level | null>(null)
  
  const handleCalculateButton = ()=>{
    if(heightField&&weightField){
      setToShow(calculateImc(heightField, weightField))
    }else{
      alert('Type all the fields.')
    }
  }
  
  const handleBackButton = ()=>{
    setToShow(null)
    setHeightField(0)
    setWeightField(0)
  }

  return(
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
         <div className={styles.bmi}>Body Mass Index</div>
          
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Check your <br></br> BMI</h1>
          <p>Body Mass Index (BMI) is a person’s weight in kilograms (or pounds) divided by the square of height in meters (or feet). </p>

          <input type="number"
          placeholder='Type your height. Ex: 1.5 (in meters)'
          value={heightField>0?heightField:""}
          onChange={e=> setHeightField(parseFloat(e.target.value))} 
          disabled={toShow ? true : false}/>

          <input type="number"
          placeholder='Type your weight. Ex: 80.3 (in kilograms)'
          value={weightField>0?weightField:""}
          onChange={e=> setWeightField(parseFloat(e.target.value))}
          disabled={toShow ? true : false} />
        
          <button disabled={toShow ? true : false} onClick={handleCalculateButton}>Calculate</button>
        </div>


        <div className={styles.rightSide}>
          {!toShow &&
            <div className={styles.grid}>
              {levels.map((item,key)=>(
                <GridItem key={key} item={item}/>
              ))}
          </div>
          }
          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                  <img src={leftArrowImage} alt="" width={25}/>
              </div>
              <GridItem item={toShow}/>
            </div>
          }
        </div>
      </div>
      <footer className={styles.footer}>
         <span className={styles.span}>Made with ❤️ by </span> <strong>Leonardo Zouain</strong>
      </footer>
    </div>
  )
}
export default App;
