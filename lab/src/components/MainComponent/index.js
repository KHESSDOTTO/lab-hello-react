import styles from "./style.module.css";

export function MainComponent() {
    return (
        <main className={styles.mainContent}>
            <h1 className={styles.title}>Say hello to ReactJS</h1>
            <p className= {styles.description}>
                You will learn how to use the most popular frontend library, and become a super
                ninja developer.
            </p>
        </main>
    );
};

