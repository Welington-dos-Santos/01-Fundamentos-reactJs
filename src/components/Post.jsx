import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(pros) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/Welington-dos-Santos.png" />
                    <div className={styles.authorInfo}>
                        <strong>Welington dos Santos</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='18 de Julho as 11:06' datetime="18/07/2024 11:05:59">Publicado a 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera</p>
                <p>Acabei de subir mais um projeto no git</p>
                <p>
                    <a href='#'>welington.design/doctorcare</a>
                </p>
                <p>
                    <a href='#'>#novoprojeto</a>{' '}
                    <a href='#'>#nlw</a>{' '}
                    <a href='#'>#rocketseat</a>
                </p>
            </div>


            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Deixe um Comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}