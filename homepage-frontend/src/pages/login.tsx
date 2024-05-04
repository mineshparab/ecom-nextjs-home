import { useRouter } from 'next/router';
import { useState } from 'react';


export default function Login() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [error, setError] = useState(null);
    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        const email = (e.target as HTMLFormElement)["email"].value;
        try {
            await Promise.race([sendLoginEmail(email), timeout(5000)]);
        }catch(error) {
            console.error(error);
        }
            router.push('/verify-email')
        }
    
        return (
            <div>
              <h1>Log in here</h1>
        
              <form onSubmit={onSubmit}>
                <input name="email" placeholder="Your email address" />
                <button type="submit">Submit</button>
              </form>
              {error && <p>{error}</p>}
            </div>
          );
  }

  function timeout(ms: number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Timeout after " + ms + " ms"));
        }, ms);
    });
}

async function sendLoginEmail(email: string) {
    // Your code here
}