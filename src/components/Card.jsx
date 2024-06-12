import { useState } from 'react';
import style from './Content.module.scss';

function Card({ id, func, title }) {
  const [isDisabled, setIsDisabled] = useState(false);

  function handleClick() {
    if (!isDisabled) {

      func();

      setIsDisabled(true);
      setTimeout(() => {
        setIsDisabled(false);
      }, 10000);
    }
  }

  return (
    <div className={style.card} id={id} onClick={handleClick} style={{ opacity: isDisabled ? 0.5 : 1 }}>
      {title}
    </div>
  );
}

export default Card;