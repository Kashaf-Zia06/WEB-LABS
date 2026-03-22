function Input({ setText }) {
  return (
      <>
        <h2>Input Component</h2>
      <input id="inp" onChange={(e) => setText(e.target.value)} />
      </>
  );
}

export default Input;