import delay from './delay'

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const projects = [
  {
    id: 'tic-apartment-app',
    title: 'The Irvine Company Apartment app',
    downloadLinks: [{
      name: 'ios',
      url: 'https://itunes.apple.com/us/app/irvine-company-apartments/id1076017699?mt=8'
    }, {
      name: 'android',
      url: 'https://play.google.com/store/apps/details?id=com.irvinecompany.icac.residentportal&hl=en_US'
    }],
    category: 'mobile'
  },
  {
    id: 'internet-delivered',
    title: 'Internet Delivered',
    downloadLinks: [{
      name: 'android',
      url: 'https://play.google.com/store/apps/details?id=com.internet.delivered'
    }],
    category: 'mobile'
  },
  {
    id: 'splice',
    title: 'Splice',
    downloadLinks: [{
      name: 'Desktop',
      url: 'https://splice.com'
    }],
    category: 'desktop'
  },
  {
    id: 'hunter-industries',
    title: 'Hunter Industries, IOT sprinkler solution',
    downloadLinks: [{
      name: 'Web',
      url: 'https://www.hunterindustries.com'
    }],
    category: 'mobile'
  },
  {
    id: 'illumina',
    title: 'illumina',
    downloadLinks: [{
      name: 'Web',
      url: 'https://www.illumina.com'
    }],
    category: 'AngularJS'
  },
  {
    id: 'fragmob',
    title: 'Fragmob',
    downloadLinks: [{
      name: 'Web',
      url: 'https://www.fragmob.com'
    }],
    category: 'AngularJS'
  },
  {
    id: 'magnaflow',
    title: 'Magnaflow',
    downloadLinks: [{
      name: 'Web',
      url: 'https://www.magnaflow.com'
    }],
    category: 'WebApi'
  }

]

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace)
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (project) => {
  return replaceAll(project.title, ' ', '-')
}

class ProjectApi {
  static getAllProjects() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], projects))
      }, delay)
    })
  }

  static saveProject(project) {
    project = Object.assign({}, project) // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minProjectTitleLength = 1
        if (project.title.length < minProjectTitleLength) {
          reject(`Title must be at least ${minProjectTitleLength} characters.`)
        }

        if (project.id) {
          const existingProjectIndex = projects.findIndex(a => a.id === project.id)
          projects.splice(existingProjectIndex, 1, project)
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new projects in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          project.id = generateId(project)
          project.watchHref = `http://www.pluralsight.com/projects/${project.id}`
          projects.push(project)
        }

        resolve(project)
      }, delay)
    })
  }

  static deleteProject(projectId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfProjectToDelete = projects.findIndex(project => {
          project.id === projectId
        })
        projects.splice(indexOfProjectToDelete, 1)
        resolve()
      }, delay)
    })
  }
}

export default ProjectApi
