import Image from 'next/image';

export default function About() {
  return (
    <div id="about">
      <div className="inner">
        <div className="about-text reveal">
          <p className="section-eyebrow">About me</p>
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>
            Code as craft,<br />shipped with care
          </h2>
          <p>
            Hi, I&apos;m <strong>Sohaib</strong>, a versatile developer passionate about building products that are used by real people every day. I care deeply about performance, accessibility, and the feeling a product gives you on first launch.
          </p>
          <p>
            I specialize in bridging the gap between elegant design and technical implementation, whether it&apos;s crafting fluid web interfaces or building robust native Android applications.
          </p>
          <p>
            I&apos;m currently taking on new opportunities and eager to contribute to projects that push the boundaries of what&apos;s possible on the web and mobile.
          </p>
        </div>
        <div className="about-photo reveal">
          <div className="photo-frame">
            <div className="photo-initials">
              <Image
                src="/profile.jpeg"
                alt="Sohaib"
                width={500}
                height={625}
                priority
              />
            </div>
          </div>
          <div className="photo-corner tl"></div>
          <div className="photo-corner br"></div>
        </div>
      </div>
    </div>
  );
}
