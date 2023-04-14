import Post from "../post/Post"

import "./posts.scss";

export default function Posts() {
  const dummyPosts = [
    {
      id: 1,
      userId: 1,
      userName: "Ejaz Ansari",
      profilePic:"https://res.cloudinary.com/dxxh8iica/image/upload/v1681115587/Ccbp/no-profile-picture-icon_l9m8bh.webp",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
      postImg: "https://res.cloudinary.com/dxxh8iica/image/upload/v1661665306/sample.jpg",

    },
    {
      id: 2,
      userId: 2,
      userName: "Akash Kumar",
      profilePic:"https://res.cloudinary.com/dxxh8iica/image/upload/v1661665337/cld-sample-5.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia esse amet odit minima quaerat facere fugiat delectus illo rerum fugit?",

    },
  ];

  return <div className="posts">
    {dummyPosts.map((post)=>(
      <Post key={post.id} post={post}/>
    ))}
  </div>;
}
