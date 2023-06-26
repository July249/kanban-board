import threeDigitTag from 'utils/threeDigitTag';
import style from './Task.module.css';

export default function Task({ task, onModalToggle }) {
  const tag = threeDigitTag(task.tag);
  const handleModalToggle = () => {
    onModalToggle();
  };
  return (
    <section className={style.task} onClick={handleModalToggle}>
      <h2 className={style.tag}>{tag}</h2>
      <p className={style.desc}>{task.description}</p>
    </section>
  );
}
