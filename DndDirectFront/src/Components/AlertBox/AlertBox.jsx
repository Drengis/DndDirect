import { observer } from "mobx-react-lite"
import AlertStore from "../../cms/AlertStore"
import styles from "./AlertBox.module.css"


const AlertBox = observer(() => {
    return (
        <div className={styles.Alertbox}>
            {AlertStore.Alerts}
        </div>
    )
})

export default AlertBox