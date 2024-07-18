import  styles  from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <img className={styles.avatar} src="https://github.com/Welington-dos-Santos.png"/>
                <div className={styles.authorInfo}>
                    <strong>Welington dos Santos</strong>
                    <span>Web Developer</span>
                </div>
            </div>

            <time title='18 de Julho as 11:06' datetime="18/07/2024 11:05:59"></time>
        </header>

        <div className={styles.content}>
            <p>Fala galera</p>
            <p>Acabei de subir mais um projeto no git</p>
            <p><a href='#'>welington.design/doctorcare</a></p>
            <p><a href='#'>#novoprojeto #nlw #rocketseat</a></p>
        </div>
    </article>
    )
}