import ScrollingText from '../scrollingText';

const SkillsText = () => {
  const text = 'JavaScript * TypeScript *  Next.js * React.js * Redux.js * REST APIs * PWA * Git/GitHub * Responsive Design * Figma * Tailwind * Bootstrap * SASS/SCSS * Webpack * Exprss ';

  return (
    <div className="w-full flex flex-col items-center justify-center p-4">
      <ScrollingText text={text} />
    </div>
  );
};

export default SkillsText;
