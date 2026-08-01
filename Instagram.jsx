import "./Instagram.css";

const posts = [
  {
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500",
  },
  {
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=500",
  },
  {
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=500",
  },
  {
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500",
  },
  {
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500",
  },
  
];

function Instagram() {
  return (
    <section className="instagram" id="instagram">
      <h2>Instagram Gallery</h2>
      <p>Follow us for our latest nail art & luxury designs.</p>

      <div className="instagram-grid">
        {posts.map((post, index) => (
          <img key={index} src={post.image} alt={`Nail ${index + 1}`} />
        ))}
      </div>

      <a
        href="https://instagram.com/nailsbyyeshu"
        target="_blank"
        rel="noreferrer"
        className="instagram-btn"
      >
        Follow @nailsbyyeshu
      </a>
    </section>
  );
}

export default Instagram;