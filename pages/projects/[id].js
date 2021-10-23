import Layout from "../../components/layout/Layout";
import styles from "./projectdetail.module.css"

const Project = ({ proj }) => {
    console.log(proj);

    return <Layout title={proj.name}>
        <div>
            <div className={styles.overview_panel}>
                <img src="https://founderslair.com/wp-content/uploads/2021/08/flair-logo.svg"></img>
                <h1 className={styles.overview_name}>{proj.name}</h1>
                

                <div className={styles.overview_numbers}>
                    <div className={styles.overview_type}>
                    <div className={styles.overview_type_value}>{proj.type}</div>
                    <div className={styles.overview_type_label}>Project Type</div>

                    </div>
                    <div className={styles.overview_deadline}>
                        <div className={styles.overview_deadline_value}>{proj.deadline}</div>
                        <div className={styles.overview_deadline_label}>Deadline</div>
                    </div>
                </div>

                <div className={styles.overview_teaser}>{proj.teaser}</div>

            </div>
        </div>
    </Layout>;

};

export default Project;

export const getServerSideProps = async ({params}) =>{
    const res = await fetch(`https://my-json-server.typicode.com/danieledisons/mockjsonfl/projects/${params.id}`);

    const proj = await res.json();


    return {
        props:{
            proj,
        },
    };
};

