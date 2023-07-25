import React from "react";
import { Layout } from "./App";

function Contact() {
    return (
        <>
         <Layout/>
            <h3><b>ผู้จัดทำ</b></h3>
            <div>
                <img src="profile.jpg" height={350} width={350}/>
                <h1>นายอิศวรักษ์ หนูทอง</h1>
                <p>นักศึกษาสาขาเทคโนโลยีสารสนเทศและการสื่อสาร<br>
                </br>คณะวิทยาศาสตร์ ผู้ชื่นชอบในการตัดต่อวิดีโอเป็นชีวิตประจำวัน งานการไม่ทำชวนแต่เพื่อนไปตีแบด</p>
            </div>
        </>
    );
}

export default Contact;