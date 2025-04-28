import Input from './Input'
import Button from './Button'
import Textarea from './Textarea'
import { useState } from 'react'
import { createPost } from '../lib/api'

export default function PostForm({ getPosts }: { getPosts: () => void }) {
  const [data, setData] = useState({
    title: '',
    content: ''
  })

  const handleSubmit = async () => {
    const username = localStorage.getItem('username');
    const postData = {
      ...data,
      username: username,
    }
    await createPost(postData)
    getPosts()

    setData({
      title: '',
      content: ''
    })
  }

  return (
    <section className="flex flex-col gap-6 p-6 rounded-2xl border border-gray-primary">
      <h2 className='text-lg lg:text-[22px] font-bold'>What’s on your mind?</h2>
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
      <article className='flex justify-end'>
        <Button
          label='Create'
          onClick={() => handleSubmit()}
          disabled={!data.content || !data.title}
        />
      </article>
    </section>
  )
}
