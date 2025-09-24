import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Sections.css';

function Section({ setBackground, backgroundName, children }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  React.useEffect(() => {
    if (inView) {
      setBackground(backgroundName);
    }
  }, [inView, setBackground, backgroundName]);

  return (
    <div ref={ref} className="section">
      {children}
    </div>
  );
}

export default Section;
