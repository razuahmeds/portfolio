export const projectsData = [
  {
    id: 1,
    title: "Drone",
    img: "",
    githubLink: "https://github.com/razuahmeds",
    websiteLink: "http//www.com/",
    images: [""],
    description:
      "As a junior web developer with a passion for creating engaging and userfriendly web experiences, I bring a strong foundation in JavaScript, React",
    technologies: ["jQuery", "Bootstrap", "Template", "Template"],
  },
];

export const getSignData = (id) => {
  const data = projectsData.find((item) => item.id === id);

  return data;
};
