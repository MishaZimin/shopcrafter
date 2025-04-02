'use client';

import { useState } from 'react';
import { useAppRouter } from '@/shared/lib/navigation';
import { Button } from '@/shared/ui/Buttons/Button';
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox';
import { Input } from '@/shared/ui/Inputs/Input';
import { Radio } from '@/shared/ui/Radio/Radio';
import { Toggle } from '@/shared/ui/Toggle/Toggle';

export default function Home() {
  const { router } = useAppRouter();
  const [inputValue, setInputValue] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioChecked, setRadioChecked] = useState(false);
  const [toggleChecked, setToggleChecked] = useState(false);

  // Обработчик для Input
  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <div className="flex flex-row gap-8 flex-wrap p-4">
      <Button text="go lending" onClick={() => router.push('/info')} />
      <div className="flex flex-col gap-2">
        <Button text="Подолжить" type="primary" onClick={() => {}} />
        <Button
          text="Подолжить"
          type="secondary"
          textColor="dark"
          onClick={() => {}}
        />
        <Button text="Подолжить" type="red" onClick={() => {}} />
      </div>
      <div className="flex flex-col gap-2">
        <Input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Введите текст"
        />
        <Input
          value={inputValue}
          onChange={handleInputChange}
          variant="error"
          errorText="Ошибка"
          placeholder="Поле с ошибкой"
        />
        <Input onChange={() => {}} value="Неизменяемое поле" disabled />
      </div>

      <div className="flex flex-col gap-2">
        <Checkbox
          checked={checkboxChecked}
          onChange={() => setCheckboxChecked(!checkboxChecked)}
        />
        <Checkbox
          text="Запомнить меня"
          checked={checkboxChecked}
          onChange={() => setCheckboxChecked(!checkboxChecked)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Radio
          checked={radioChecked}
          onChange={() => setRadioChecked(!radioChecked)}
        />
        <Radio
          text="Выбрать опцию"
          checked={radioChecked}
          onChange={() => setRadioChecked(!radioChecked)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Toggle
          isChecked={toggleChecked}
          onToggle={() => setToggleChecked(!toggleChecked)}
        />
        <Toggle
          isChecked={!toggleChecked}
          onToggle={() => setToggleChecked(!toggleChecked)}
        />
        <Toggle isChecked={false} disabled onToggle={() => {}} />
      </div>
    </div>
  );
}
