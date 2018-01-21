import remoteActionFactory from '../actionFactory'

const collectionProjects = {
  getProjects: remoteActionFactory('GET_PROJECTS'),
  createProject: remoteActionFactory('CREATE_PROJECT'),
  deleteProject: remoteActionFactory('DELETE_PROJECT'),
  updateProject: remoteActionFactory('UPDATE_PROJECT'),
}

export default {
  ...collectionProjects,
}