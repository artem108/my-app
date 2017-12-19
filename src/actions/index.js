export function selectHome (state) {
    return {
      type: 'SELECTED_HOME',
      home: state
    }
}

export function selectMySkills(state) {
    return {
      type: 'SELECTED_SKILLS',
      skills: state
    }
}

export function selectAbouteMe(state) {
    return {
      type: 'SELECTED_ABOUTE',
      aboute: state
    }
}

export function loginUser(state) {
    return {
      type: 'LOGIN',
      login: state
    }
}
