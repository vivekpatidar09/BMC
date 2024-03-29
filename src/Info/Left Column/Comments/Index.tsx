import "./Index.css";

function Index() {
  interface dataType {
    id: number;
    Userimage: string;
    Username: string;
    ReplyUserimg: string;
    ReplyUsername: string;
  }

  const data: dataType[] = [
    {
      id: 1,
      Userimage: "/images/page3commentimg.png",
      Username: "Harindra",
      ReplyUserimg: "/images/page3commentimg2.png",
      ReplyUsername: "Shikhar Srivas",
    },
    {
      id: 2,
      Userimage: "/images/page3commentimg.png",
      Username: "Harindra",
      ReplyUserimg: "/images/page3commentimg2.png",
      ReplyUsername: "Shikhar Srivas",
    },
    {
      id: 3,
      Userimage: "/images/page3commentimg.png",
      Username: "Harindra",
      ReplyUserimg: "/images/page3commentimg2.png",
      ReplyUsername: "Shikhar Srivas",
    },
    {
      id: 4,
      Userimage: "/images/page3commentimg.png",
      Username: "Harindra",
      ReplyUserimg: "/images/page3commentimg2.png",
      ReplyUsername: "Shikhar Srivas",
    },
    {
      id: 5,
      Userimage: "/images/page3commentimg.png",
      Username: "Harindra",
      ReplyUserimg: "/images/page3commentimg2.png",
      ReplyUsername: "Shikhar Srivas",
    },
  ];

  return (
    <div className="comments">
      <h3>Comments</h3>
      <div className="card">
        <hr />
        <div className="text-area">
          <textarea name="" id="" placeholder="write your comments here..." />
          <div className="cmt-alert">
            <p>Please enter atleast 2 characters</p>
            <p>Character:0/500</p>
          </div>
          <button>Login To Add Comment</button>
        </div>
        <div className="comment-section">
          <p className="no-of-comment">5 Comments</p>

          {data.map((x) => {
            return (
              <div className="comment-colum" key={x.id}>
                <hr />
                <div className="col1">
                  <div className="row1">
                    <img src={x.Userimage} alt="" />
                    <div>
                      <p>
                        <b>{x.Username}</b>
                      </p>
                      <div style={{ display: "flex" }}>
                        <p>
                          I have completed my betch in mechanical am eligible to
                          study MA in crimonology and criminal justice Follow
                          <button>
                            <img src="/images/page3commentReply.png" alt="" />{" "}
                            Reply
                          </button>
                        </p>
                      </div>
                    </div>
                    <span className="date">Jan 30, 2024 20:01</span>
                  </div>
                </div>
                <div className="col2">
                  <div className="row1">
                    <img src={x.ReplyUserimg} alt="" />
                    <div>
                      <p>
                        <b>{x.ReplyUsername}</b>
                      </p>
                      <div style={{ display: "flex" }}>
                        <p>
                          I have completed my betch in mechanical am eligible to
                          study MA in crimonology and criminal justice
                          <button>
                            <img src="/images/page3commentReply.png" alt="" />{" "}
                            Reply
                          </button>
                        </p>
                      </div>
                      <span className="date">Jan 30, 2024 20:01</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button className="load-more">Load More</button>
      </div>
    </div>
  );
}

export default Index;
