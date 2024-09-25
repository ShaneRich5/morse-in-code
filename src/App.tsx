import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { convertTextToMorseCode } from './lib/utils';

const App = () => {
  const [message, setMessage] = useState('');

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-8">
      <div className="mx-auto max-w-3xl">
        <div className="grid w-full gap-2">
          <Textarea
            placeholder="Type your message here."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <Button>Send message</Button>
        </div>
        <div className='mt-4'>Output: {convertTextToMorseCode(message)}</div>
      </div>
    </div>
  );
};

export default App;
