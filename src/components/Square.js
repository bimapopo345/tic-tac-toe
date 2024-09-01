const Square = ({children, onClick, index}) => {
    return <div className="square" onClick={onClick}><span style={{
      position:"absolute",
      color: 'red',
      fontSize: '20px',
      top:0,
      left:"4px"
    }}>{index}</span>{children}</div>
  }

  export default Square;