import React from 'react';

import s from './UserCard.module.css'
import {UserType} from "../../../redux/usersReducer";
import {MapDispatchToPropsType} from "../UsersContainer";

type UserCardDispatchPropsType ={
    follow:(userID:number)=> void;
    unfollow:(userID:number)=> void;
}
type UserCardPropsType = UserType & UserCardDispatchPropsType


export const UserCard: React.FC<UserCardPropsType> = (props) => {
    const {userId, avatarURL, followed, fullName, status, location, follow, unfollow} = props;
    const {country, city} = location
    const onFollowClickHandler = () => {
        console.log(15)
        follow(userId)
    }
    //() => follow(userId)
    return (
        <div className={s.userWrapper}>
            <div className={s.leftSide}>
                <div className={s.avatar}><img src={avatarURL}/></div>
                {followed
                    ?
                    <button onClick={onFollowClickHandler}>Follow</button>
                    :
                    <button onClick={()=>unfollow(userId)}>Unfollow</button>}
            </div>
            <div className={s.rightSide}>
                <div className={s.fullNameStatus}>
                    <div className={s.fullName}>{fullName}</div>
                    <div className={s.status}>{status}</div>
                </div>
                <div className={s.location}>
                    <div className={s.country}>{country},</div>
                    <div className={s.city}>{city}</div>
                </div>
            </div>
        </div>

    );
};

