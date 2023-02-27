import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'

import Input from '../Input/Input';
import Button from '../Button/Button';

import logo from '../../logo.svg';

import {
  removeGoods,
  addGoods,
  selectGoods,
} from '../../app/features/goods/goodsSlice';

type Props = {
  messageText: string,
  setMessageText: Function,
  classes: string[],
  setClasses: Function,
  good: string | undefined,
  setGood: Function,
}
function FormAddGoods({
    messageText,
    setMessageText,
    classes,
    setClasses,
    good,
    setGood,
  }: Props) {

  const dispatch = useDispatch();
  const { goods }: any = useSelector(selectGoods); // какой тип ????? 

  const [valid, setValid] = useState<boolean>(false);

  function editorGoods(mode: string): void {
    switch (mode) {
      case 'add':
        dispatch(addGoods(good));
        setClasses(['visible', 'modal__message-goods--add']);
        setMessageText(`Товар: ${good}, добавлен`);
        break;

      case 'remove':
        const index = goods.indexOf(good);

        if (index !== -1) {
          dispatch(removeGoods(good));
          setClasses(['visible', 'modal__message-goods--remove']);
          setMessageText(`Товар: ${good}, удален`);
          return;
        }
          
        setClasses(['visible', 'modal__message-goods--default']);
        setMessageText(`Товар: ${good}, не найден`);
        break;
    }
  }

  useEffect(() => {
    if (messageText && classes) {
      const arrModal = document.body.querySelectorAll('.modal__message-goods');
      const lastModal = document.body?.querySelector('.modal__message-goods');
      
      document.body.insertAdjacentHTML('beforeend', `<div class="modal__message-goods ${classes.join(' ')}"><h3>${messageText}</h3></div>`);

      (arrModal.length > 0 && lastModal) && document.body.removeChild(lastModal);
    }
  }, [messageText, classes]);

  return (
    <>
      <form method='POST' className="container container-form">
        <Input
          valid={valid}
          setValid={setValid}
          setGood={setGood}
        />
        <div className='container__buttons'>
          <Button 
            type="button"
            disabled={!valid}
            tabIndex={-1}
            onClick={() => editorGoods('add')} 
          >
            <span>Добавить товар</span>
            <img src={logo} alt={"Logo"}/>
          </Button>
          <Button
            type="button"
            disabled={!valid}
            tabIndex={-1}
            onClick={() => editorGoods('remove')} 
          >
            <span>Удалить товар</span>
            <img src={logo} alt={"Logo"}/>
          </Button>
        </div>
      </form>
      <div className='container container-goods'>
        <h2>{goods.length > 0 ? 'Список товаров' : 'Товаров нет'}</h2>
        <ul className='container__list-goods'>
          {goods.map((name: string, index: number) => (
            name && <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FormAddGoods;
