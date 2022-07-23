import React from 'react';
import s from "./users.module.css";
import axios from "axios";
import {MapDispatchToPropsType, MapStateToPropsType} from "./UsersContainer";
import {UserCard} from "./UserCard/UserCard";

type UserPropsType = MapDispatchToPropsType & MapStateToPropsType

export class UsersC extends React.Component <UserPropsType> {


    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')

            .then(response => {
                this.props.setUsers(response.data.items)
                console.log(response.data.items)
            })
    }

    render() {
        console.log(this.props.users)
        return( <div>
            <div className={s.title}>Users</div>
            {this.props.users.map(el =>
                <UserCard id={el.id} key={el.id}
                          photos={el.photos}
                          followed={el.followed}
                          name={el.name}
                          status={el.status}

                          follow={this.props.follow}
                          unfollow={this.props.unfollow}
                />
            )}
        </div>)
    }
}