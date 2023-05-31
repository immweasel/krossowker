import React, {useState, useEffect} from "react";
import styles from './Profile.module.scss'
import {useParams} from "react-router-dom";
import axios from "axios";


function Profile() {
    const {userId} = useParams()
    const [user, setUser] = useState(null)

    useEffect(() => {
        const fetchUserData = async () => {
            axios.get(`http://localhost:3001/users/${userId}`)
                .then(res => {
                    setUser(res.data)
                })
                .catch(e => {
                    console.error('Error: ', e)
                })
        }

        fetchUserData()
    }, [userId])

    return (
        <div className={styles.profile}>
            <h1>Личный кабинет</h1>

            <div className={styles.profile__data_cantainer}>
                <p style={{
                    color: '#fff'
                }}>Имя: {user.name} </p>
                {/*<p style={{*/}
                {/*    color: '#fff'*/}
                {/*}}>Номер телефона: {user.phone_num} </p>*/}
                <p style={{
                    color: '#fff'
                }}>Почта: {user.email} </p>
            </div>
        </div>
    )
}

export default Profile;