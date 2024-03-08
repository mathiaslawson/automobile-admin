import React from 'react';
import { Row, Col, Badge } from 'reactstrap';
import styled from 'styled-components';
import "./style.css"

const TimelineContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  position: relative;
`;

const TimelineStep = styled.div`
  position: relative;
  text-align: center;
  padding: 0 2rem;
  z-index: 1;
`;

const TimelineLine = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  height: 4px;
  background-color: ${props => props.complete ? '#8a2be2' : '#ccc'}; /* Purple color for completed, gray for incomplete */
`;

const TimelineMarker = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  background-color: ${props => props.complete ? '#8a2be2' : '#ccc'}; /* Purple for completed, gray for incomplete */
  border: 4px solid ${props => props.complete ? '#8a2be2' : '#ccc'}; /* Purple for completed, gray for incomplete */
  border-radius: 50%;
  text-align: center;
  line-height: 24px;
  font-weight: bold;
  color: white;
`;

const TimelineContent = styled.div`
  margin-top: 1rem;
`;

const Timeline = ({ currentStep = 0 }) => {
  const events = [
    {
      text: 'Sell Event Created',
      icon: '🚀',
    },
    {
      text: 'Sell Event Pending',
      icon: '💻',
    },
    {
      text: 'Sell Event Approved',
      icon: '🎯',
    },
  ];

  return (
    <TimelineContainer>
      {events.map((event, index) => (
        <React.Fragment key={index}>
          <TimelineLine complete={index <= currentStep} />
          <TimelineStep>
            <TimelineMarker complete={index <= currentStep}>{event.icon}</TimelineMarker>
            <TimelineContent>{event.text}</TimelineContent>
          </TimelineStep>
        </React.Fragment>
      ))}
    </TimelineContainer>
  );
};

export default Timeline;