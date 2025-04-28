import { useNavigate } from "react-router";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { deletePost } from "../lib/api";
import { Post } from "../types/index";
import PostForm from "../components/PostForm";
import Modal from "../components/Modal";
import Button from "../components/Button";
import EditForm from "../components/EditForm";
import { usePosts } from "../hooks/usePosts";
import { useModal } from "../hooks/useModal";

export default function Home() {
  const { posts, loading, reload } = usePosts();
  const deleteModal = useModal();
  const editModal = useModal();

  const [current, setCurrent] = useState<number | Post>()

  const navigate = useNavigate();

  async function handleDeletePost() {
    await deletePost(current as number)
    reload()
    deleteModal.close()
  }

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (!storedUsername) {
      navigate('/signup');
    }
  }, [navigate]);

  return (
    <div className='bg-white antialiased font-roboto flex flex-col max-w-[800px] mx-auto'>
      <header className='bg-primary h-20 text-white w-full flex items-center px-[37px]'>
        <h1 className='text-[22px] font-bold'>CodeLeap Network</h1>
      </header>
      <main className='p-6 flex flex-col gap-6'>
        <PostForm getPosts={reload} />
        <section className="flex flex-col gap-6">
          {loading ? (
            <div className="flex justify-center items-center h-20">
              <p className="text-gray-primary text-lg">Loading...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="flex justify-center items-center h-20">
              <p className="text-gray-primary text-lg">No posts yet</p>
            </div>
          ) : posts.map((item) => (
            <Card
              data={item}
              key={item.id}
              onDelete={(id) => {
                setCurrent(id)
                deleteModal.open();
              }}
              onEdit={(data) => {
                setCurrent(data)
                editModal.open();
              }}
            />
          ))}
        </section>
        <Modal title="Edit item" isOpen={editModal.isOpen} onClose={() => editModal.close()}>
          <EditForm getPosts={reload} post={current as Post} setOpen={editModal.close} />
        </Modal>

        <Modal title="Are you sure you want to delete this item?" isOpen={deleteModal.isOpen} onClose={() => deleteModal.close()}>
          <div className="flex justify-end gap-4">
            <Button variant="outline" label="Cancel" onClick={() => deleteModal.close()} />
            <Button variant="destructive" label="Delete" onClick={() => handleDeletePost()} />
          </div>
        </Modal>
      </main>
    </div>
  )
}
