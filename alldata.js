function AllData(){
  const ctx = React.useContext(UserContext);

  return (
    <Card
      header="All Data"
      body={
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {ctx.users.map((user) => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.balance}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      }
    /> 
  )
}
