import React, { useState, useRef, useEffect } from 'react'
import "./contact-us.css";
function Contact() {
    const nameRef = useRef(null);
    const [formData, setformData] = useState({
        name: '',
        email: '',
        mobile: '',
        comment: ''
    })
    const handleChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setformData({ ...formData, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }
    useEffect(() => {
        nameRef.current.focus();
    }, [])
    return (
        <div className="lg:container lg:mx-auto w-full lt-mt-body p-4">
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label htmlFor="name">Name: </label>
                    <input ref={nameRef} className="border border-gray-400 my-2 rounded-lg p-2" type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="name">Email: </label>
                    <input className="border border-gray-400 my-2 rounded-lg p-2" type="email" name="email" value={formData.email} onChange={handleChange} />

                </div>
                <div className="flex flex-col">
                    <label htmlFor="name">Phone: </label>
                    <input className="border border-gray-400 my-2 rounded-lg p-2" type="tel" name="mobile" value={formData.mobile} onChange={handleChange} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="name">Comment: </label>
                    <textarea className="border border-gray-400 my-2 rounded-lg p-2" type="text" name="comment" value={formData.comment} onChange={handleChange}></textarea>
                </div>
                <div className="w-full flex justify-end">
                    <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md" type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}

export default Contact
