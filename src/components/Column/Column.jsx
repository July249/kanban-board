import style from './Column.module.css';

export default function Column({ state }) {
  return <div className={style.column}>{state}</div>;
}
