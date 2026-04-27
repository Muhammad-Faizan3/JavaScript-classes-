import Sirpic from '../assets/sir majid.jfif';

function Teacher() {
    return(
        <>
      <div className="card">
        <img
          src={Sirpic}
          alt="Teacher"
          className="profile-img"
        />

        <h2>Majid Hussain</h2>
        <p className="course">JavaScript Instructor</p>
        <p className="institute">1 Years Experience</p>

        <p className="intro">
          An experienced teacher with deep knowledge of JavaScript and frontend
          technologies.
        </p>

        <button>Contact Me</button>
      </div>
        </>
    )
};
export default Teacher;