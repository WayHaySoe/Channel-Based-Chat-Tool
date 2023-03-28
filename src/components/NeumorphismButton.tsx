import React from "react";

const NeumorphicButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-4 rounded-lg shadow-xl-neumorphic focus:outline-none hover:shadow-glow transition-shadow duration-300"
    >
      {children}
      <style jsx>{`
        button {
          background: linear-gradient(145deg, #ffffff, #e6e6e6);
        }
        .shadow-xl-neumorphic {
          box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.2),
            -8px -8px 20px rgba(255, 255, 255, 0.7);
        }
        .shadow-glow {
          box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.2),
            -8px -8px 20px rgba(255, 255, 255, 0.7),
            0 0 15px rgba(64, 153, 255, 0.5), 0 0 25px rgba(64, 153, 255, 0.4),
            0 0 35px rgba(64, 153, 255, 0.3);
        }
      `}</style>
    </button>
  );
};

export default NeumorphicButton;
