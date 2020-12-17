1. Overview of Redux
2. Create the Store
3. Redux flow in our app
   \*. export auth from firebase.js
4. auth.action->login with google->dispatch action from login page ->log the response
5. create auth reducer {login_request,login_success,login_fail,load_profile}
   \*. Add in combine reducer
6. read data in login and redirect
7. log_out() action and reducer from sidebar
8. redirect to auth on log_out()
9. protect route ; shift router to index.js
   if (!loading && !accessToken) {
   history.push('/auth')
   }
10.   load_user() : access token using refresh token ; so execute this at comp did mount() in app.
