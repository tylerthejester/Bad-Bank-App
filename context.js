const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

function Card(props){
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card mb-3 ' + bg + txt;
    }
  
    return (
      <div className="d-flex justify-content-center">
        <div className={classes()} style={{width: "20rem"}}>
          <div className="card-header">{props.header}</div>
          <div className="card-body">
            {props.title && (<h5>{props.title}</h5>)}
            {props.text && (<p>{props.text}</p>)}
            {props.balance && (<h3>Balance: ${props.balance}</h3>)}
            {props.body}
            {props.status && (<div className="status-error" id="createStatus">{props.status}</div>)}
          </div>
        </div> 
      </div>     
    );    
  }