import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { convertTextToMorseCode } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const App = () => {
  const [message, setMessage] = useState('');
  const morseCode = convertTextToMorseCode(message)

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-8">
      <div className="mx-auto max-w-3xl">
        <div className="grid w-full gap-2">
          <Textarea
            placeholder="Type your message here."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <Button>Save message</Button>
        </div>

        <Card className='mt-4'>
          <CardHeader>
            <CardTitle>Output</CardTitle>
            <CardDescription>Live translations</CardDescription>
          </CardHeader>
          <CardContent>
            {morseCode ?? 'No message'}
          </CardContent>
          <CardFooter>
            <Button onClick={() => navigator.clipboard.writeText(morseCode)}>Copy to Clipboard</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default App;
