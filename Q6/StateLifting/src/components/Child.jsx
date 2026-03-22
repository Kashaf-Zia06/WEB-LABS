function Child({ theme }) {
  return (
    <div className={`child-container ${theme}`}>
      <h2>Child Component</h2>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

export default Child;