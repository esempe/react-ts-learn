import React from 'react';
import {MapDispatchToPropsType, MapStateToPropsType} from "./UsersContainer";
import {UserCard} from "./UserCard/UserCard";
import s from "./users.module.css"
import axios from "axios";


type UsersPropsType = MapDispatchToPropsType & MapStateToPropsType

export const Users: React.FC<UsersPropsType> = (props) => {

    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')

                .then(response => {
                    props.setUsers(response.data.items)
                    console.log(response.data.items)
                })
        }
    }

    const users = props.users.map(el =>
        <UserCard id={el.id} key={el.id}
                  photos={el.photos}
                  followed={el.followed}
                  name={el.name}
                  status={el.status}

                  follow={props.follow}
                  unfollow={props.unfollow}
        />
    )
    return (
        <div>
            <div className={s.title}>Users</div>
            <button onClick={getUsers}>Get</button>
            {users}
        </div>
    );
};

