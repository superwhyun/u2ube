//Global

const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Videos
const VIDOES= "/videos";
const UPLOAD = "/upload"
const VIDEO_DETAIL = "/:id"
const EDIT_VIDEO = "/:id/edit"
const DELETE_VIDEO = "/:id/delete"


const routes = {
    home: HOME,
    users: USERS,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    videos: VIDOES,
    upload: UPLOAD,
    videoDetail: VIDEO_DETAIL,
    editVideo: EDIT_VIDEO,
    deleteVideo: DELETE_VIDEO

}

export default routes