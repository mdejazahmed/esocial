import { Link } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';

import "./post.scss"

export default function Post({post}) {
  const isLiked=false

  return (
    <div className="post">
    <div className="container">
      <div className="user">
      <Link to={`/profile/${post.userId}`} style={{textDecoration:"none",color:"inherit"}}>
        <div className="userInfo">
          <img src={post.profilePic} alt="userImg" />
          <div className="userDetails">
            <p>{post.userName}</p>
            <span>1 min ago</span>
          </div>
        </div>
        </Link>
        <MoreHorizIcon/>
      </div>
      <div className="content">
        <p>{post.desc}</p>
        {post.postImg?<img src={post.postImg} alt="postImg" />:null}
      </div>
      <div className="interaction">
        <div className="item">
          {isLiked?<FavoriteIcon/>:<FavoriteBorderIcon/>}
          12 Likes
        </div>
        <div className="item">
        <CommentIcon/>
          9 Comments
        </div>
        <div className="item">
          <ShareIcon/>
          Share
        </div>
      </div>
      </div>
    </div>
  )
}
