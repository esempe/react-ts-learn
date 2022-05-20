import React from 'react'
import style from './userProfileInfo.module.css'
const UserProfileInfo = () => {
    return (
        <div className={style.profileInfoWrapper}>
            <div className={style.avatar}>
                <img src="https://media-exp1.licdn.com/dms/image/C560BAQEs3VhnUd4Ddg/company-logo_200_200/0/1550100976131?e=2147483647&v=beta&t=MUQ5useg396CDs3cmIcqUFTrT96KN9MEUyE50y3KNwE" alt=""  />
            </div>
            <div className={style.userInfo}>
                <div className={style.userInfo_name}>Bebra 3000</div>
                <div className={style.userInfo_dob}>
                    Date of Birth: 2 jan 2011
                </div>
                <div className={style.userInfo_city}>
                    City: Sos City
                </div>
                <div className={style.userInfo_EDU}>
                    Education: 5th Bursa
                </div>
                <div className={style.userInfo_website}>
                    Web Site: vkobtakte.com
                </div>
            </div>
        </div>
    )
}

export default UserProfileInfo
