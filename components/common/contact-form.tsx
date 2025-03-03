
'use client'
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            if(res.status === 200) {
                setSuccess("Message sent successfully!")
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                })
            }         
        } catch (error: any) {
            const errorMessage = error.response?.data?.message || "Failed to send message. Please try again.";
            if (success !== "Message sent successfully!") setSuccess(errorMessage);
        }
        setLoading(false)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <Textarea name="message" placeholder="Your Message" onChange={(e) => setFormData({ ...formData, message: e.target.value })} value={formData.message} required />
            <Button type="submit" className="bg-navy-blue text-white hover:bg-navy-blue/90" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
            </Button>
            {success && <p className="text-sm text-green-700 mt-2">{success}</p>}

        </form>
    )
}

export default ContactForm