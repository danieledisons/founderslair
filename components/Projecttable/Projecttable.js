import styles from "./Projecttable.module.css"
import Link from "next/link"



const Projecttable = ({jsondata}) => {
    return (
    <div> 
        <div className={styles.heading}>
        <button className={styles.heading_name}>
            <div>ProjectName</div>
        </button>

        <button className={styles.heading_type}>
            <div>ProjectType</div>
        </button>
        

        <button className={styles.heading_deadline}>
            <div>Deadline</div>
        </button>

        <button className={styles.heading_status}>
            <div>Status</div>
        </button>
        </div>
        

        

        {jsondata.map((details, index) => ( 
            <Link href ={`/projects/${details.id}`}><div className={styles.row}>
            <div className={styles.name}>{details.name}<dd className={styles.teaser}>{jsondata[5].teaser}</dd></div>

            <div className={styles.type}>{details.type}</div>

            <div className={styles.deadline}>{details.deadline}</div>

            <div className={styles.status}>{details.applications}</div>

        </div></Link>
        ))}
    </div>
    );
};


export default Projecttable;