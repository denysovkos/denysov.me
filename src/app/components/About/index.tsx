import * as React from 'react';
import Masonry from 'react-masonry-component';

import mockedData from 'components/About/workExperience';

const masonryOptions = {
  transitionDuration: 0,
};

const doNotDoAnything = (event) => {
  event.preventDefault();
};

const WorkXPComponent = ({data}) => (
  <a href="#" onClick={doNotDoAnything} style={{cursor: 'default'}}>
    <h3>{data.companyName}</h3>
    <p>Period: {data.period}</p>
    <p>Position: {data.position}</p>
  </a>
);

export const About = () => (
  <div>
    <h2>About me</h2>
    <p>
    Hey, I'm a software developer from Kiev, Ukraine.
    I can help you build your next product.
    I design, build, operate & sometimes rescue full-stack web applications.

    Have a project you'd like to discuss?

    Please, contact me via email!
    </p>
    <h2>Work experience</h2>
    <Masonry
        className={'thumbnails'}
        elementType={'section'}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
    >
      {mockedData.workXP.map((xp, i) => <WorkXPComponent key={`work-${i}`} data={xp} />)}
    </Masonry>

    <h2>Skills</h2>

    <strong>Communication</strong>
    <p>I realize the importance of good communication.
    I use tools like Slack/Skype/Telegram to make sure we’re always on the same page.</p>

    <strong>Organization</strong>
    <p>I believe it’s important to stay organized while working.
    I use the likes of Jira or Trello to help keep projects on-track and under control.</p>

    <strong>Project Management</strong>
    <p>I think it’s important to identify the discrete stages of a project and work to a schedule around those.</p>
  </div>
);
