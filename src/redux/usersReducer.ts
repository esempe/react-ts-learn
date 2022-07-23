const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

const initialState: UserStateType = {
    users: [] as Array<UserType>
}

export type UserLocationType = {
    country: string,
    city: string,
}
export type photoType ={
    small:string;
    large:string;
}

export type UserType = {
    id: number,
    photos: photoType,
    followed: boolean,
    name: string,
    status: string,
    //location: UserLocationType
}


export type UserStateType = {
    users: Array<UserType>
}


//export type UserStateType = typeof initialState
/*export type FollowACType = ReturnType<typeof followAC>
export type UnfollowACType = ReturnType<typeof unfollowAC>*/
type AllActionsType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

export const usersReducer = (state: UserStateType = initialState, action: AllActionsType): UserStateType => {
    switch (action.type) {

        case FOLLOW: {
            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed:!el.followed} : el)};
        }
        case UNFOLLOW: {

            return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed:!el.followed} : el)}
        }
        case SET_USERS: {
            console.log(action.users)
            return {...state, users: [...state.users, ...action.users]};
        }
        default:
            return state;
    }
}


export const followAC = (userID: number) => {
    return {
        type: FOLLOW,
        userID
    } as const;
}
export const unfollowAC = (userID: number) => {
    return {
        type: UNFOLLOW,
        userID
    } as const;
}
export const setUsersAC = (users: Array<UserType>) => {

    return {
        type: SET_USERS,
        users
    } as const;
}
