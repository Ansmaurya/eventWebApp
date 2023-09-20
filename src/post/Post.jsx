import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="./image/side1.jpg" alt="" />
      <div className="postInfo">
       
        <div className="postCats">
          <span className="postcat">Music</span>
          <span className="postcat">Life</span>
        </div>
        <hr/>
        <span className="postTitel">
       Lorem ipsum, dolor sit amet consectetur adip,
        </span>
         <hr/>
        <span className="postDate">
          1 hour ago
        </span>
        <hr/>
      </div>
      <p className="postdec">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, reiciendis fugit? Ex dolores ipsam tenetur eius consectetur minima et beatae, voluptas quae fugiat commodi ullam praesentium reiciendis vel alias natus sequi amet nesciunt inventore facere incidunt nisi mollitia vitae nobis. Amet qui soluta assumenda adipisci obcaecati delectus sint ullam nostrum dolorum explicabo blanditiis quis, repellat quae recusandae, reiciendis nihil officia illo sit inventore similique quos veritatis ipsum! Fugit debitis fugiat sed officiis alias ex repellat! Quam accusamus dolores eum repudiandae.</p>
    </div>
  )
}
