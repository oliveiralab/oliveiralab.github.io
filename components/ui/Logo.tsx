import React from 'react';
import { PERSONAL_NAME } from '../../constants';
import { teamMembers } from '../../data/teamData'; // To get the image URL

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => { // Default to square for profile pic
  const principalInvestigator = teamMembers.find(member => member.id === '1');
  const logoImageUrl = principalInvestigator?.imageUrl || "https://avatars.githubusercontent.com/u/43322380?s=400&u=bc4dab842aad06bb5945cc6309e03fbedbc3f51b&v=4"; // Fallback

  return (
    <div className={`${className} rounded-full overflow-hidden border-2 border-primary dark:border-primary-text-dark shadow-md`}>
      <img
        src={logoImageUrl}
        alt={`${PERSONAL_NAME} Logo`}
        className="block w-full h-full object-cover"
      />
    </div>
  );
};

export default Logo;