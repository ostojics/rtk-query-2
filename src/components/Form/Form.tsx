import React, {useState} from 'react';

import FormInput from 'components/FormInput/FormInput';

const Form: React.FC = () => {
  const [formValue, setFormValue] = useState('');
  const [textValue, setTextValue] = useState('');

  const handleClick = () => {
    setTextValue(formValue);
  };

  return (
    <form data-testid="form">
      <FormInput
        value={formValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormValue(e.target.value)}
        placeholder="Type something"
        onClick={handleClick}
        disabled={formValue !== '' ? false : true}
      />
      <p>{textValue}</p>
    </form>
  );
};

export default Form;
