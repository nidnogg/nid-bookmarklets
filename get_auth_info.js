// Used for grabbing auth_info from localStorage to quickly copy onto local mock auth
javascript:(function(){var authInfo=localStorage.getItem('auth_info');if(authInfo){navigator.clipboard.writeText(authInfo);alert('auth_info copied to clipboard!');}else{alert('auth_info not found in localStorage!');}})();
