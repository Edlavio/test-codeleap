import { useEffect, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Modal from "../components/Modal";
import { useNavigate } from "react-router";

export default function SignUp() {
  const [username, setUsername] = useState<string>('');
  const navigate = useNavigate();


  const handleSaveUsername = () => {
    if (username) {
      localStorage.setItem('username', username);
      navigate('/');
    }
  }


  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className='bg-white antialiased font-roboto flex flex-col max-w-[800px] mx-auto'>
      <Modal title="Welcome to CodeLeap network!" isOpen onClose={() => { }}>
        <div className="flex flex-col gap-6">
          <Input
            name="username"
            label="Please enter your username"
            placeholder="John Doe"
            className="border border-gray-300 rounded-lg p-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="flex justify-end">
            <Button label="Enter" className="uppercase" onClick={handleSaveUsername} disabled={!username} />
          </div>
        </div>
      </Modal>
    </div>
  )
}
