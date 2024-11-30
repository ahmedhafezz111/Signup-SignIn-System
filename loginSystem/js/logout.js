function logOut(){
    sessionStorage.clear(loggedInUser)
    window.location.reload()
}