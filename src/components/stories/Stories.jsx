import "./stories.scss";

export default function Stories() {
  const dummyStories = [
    {
      id: 1,
      img: "https://res.cloudinary.com/dxxh8iica/image/upload/v1661665337/cld-sample-5.jpg",
      name: "Akash",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dxxh8iica/image/upload/v1661665337/cld-sample-5.jpg",
      name: "Akash",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dxxh8iica/image/upload/v1661665337/cld-sample-5.jpg",
      name: "Akash",
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/dxxh8iica/image/upload/v1661665337/cld-sample-5.jpg",
      name: "Akash",
    },
    {
      id: 5,
      img: "https://res.cloudinary.com/dxxh8iica/image/upload/v1661665337/cld-sample-5.jpg",
      name: "Akash",
    },
    {
      id: 6,
      img: "https://res.cloudinary.com/dxxh8iica/image/upload/v1661665337/cld-sample-5.jpg",
      name: "Akash Kumar",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img
          src="https://res.cloudinary.com/dxxh8iica/image/upload/v1661665336/cld-sample-4.jpg"
          alt="userImg"
        />
        <span>Ejaz Ansari</span>
        <button>+</button>
      </div>
      {dummyStories.map((each) => (
        <div className="story" key={each.id}>
          <img src={each.img} alt="storyImg" />
          <span>{each.name}</span>
        </div>
      ))}
    </div>
  );
}
