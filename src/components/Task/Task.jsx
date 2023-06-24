import style from './Task.module.css';

export default function Task({ task }) {
  return (
    <section className={style.task}>
      <h2 className={style.title}>{task.title}</h2>
      <p className={style.desc}>{task.desc}</p>
    </section>
  );
}
