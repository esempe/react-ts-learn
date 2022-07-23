import React from 'react';

import s from './UserCard.module.css'
import {UserType} from "../../../redux/usersReducer";
import userWithoutAva from "../../../assets/images/userWithoutAva.png"
type UserCardDispatchPropsType ={
    follow:(userID:number)=> void;
    unfollow:(userID:number)=> void;
}
type UserCardPropsType = UserType & UserCardDispatchPropsType


export const UserCard: React.FC<UserCardPropsType> = (props) => {
    const {id, photos, followed, name, status,  follow, unfollow} = props;
    //const {country, city} = location
    const onFollowClickHandler = () => {
        console.log(15)
        follow(id)
    }


    return (
        <div className={s.userWrapper}>
            <div className={s.leftSide}>
                <div className={s.avatar}><img src={photos.small ? photos.small : userWithoutAva}/></div>
                {followed
                    ?
                    <button onClick={onFollowClickHandler}>Follow</button>
                    :
                    <button onClick={()=>unfollow(id)}>Unfollow</button>}
            </div>
            <div className={s.rightSide}>
                <div className={s.fullNameStatus}>
                    <div className={s.fullName}>{name}</div>
                    <div className={s.status}>{status}</div>
                </div>
                <div className={s.location}>
                    <div className={s.country}>{"country"},</div>
                    <div className={s.city}>{"city"}</div>
                </div>
            </div>
        </div>

    );
};

