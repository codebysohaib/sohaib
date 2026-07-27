import { skillsData } from '@/lib/data';
import SkillCard from './SkillCard';

export default function Skills() {
  return (
    <div id="skills">
      <div className="inner">
        <div className="skills-header reveal">
          <p className="section-eyebrow">What I do</p>
          <h2 className="section-title">
            Craft across<br />Web &amp; Mobile
          </h2>
        </div>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
