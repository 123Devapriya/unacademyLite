import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar'
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
// import { async } from '@firebase/util';
function Admin() {
  const [title, settitle] = useState("");
  const [course, setcourse] = useState("");
  const [link, setlink] = useState("");
  const [professor, setprofessor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    //cp
    try {
        const docRef = await addDoc(collection(db, "users"), {
          title: title,
          course: course,
          link: link,
          professor: professor
        });

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    //cp


  //   try {
  //     const docRef = await addDoc(collection(db, "users"), {
  //      title: title,
  //       link: "Lovelace",
  //       born: 1815
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  }






  return (
    <div>
      <Navbar />
      <h1>Admin Page</h1>

      <form onSubmit={handleSubmit} className='m-5'>
        <div class="col m-5 p-0">

          <br />
          <div class="row">
            <input type="text" class="form-control" onChange={(e) => { settitle(e.target.value) }} placeholder="Title" />
          </div>
          <div class="col p-2">
            <input type="text" class="form-control" onChange={(e) => { setlink(e.target.value) }} placeholder="Link" />
          </div>
          <div class="col p-2">
            <input type="text" class="form-control" onChange={(e) => { setprofessor(e.target.value) }} placeholder="Professor" />
          </div>
          <div class="col p-2">
            <input type="text" class="form-control" onChange={(e) => { setcourse(e.target.value) }} placeholder="Course" />
          </div>

          <div class="p-4 w-full">
            <button style={{ backgroundColor: 'blueviolet' }} class="input flex rounded text-white border-0 py-2 ">Submit</button>
          </div>
        </div>
      </form>


    </div>
  )
}

export default Admin