import "./Index.css";

function Index() {
  const data = [
    {
      id : 1,
      image: "/images/page4img1.svg",
      title: "OUR MISSION",
      para: "College Choosing decision, the second biggest decision of anyone's life should not go wrong. With the most interactive user interface and most validated content, we aspire to be the top education portals and help the students in every way in making his decision easier.",
    },
    {
      id : 2,
      image: "/images/page4img2.svg",
      title: "OUR VISION",
      para: "logodekho has been created to fulfill a vision of empowering students with knowledge so that they make a wiser decision while choosing their career and alma mater",
    },
    {
      id : 3,
      image: "/images/page4img3.svg",
      title: "HOSTEL ACCOMMODATION",
      para: "Discover the best housing/ hostel options as per your need, preferences and budget so that you don't have to worry about relocating to a new city/state in pursuit of your higher studies.",
    },
    {
      id : 4,
      image: "/images/page4img4.svg",
      title: "FREE COUNSELLING BY EXPERT",
      para: "Our qualified academic experts will provide a one-on-one counselling session to help you make the right course & career choice on the basis of your interest, educational background, potential and skills, therefore making your admission journey a hassle-free experience",
    },
  ];

  return (
    <div className="about-card">
      {data.map((x) => {
        return (
          <div className="card" key={x.id}>
            <img src={x.image} alt="" />
            <h2>{x.title}</h2>
            <p>{x.para}</p>
          </div>
        );
      })}

      {/* Offerings at logo.com */}

      <div className="offerings">
        <h2 style={{ margin: "20px 0" }}>Offerings at logo.com</h2>
        <div className="card2">
          <img src="/images/page4img5.png" alt="" />
          <p>
            Students can use logo.com as one stop destination to search about
            their dream college, available courses, admission process and lots
            more interactive tools to simplify the process of finding
            alma-mater. The website has the repository of more than 20,000
            colleges and 6000 courses categorized in different streams like
            Management, Engineering, Medical, Arts and much more. One can
            classify colleges on the basis of location, ranking, ratings, fees
            and cutoff for different competitive exams.
          </p>
        </div>
      </div>

      <div className="paragraphs">
        <div className="para">
          <h3>COLLEGE REVIEWS</h3>
          <p>
            College reviews are a critical part of LOGO.com. Students share
            their college experiences on this platform, enabling education
            seekers to make an informed choice about their academic journey.
            Shiksha has become a trustworthy platform with over 4 lakh+ verified
            student reviews posted by students across India for colleges and
            courses. Students can access college placement statistics, academic
            and infrastructure standards through These reviews. There have been
            5M+ reads of reviews by users in last one year...
          </p>
        </div>
        <div className="para">
          <h3>CAMPUS AMBASSADOR PROGRAM</h3>
          <p>
            LOGO.COM is India's leading platform to get reliable advice on
            college admissions with a flourishing family of 3000+ campus
            ambassadors across India. While the program provides college
            students an opportunity to learn new skills and build network,
            campus ambassadors are the face and voice of Shiksha at their campus
            helping other aspirants get relevant information to secure admission
            to their dream universities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Index;
