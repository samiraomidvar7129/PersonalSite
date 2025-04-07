import ScrollingText from '../scrollingText';

const SkillsText = () => {
  const text = 'JavaScript * TypeScript * Next.js * React.js * Redux.js * REST APIs * PWA * Git/GitHub * Responsive Design * Figma * Tailwind * Bootstrap * SASS/SCSS * Webpack * Express';
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <ScrollingText text={text} />
    </div>
  );
};
export default SkillsText;