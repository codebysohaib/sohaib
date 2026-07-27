import { SkillItem } from '@/lib/data';

export default function SkillCard({ skill }: { skill: SkillItem }) {
  return (
    <div className="skill-card">
      <span className="skill-icon">
        <i className={skill.icon}></i>
      </span>
      <div className="skill-name">{skill.name}</div>
      <div className="skill-desc">{skill.desc}</div>
      <div className="skill-tags">
        {skill.tags.map((tag, idx) => (
          <span key={idx} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}
