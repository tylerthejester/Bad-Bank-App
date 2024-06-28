function Withdraw(){
  const ctx = React.useContext(UserContext);
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [amount, setAmount] = React.useState(0);
  let ctxlen = ctx.users.length;
  let balance = ctx.users[ctxlen - 1].balance;
  let name = ctx.users[ctx.users.length - 1].name;

  // Disabled button
  const handleChange = (event) => {
    setIsDisabled(false);
    setAmount(Number(event.target.value));
  };

  // Validation and error messages
  function validate(amount) {
    if (isNaN(amount)) {
      setStatus("Amount has to be a number");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (amount <= 0) {
      setStatus("Can't withdraw zeros or negative numbers");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (amount > balance) {
      setStatus("Amount can't be more than your current balance");
      setTimeout(() => setStatus(""), 3000);
      return false;
    } else {
      return true;
    }
  }

  // Function within 'Submit' button
  const handleSubmit = () => {
    if (!validate(amount, "amount")) return;
    let withdraw = balance - Number(amount);
    ctx.users[ctx.users.length - 1].balance = withdraw;
    setShow(false);
    return;
  };

  // Clear to make another withdrawal
  function clearForm() {
    setShow(true);
    setIsDisabled(true);
  }


  return (
    <Card
      header="Withdraw"
      status={status}
      text={name}
      balance={balance}
      body={
        show ? (
          <>
            <div style={{marginTop: "20px"}}></div>
            Withdraw
            <div style={{marginTop: "8px"}}></div>
            <input type="input" className="form-control" placeholder="Enter amount" onChange={handleChange}/>
            <div style={{marginTop: "20px"}}></div>
            <button type="submit" className="btn gold-button w-100" disabled={isDisabled} onClick={handleSubmit}>Submit</button>
          </>
        ) : (
          <>
            <h6>Withdrawal Succeeded</h6>
            <button type="submit" className="btn gold-button w-100" onClick={clearForm}>Make another withdrawal</button>
          </>
        )
      }
    />
  )
}
