/**
 * @author Lalit Sanjay Wagh <lalit.sanjaywagh@gmail.com>
 * @description About section
 */


interface IAbout {
	id: string;
	content: string | JSX.Element;
}
const about = {
	id: 'about',
	content: [
		"Welcome! I'm thrilled to have you here. I'm a passionate developer with hands-on experience in live projects and professional expertise in leadership, technology, and management.",
		"Currently, I work as a Software & PLM Developer at CTGT Innovations, contributing to live projects using technologies like C++, Python, and Jenkins. My technical expertise also includes Java, Spring Boot, and React, with hands-on experience in both backend and frontend development. Previously, as an Entrepreneur in Residence, I honed my problem-solving, communication, and content management skills, preparing me to tackle diverse challenges in the tech world.",
		"I take pride in being concise and clear in my communication, enabling me to collaborate effectively with diverse teams.",
	],
};

export { about };
