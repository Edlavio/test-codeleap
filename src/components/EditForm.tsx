import Input from './Input'
import Button from './Button'
import Textarea from './Textarea'
import { useState } from 'react'
import { updatePost } from '../lib/api'
import { Post } from '../types'

export default function EditForm({
  getPosts,
  post,
  setOpen
}: {
  getPosts: () => void,
  post: Post,
  setOpen: () => void
}) {
  const [data, setData] = useState<{
    title: string
    content: string
  }>({
    title: post.title,
    content: post.content,
  })
  const handleSubmit = async () => {
    await updatePost(post.id, data)
    getPosts()

    setData({
      title: '',
      content: ''
    })
    setOpen()
  }

  return (
    <section className="flex flex-col gap-6">
      <Input
        name='title'
        placeholder='Hello world'
        label='Title'
        value={data.title}
        onChange={(e) => setData({ ...data, title: e.target.value })}
      />
      <Textarea
        name='content'
        placeholder='Content here'
        label='Content'
        rows={3}
        value={data.content}
        onChange={(e) => setData({ ...data, content: e.target.value })}
      />
      <div className="flex justify-end gap-4">
        <Button variant="outline" label="Cancel" onClick={() => setOpen()} />
        <Button variant="success" label="Save" onClick={() => handleSubmit()} />
      </div>
    </section>
  )
}
