import style from './Task.module.css';

export default function Task({ task }) {
  return (
    <section className={style.task}>
      <h2 className={style.tag}>#{task.tag}</h2>
      <p className={style.desc}>{task.description}</p>
    </section>
  );
}
