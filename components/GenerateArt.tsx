import { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'

import { Button, Text, LoadingDots } from '@vercel/examples-ui'
// import Moralis from 'moralis'

export default function GenerateArt() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState("");

  const generateArt =  async () => {
    alert("GenerateArt called!")
    setLoading(true);

    const response = await fetch(`/api/diffusion?prompt=${prompt}`, {
      method: "POST"
    });

    const data = await response.json();
    setLoading(false);
    setImage(data.modelOutputs[0].image_base64);
  }

  return (
    <>
      <Text variant="h2" className="mt-2">Enter your prompt and click the generate button</Text>
      <input name="prompt" id="prompt" required onChange = {e => setPrompt(e.target.value)} className="bg-black text-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      <Button variant="primary" onClick={generateArt}>Generate</Button>

      {image && (
        <p>Teste</p>
      )}
      
    </>
  )
}
