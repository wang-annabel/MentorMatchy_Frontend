import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import './nav.css'; // Import your component-specific CSS file

const HomePage: React.FC = () => {
const navigate = useNavigate();

useEffect(() => {
    AOS.init();
  }, []);

  const handleButtonClick = () => {
    navigate('/accountCreation'); // Navigate to the match page
  };


  return (
    <div className="Body">
      <div className="upper-heading">
        <div data-aos="fade-up" data-aos-duration="2000" className="motto">
          <p>Empower Your Path</p>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className="motto2">
          <p>with Mentor Matchy</p>
        </div>
      </div>

      <div data-aos="fade-up" className="match-button">
        <button onClick={handleButtonClick}>Start Matching!</button>
      </div>

      <div data-aos="fade-up" data-aos-duration="2000" className="mission-body">
        <h2>Our Mission</h2>
        <p>At Mentor Matchy, our mission is to empower women by fostering meaningful
          connections through personalized mentorship. We believe in the power of
          women supporting women, and our platform is designed to match mentors and
          mentees based on shared interests, work styles, and career goals. Whether
          you are seeking professional guidance, a role model, or a supportive friend,
          Mentor Matchy is here to help you thrive and achieve your fullest potential.
      </p>
      </div>

      <div data-aos="fade-up" data-aos-duration="2000" className="empowering-body">
        <h2>Empowering Women</h2>
        <p>At Mentor Matchy, we are dedicated to empowering women to reach their full potential.
          Our platform connects women with mentors who share their interests and career aspirations,
          fostering a community of support and growth and breaking that glass ceiling. 
          We aim to inspire confidence, build leadership skills, and create opportunities
          for women to excel in every aspect of their lives. Join Mentor Matchy and be part
          of a movement where women empower women to achieve greatness.</p>
      </div>
    </div>
  );
};

export default HomePage;
