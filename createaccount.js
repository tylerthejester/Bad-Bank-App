function CreateAccount(){
  const ctx = React.useContext(UserContext);
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  //Activate the button
  function activateButton() {
    return password !== '' || name !== '' || email !== '';
  }
  
  //Validation and error messages
  function validate(input) {
    if (name == "") {
      setStatus("Name can't be blank");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (email == "") {
      setStatus("Email can't be blank");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (password.length < 8) {
      setStatus("At least 8 characters required for password");
      setTimeout(() => setStatus(""), 3000);
      return false;
    } else {
      return true;
    }
  }

  //Adding a user to database
  function handleCreate() {
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    ctx.users.push({name, email, password, balance: 100});
    setShow(false);
  }

  //Clear to add another account
  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
        header="Create Account"
        status={status}
        body={
          show ? (
            <>
              Name
              <input type="name" className="form-control" id="name" placeholder="John Doe" value={name}onChange={(e) => setName(e.currentTarget.value)}
              />
              <div style={{marginTop: "20px"}}></div>
              Email address
              <input type="input" className="form-control" id="email" placeholder="johndoe123@gmail.com" value={email} onChange={(e) => setEmail(e.currentTarget.value)}/>
              <div style={{marginTop: "20px"}}></div>
              Password
              <input type="password" className="form-control" id="password" placeholder="8+ characters here" value={password} onChange={(e) => setPassword(e.currentTarget.value)}/>
              <div style={{marginTop: "30px"}}></div>
              <button type="submit" className="btn gold-button w-100" disabled={!activateButton()} onClick={handleCreate}>Submit</button>
            </>
          ) : (
            <>
              <h5>Success</h5>
              <div style={{marginTop: "10px"}}></div>
              <button type="submit" className="btn gold-button w-100" onClick={clearForm}>Add another account</button>
            </>
          )
        }
      />
  );
}