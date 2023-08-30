import React, { useRef } from "react";
const Contact = () => {
    return (
        <div
            name="contact"
            className="bg-[#0a192f]  w-full h-screen flex justify-center items-center p-4"
        >
            <form
                method="POST"
                action="https://getform.io/f/f2378dff-cde9-46ea-9006-75149e210b08"
                className="flex flex-col max-w-[600px] w-full"
            >
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-[#FE904C] text-gray-300">
                        Contact
                    </p>
                    <p className="text-gray-300 py-4">
                        Submit the from below or shoot me an email -&nbsp;
                        <a href="mailto:qasimroy5234@gmail.com">
                            qasimroy5234@gmail.com
                        </a>
                    </p>
                </div>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className=" p-3 bg-[#ccd6f6] rounded-lg"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="my-4 p-3 bg-[#ccd6f6] rounded-lg"
                    required
                />
                <textarea
                    name="message"
                    rows="10"
                    className="bg-[#ccd6f6] p-3 resize-none rounded-lg"
                    placeholder="Message"
                    required
                ></textarea>
                <button
                    className="text-white border-2 hover:border-[#FE904C] hover:bg-[#FE904C] px-4 py-3 my-8 mx-auto 
                flex items-center rounded-lg "
                >
                    Let's Collaborate
                </button>
            </form>
        </div>
    );
};

export default Contact;
