import React, { useState } from 'react';
import './Tabs.scss';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <div className="tab-titles">
        {React.Children.map(children, (child, index) => (
          <div
            key={index}  // Añadido: key para cada tab-title
            className={`tab-title ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {child.props.label}
          </div>
        ))}
      </div>
      <div className="tab-content">{children[activeTab]}</div>
    </div>
  );
};

export default Tabs;
