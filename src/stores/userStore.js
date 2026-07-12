import { reactive } from 'vue';

const userState = reactive({
  user: null
});

function setUser(user) {
  userState.user = user;
  if (user) {
    localStorage.setItem('user', JSON.stringify(user));
  } else {
    localStorage.removeItem('user');
  }
}

function loadUserFromStorage() {
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    try {
      userState.user = JSON.parse(storedUser);
    } catch (e) {
      console.error('Failed to parse user from localStorage', e);
      localStorage.removeItem('user');
      userState.user = null;
    }
  }
}

loadUserFromStorage();

export default {
  userState,
  setUser
};
