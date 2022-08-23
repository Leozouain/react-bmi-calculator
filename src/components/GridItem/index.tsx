import { Level } from "../../helpers/imc"
import styles from "./GridItem.module.css"
import upImage from '../../assets/up.png'
import downImage from '../../assets/down.png'


type Props = {
    item:Level
}

export const GridItem = ({item}:Props) => {
    return (
        <div className={styles.main} style={{backgroundColor:item.color}}>
           <div className={styles.gridIcon}>
               <img src={item.icon === 'up' ? upImage : downImage} alt="" width="30" />
           </div>
           <div className={styles.gridTitle}>
                {item.title}
                {item.yourImc && 
                    <div className={styles.yourIMC}> Your BMI is <br></br> {item.yourImc} kg/m²</div>
                }
           </div>
           <div className={styles.gridInfo}>
                <>
                    BMI between <strong>{item.imc[0]}</strong> and <strong> {item.imc[1]}</strong>
                </>
           </div>
        </div>
    )
}