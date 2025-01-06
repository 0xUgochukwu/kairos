"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function FeedbackForm() {
  const [feedback, setFeedback] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the feedback to your backend
    console.log("Feedback submitted:", feedback)
    setFeedback('')
    alert("Thank you for your feedback!")
  }

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor="feedback">How can we improve your study plan?</Label>
      <Textarea
        id="feedback"
        placeholder="Your feedback here..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        className="mt-2 mb-4"
      />
      <Button type="submit">Submit Feedback</Button>
    </form>
  )
}

