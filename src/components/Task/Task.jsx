import threeDigitTag from 'utils/threeDigitTag';
import style from './Task.module.css';

export default function Task({ task }) {
  const tag = threeDigitTag(task.tag);
  return (
    <section className={style.task}>
      <h2 className={style.tag}>{tag}</h2>
      <p className={style.desc}>{task.description}</p>
    </section>
  );
}
