import axios from "axios";
import { NextPage } from "next";
import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import useInput from "../hooks/useInput";

const ContactPage: NextPage = () => {
  const nameInput = useInput();
  const emailInput = useInput();
  const messageInput = useInput();
  const [responseMessage, setResponseMessage] = useState("");
  const [isMailSending, setIsMailSending] = useState(false);
  const handleSendMail = async () => {
    if (
      messageInput.value == "" ||
      nameInput.value == "" ||
      emailInput.value == ""
    ) {
      setResponseMessage("Please fill up all fields");
      return;
    }
    setIsMailSending(true);
    const data = {
      name: nameInput.value,
      email: emailInput.value,
      msg: messageInput.value,
    };

    try {
      const { data: response } = await axios.post(`/api/email`, data);
      // console.log(response);
      setResponseMessage(
        response.msg === "sent" ? "Message Sent" : "An unknown error occured"
      );
    } catch (error) {
      console.log(error);
      setResponseMessage("Server Error");
    }
    setIsMailSending(false);
  };
  return (
    <div className="w-full">
      <h1 className="text-6xl text-lightPrimary dark:text-darkPrimary font-bold">
        Let{"'"}s talk
      </h1>
      <h2 className="my-4">Have any questions? Feel free to ask.</h2>
      <div>
        <div className="flex flex-col gap-2 my-3">
          <label className="text-lightPrimary dark:text-darkPrimary">
            Full Name
          </label>
          <input
            className="p-2 focus:outline-none dark:bg-darkBg border-2 border-darkSecondary"
            placeholder="John Doe"
            type="text"
            name="Name"
            {...nameInput}
          />
        </div>
        <div className="flex flex-col gap-2 my-3">
          <label className="text-lightPrimary dark:text-darkPrimary">
            Email
          </label>
          <input
            className="p-2 focus:outline-none dark:bg-darkBg border-2 border-darkSecondary"
            placeholder="john@appleseeder.com"
            type="email"
            name="Email"
            {...emailInput}
          />
        </div>
        <div className="flex flex-col gap-2 my-3">
          <label className="text-lightPrimary dark:text-darkPrimary">
            Message
          </label>
          <textarea
            className="p-2 focus:outline-none dark:bg-darkBg border-2 border-darkSecondary"
            placeholder="It's good to face your fears. I was scared of intruders till I had one of those in my room, and then I realized, you know, if they're gonna kill me, they're gonna kill me. 'Cause he kept... whispering that."
            name="Message"
            {...messageInput}
          ></textarea>
          <button
            onClick={handleSendMail}
            disabled={isMailSending}
            className="border-2 my-3 text-lightPrimary dark:text-darkPrimary dark:border-darkPrimary border-lightPrimary p-2 w-40 disabled:cursor-not-allowed"
          >
            {isMailSending ? "Sending..." : "Send"}
          </button>
          {responseMessage !== "" && (
            <div className="flex text-xl justify-center gap-4 items-center">
              <span>{responseMessage}</span>
              <FaWindowClose
                className="cursor-pointer"
                onClick={() => setResponseMessage("")}
              />
            </div>
          )}
          <div className="text-sm text-darkSecondary">
            For curious nerds: Yes, this form actually works. So stop sending me
            test emails.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
