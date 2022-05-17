import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import { db } from "../../firebase";
import "./vid.css";

// import { useUserAuth } from '../context/UserAuthContext'
//cp
import { collection, getDocs } from "firebase/firestore";
//cp

import ReactPlayer from 'react-player/lazy'

function Videos() {
   
    const [data, setData] = useState([]);

// console.log("hii")
    useEffect(() => {
        const getData = async () => {

            const querySnapshot = await getDocs(collection(db, "users"));
            console.log( (querySnapshot));
            querySnapshot.forEach(doc => {
                let data = doc.data();
                setData((prevState) => {
                    return [...prevState, data]
                });
            })
        }

        getData();

        return () => {
            setData([]);

        }
    }, [])

    return (
        <div>
            <Navbar />
            <h1>Videos</h1>

            <div className='grid'>
                {data.map(function (i) {
                    return (
                        <div key={i} className='vid'>
                            <ReactPlayer width="360px" controls url={i.link} /><br />
                            <h1>Title : {i.title}</h1>
                            <h2>Course : {i.course}</h2>
                            <h2>Professor : {i.professor}</h2><br />

                        </div>
                    )
                })
                }


            </div>
        </div>
    )
}

export default Videos