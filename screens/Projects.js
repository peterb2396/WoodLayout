import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import Project from './Project';

const Projects = ({projects_}) => {
    
  const [projects, setProjects] = useState(projects_)
  const [projectRef, setProjectRef] = useState()

  // Get out of project view mode
  function back()
  {
    setProjectRef()
  }

  function del(proj)
  {
    setProjects(projects.filter(item => item !==proj)); // will trigger re render
    back()
  }

  function onNewProjectPress()
  {
    new_project = {title: `Project ${projects.length + 1}`, viewLayout: false, sorted: false, pieces: [], sheets: []}
    projects.push(new_project)
    setProjectRef(new_project)
  }
  
  if (!projectRef)
  {
    return (
        <View style={styles.container}>
        <ScrollView style={styles.projectList}>
            {projects.map((project, index) => (
            <TouchableOpacity
                style={styles.projectButton}
                key={index}
                onPress={() => setProjectRef(project)}
            >
                <Text>{project.title}</Text>
            </TouchableOpacity>
            ))}
        </ScrollView>
        <TouchableOpacity style={styles.newProjectButton} onPress={() => onNewProjectPress()}>
            <Text style={styles.buttonText}>New Project</Text>
        </TouchableOpacity>

        
        </View>
    );
  }
    

else
{
    return (<Project project = {projectRef} back = {back} del = {del}></Project>)
}
    
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  projectList: {
    flex: 1,
    padding: 10,
  },
  projectButton: {
    margin: 8,
    padding:10,
    borderRadius: 6,
    backgroundColor: 'cornflowerblue',
    
  },
  newProjectButton: {
    margin: 10,
    padding:10,
    borderRadius: 6,
    backgroundColor: 'cornflowerblue',
    alignItems: 'center',
  },
});

export default Projects;
