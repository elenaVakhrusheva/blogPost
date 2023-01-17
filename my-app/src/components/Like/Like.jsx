 import React, { useState } from "react"; 

/* const Like = (props) => {
 const [like, setLike] = useState(0);
  return (
    <button onClick={()=>setLike(like+1)} style={{backgroundColor:'red', color:'#fff'}}>{like}</button> 
   ) 
}

export default Like; */

const Like = (props) => {
const [like, setLike] = useState(0);
const [isUserClick, setIsUserClick] = useState(false);

const handleClick = () => {
  if(!isUserClick) {
    setLike(like+1)
    setIsUserClick(true)
    } else {
    setLike(like-1)
    setIsUserClick(false)
    }
}
}
export default Like;

/* class FancyButton extends React.Component{
	constructor(props){
		super(props)
		this.state={
			clicked: 0
		}
	}
	firstClick(){
		console.log("first click")
		this.setState({clicked: 1})
	}
	afterClick(){
		console.log("more clicks")
	}

	render(){
		return(
			<div><button onClick={this.state.clicked === 0 ? this.firstClick.bind(this) : this.afterClick.bind(this)}>Click me</button>
			</div>
		)
	}
} */




  /*const stateLike = likes.length;
    const [like, setLike] = useState(stateLike);
    const handleLikeClick = ()=>{setLike(like+1)}; 
   
    <IconButton aria-label="add to favorites" onClick={handleLikeClick} >
      <FavoriteBorderIcon /> <span className={s.likeCount}>{like}</span>
    </IconButton> */