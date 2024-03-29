import Index from "./AboutUs Card/Index";
import "./AboutUs.css";
import LongWay from "./We've Come A Long Way/Index.tsx";

function AboutUs() {
  return (
    <div className="about-us">
      <h1 className="head" >About Us</h1>
      <div className="para-data">
        <p>
          is an extensive search engine for the students, parents, and education
          industry players who are seeking information onhigher education sector
          in India and abroad. One can rely on log.com for getting most brief
          and relevant data on colleges and universities.logo.com is one of the
          fastest growing education services providers in India today connecting
          students to colleges and universities from across geographies. As a
          robust ed-tech company, logoDekho offers invaluable information to its
          students demonstrated by 137+ million sessions across the website and
          other social media platforms in the year 2020-21
        </p>
        <p>
          logo.com's business objective is to facilitate colleges and
          universities with student recruitment across all streams and degrees.
          With over 1000 partner colleges as its clients, logo.com has 35K+
          unique colleges listed on its website and offers latest information on
          admissions, entrance tests, infrastructure, courses and careers.
        </p>
        <p>
          logoDekho's customised student outreach programme cognizant with the
          student needs of today and has garnered education seekers from across
          the globe. logoDekho has assisted them with counseling and admission
          services to help them take admission in the right college suitable to
          their academic background, skill-set & potential
        </p>
        <p>
          The Study Abroad business of logoDekho offers premium services to its
          students by providing them with all the assistance to apply to any
          foreign university of their choice. logoDekho helps students in the
          full cycle of admission to foreign universities right from student
          profiling, application assistance, test prep coaching & solutions to
          university guidance as well as accommodation, VISA and Immigration
          assistance.
        </p>
        <p>
          logoDekho has helped thousands of students to get admission into their
          institutes of choice across USA, UK, Canada, Australia, Germany,
          Singapore and Europe.
        </p>
        <a href="#">Read more</a>
      </div>

      {/* CARDS  */}
      <Index />
      <LongWay />
    </div>
  );
}

export default AboutUs;
