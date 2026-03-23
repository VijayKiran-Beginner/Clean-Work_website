import React from "react";

const About = () => {
  const styles = {
    container: {
      maxWidth: "1000px",
      margin: "0 auto",
      padding: "40px 20px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f5fbff",
      color: "#333",
    },
    title: {
      fontSize: "36px",
      color: "#2a7fdd",
      marginBottom: "20px",
    },
    description: {
      fontSize: "18px",
      lineHeight: "1.6",
      marginBottom: "30px",
    },
    subtitle: {
      fontSize: "24px",
      color: "#2a7fdd",
      marginBottom: "15px",
    },
    list: {
      listStyleType: "disc",
      paddingLeft: "20px",
      fontSize: "17px",
      lineHeight: "1.6",
      marginBottom: "30px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Clean Work</h1>
      <p style={styles.description}>
        Welcome to <strong>Clean Work</strong>, your trusted partner in creating spotless environments. We specialize in a wide range of professional cleaning services tailored to homes, offices, and industries. With a dedicated team and a commitment to excellence, we turn messy spaces into pristine perfection.
      </p>

      <h2 style={styles.subtitle}>Our Services</h2>
      <ul style={styles.list}>
        <li><strong>Office Cleaning:</strong> Ensure a clean and organized workspace for improved productivity and hygiene.</li>
        <li><strong>Kitchen Cleaning:</strong> Deep cleaning for home and commercial kitchens, eliminating grease and bacteria.</li>
        <li><strong>Car Washing:</strong> Full interior and exterior car wash services to maintain your vehicle’s cleanliness.</li>
        <li><strong>Factory Cleaning:</strong> Specialized industrial cleaning for safety, efficiency, and sanitation.</li>
      </ul>

      <p style={styles.description}>
        We take pride in our detailed, efficient, and eco-friendly approach. With Clean Work, expect nothing less than the highest standards of cleanliness and customer satisfaction.
      </p>
    </div>
  );
};

export default About;
