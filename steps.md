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

---

# :)

set data in session storage and get from session storage
log out action creator

---

HOME VIDEOS : axios,infinite scroll,moment,numeral

1. get api key
2. put the api key in env
3. create axios request instance

   -- Redux:

4. create action types
5. create action creator // with comments
6. go to yt api playground & docs
7. complete action creator
8. create reducer
9. include the reducer in redux
10.   fire dispatch in home screen
11.   log data in redux store chrome extension
12.   render videos

      --- Implement pagination

13.   install infinite scroll
14.   next page function
      --- END

CATEGORIES & Skeleton

1. how things gonna work? we will basically search
   --- REDUX
   /\* action types and reducer already created for home videos
2. create a separate action
3. add extra state in the reducer -> category
4. include this in payload
5. modify next page function in <HomeScreen/>
   --- SKELTON
6. implement dummy
7. customize and create a video skelton
8. implement & BOOM !!!
   ------END--------

SEARCH----

1. in Search Screen; create horizontal video component ; design the component :(
   /\*\*\* for channel it should have a rounded border
   --- REDUX --
2. action types, action creator,reducer
3. in <Header/> :handle search & configure /search route to /search:key route
4. in search Screen get the data through URL and dispatch action
5. render data ; handle for channel(rounded border) and video card
   --- END---
