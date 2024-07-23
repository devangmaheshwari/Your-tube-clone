import {combineReducers} from 'redux'
import authreducer from "./Auth"
import currentuserreducer from './currentuser'
import channelreducer from './Channel'
import videoreducer from './Video'
import commentreducer from './Comment'
import historyreducer from './History'
import likedvideoreducer from './LikedVideo'
import watchlaterreducer from './WatchLater'

export default combineReducers({
    authreducer,
    currentuserreducer,
    channelreducer,
    videoreducer,
    commentreducer,
    historyreducer,
    likedvideoreducer,
    watchlaterreducer
});