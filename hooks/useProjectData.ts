interface Project {
  name: string;
  id: string | number;
}

function useProjectData() {
  const response: Project[] = [
    { name: "Dior", id: 1 },
    { name: "Project Name FRANCHISE", id: 2 },
    { name: "Project Name Alaska", id: 3 },
    { name: "Project Name Simphone", id: 4 },
    { name: "Project Name Shops", id: 5 },
    // { name: "Project Name Donuts", id: 6 },
    // { name: "Project Name Bank", id: 7 },
    // { name: "Project Name Tour", id: 8 },
    // { name: "Project Name FREELANCE", id: 9 },
    // { name: "Project Name FUTURE", id: 10 },
    // { name: "Project Name FORECAST", id: 11 },
    // { name: "Project Name COTTAGE", id: 12 },
  ];

  return response;
}

export default useProjectData;
