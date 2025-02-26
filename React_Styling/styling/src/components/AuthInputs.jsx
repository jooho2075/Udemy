import { useState } from 'react';

// Tailwind CSS로 데모 앱 옮기기를 위해 삭제함
// import { styled } from 'styled-components';

import Button from './Button.jsx';
import Input from './Input.jsx';

// div를 개별 component로 만들고 어떤 스타일이든 개발자가 적용하고 싶은
// 스타일을 가지는 component로 만듬

// tagged template 형식 : 함수 같은 것으로 템플릿 리터럴을 입력으로 받는 것
// div태그에 적용하고 싶은 모든 스타일을 포함해야 하는 것

// Tailwind CSS로 데모 앱 옮기기를 위해 삭제함
/*
const ControlContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
`;
*/

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className="w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800">
      <div className="flex flex-col gap-2 mb-6">  
        <Input
          label="Email"
          invalid={emailNotValid}
          type="email"
          // 동적 및 조건적 Inline Style
          // style={{
          //     backgroundColor: emailNotValid ? '#fed2d2' : '#d1d5db'
          // }}
          onChange={(event) => handleInputChange('email', event.target.value)}
        />
        <Input
          label="Password"
          invalid={passwordNotValid}
          type="password"
          onChange={(event) =>
            handleInputChange('password', event.target.value)
            }
        />
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <Button onClick={handleLogin}>
          Sign In
        </Button>
      </div>
    </div>
  );
}
