import { useState } from "react";

import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSidebar from "./components/ProjectSidebar.jsx";

function App() {
  // 객체를 상태로서 제어하되 이 객체는 selectedProject라는 속성을 가짐
  const [projectsState, setProjectsState] = useState({
    // undefined인 이유 : selectedProject속성을 사용해 나중에 프로젝트가 여러개 있을 때 그 중 선택된 프로젝트의 ID저장
    selectedProjectId: undefined, 
    projects: []
  });

  const handleStartAddProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null, // 새로운 프로젝트를 추가한다는 신호
      };
    });
  };

  let content;

  if(projectsState.selectedProjectId === null) {
    content = <NewProject />
  } else if(projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return(
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject}/>
      {content}
    </main>
  );
}

export default App
