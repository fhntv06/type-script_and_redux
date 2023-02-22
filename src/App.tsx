import { useRef, useState } from 'react';

import './App.css';

import FormAddGoods from './components/FormAddGoods/FormAddGoods';

function App() {
  const appRef = useRef<HTMLDivElement>(null);

  const [messageText, setMessageText] = useState<string>('');
  const [classes, setClasses] = useState<string[]>([]);
  const [good, setGood] = useState<string>(''); // есть ошибка с перезаписью состояния йуйq ????? 

  return (
    <>
      <div ref={appRef} className="App">
        <FormAddGoods
          messageText={messageText}
          setMessageText={setMessageText}
          classes={classes}
          setClasses={setClasses}
          good={good}
          setGood={setGood}
        />
      </div>
  </>
  );
}

export default App;
