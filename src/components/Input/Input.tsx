import { useRef } from "react";

type Props = {
  setValid: Function,
  setGood: Function,
  valid: boolean,
}

function Input({
    setValid,
    setGood,
    valid,
  }: Props) {

  const inputRef = useRef<HTMLInputElement>(null);

  const validGoodsName = (good: string) => {
    setValid(/^[А-Я]+$/i.test(good));
    
    if (!valid) {
      inputRef.current?.classList.add('error');
      return;
    }

    setGood(inputRef.current?.value as string);

    inputRef.current?.classList.remove('error');
  };

  return (
    <input ref={inputRef} type="text" placeholder={'Введите название товара'} onChange={(e) => validGoodsName(e.target.value)} tabIndex={1}/>
  );
}

export default Input;
