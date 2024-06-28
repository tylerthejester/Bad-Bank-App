// function AllData(){
//   return (
//     <>
//     <h1>All Data</h1>
//     </>
//   );
// }

function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <>
    <h5>All Data in Store</h5>
    {JSON.stringify(ctx)}<br/>
    </>
  );
}
