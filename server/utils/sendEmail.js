
import nodemailer from "nodemailer"


const sendEmail = async (to,Subject,text)=> {
    try{

        const transporter = nodemailer.createTransport({
            service:"Gmail",
            auth:{
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,

            }
        });
        const mailoption={
            from: process.env.EMAIL_USER,
            to,
            Subject,
            text
        };

        await transporter.sendMail(mailoption);

    }catch(error){
        console.error("Error Sending email",error)

    }

}


export default sendEmail