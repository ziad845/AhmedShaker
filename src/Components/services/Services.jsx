import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./services.css";

import { 
  FaBrain,
  FaCamera,
  FaRobot,
  FaCode,
  FaDatabase,
  FaMicrochip
} from "react-icons/fa";

const Services = () => {

  const services = [
    {
      title: "Machine Learning Solutions",
      description:
        "Developing end-to-end ML models, from data preprocessing to deployment, specializing in predictive analytics and MLOps.",
      icon: <FaBrain />
    },
    {
      title: "Computer Vision",
      description:
        "Building advanced image classification, object detection, and feature analysis systems using PyTorch and OpenCV.",
      icon: <FaCamera />
    },
    {
      title: "Robotics & Automation",
      description:
        "Designing and programming autonomous systems and drones, bridging the gap between hardware and intelligent software.",
      icon: <FaRobot />
    },
    {
      title: "AI Integration",
      description:
        "Integrating Generative AI and LLM capabilities into web applications for enhanced user experiences and automation.",
      icon: <FaCode />
    },
    {
      title: "Data Science & Analysis",
      description:
        "Transforming raw data into actionable insights through advanced statistical modeling and visualization techniques.",
      icon: <FaDatabase />
    },
    {
      title: "Embedded Systems",
      description:
        "Developing efficient software for microcontrollers and IoT devices, optimized for real-time performance.",
      icon: <FaMicrochip />
    }
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="services-page">

      <div className="services-header">
       
        <h1 className="services-title">Offered Services</h1>
      </div>

      <div className="services-container">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="service-icon">{service.icon}</div>

            <h3 className="service-title">
              {service.title}
            </h3>

            <p className="service-description">
              {service.description}
            </p>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Services;