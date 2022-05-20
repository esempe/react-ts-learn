import React from 'react';
import style from "../SideBar.module.css";

const SideBarFriendsList = (props:any) => {

/*     let FriendsListElements = props.state.friendsList.map( (friend)=>
         <SideNavFriendItem friendsName={friend.friendsName} friendsAva={friend.friendsAva}/>
     )*/



    return (
        <div className={style.FriendsListWrapper}>
            <div className={style.tittle}>Friends</div>
            <div className={style.friendsItemWrapper}>
                {1}
            </div>
        </div>
    );
};

export default SideBarFriendsList;

const SideNavFriendItem = (props:any) => {
    return (
        <div className={style.friendsItem}>
            <div className={style.friendAva}>{1}</div>
            <div className={style.friendName}>{1}</div>
        </div>
    )

}