import { useState } from 'react';

export default function Form(props: any) {
  const [item, setItem] = useState('');

  const { onSubmit } = props;

  function handleSubmit(e: any): void {
    e.preventDefault();

    if (item === '') return;

    onSubmit(item);
    setItem('');

    return;
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="lable">New Item</label>
        <input
          type="text"
          id="item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </div>
      <button className="button">Add</button>
    </form>
  );
}
