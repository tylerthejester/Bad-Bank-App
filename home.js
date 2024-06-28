function Home(){
  return (
    <Card
      header="BadBank Home Page"
      title="Welcome to the bank"
      text="Your partner in financial growth."
      body={(<img src="golden-bank.png" className="img-fluid" alt="Responsive image" style={{maxWidth: "18rem"}}/>)}
    />    
  );  
}
