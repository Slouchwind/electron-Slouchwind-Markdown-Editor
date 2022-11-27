import React, { useState } from 'react';
import WuX from './wux-ui-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function MDInput() {
  const [state, setState] = useState({ input: '' });
  return (
    <WuX.Row size='sm' number='2'>
      <WuX.Col>
        <WuX.Textarea
          style={{ width: '90%', height: 500, margin: 'auto' }}
          onInput={e => { setState({ input: e.target.value }); }}
        />
      </WuX.Col>
      <WuX.Col>
        <WuX.Card
          body={<WuX.Typo>
            <div>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {state.input}
              </ReactMarkdown>
            </div>
          </WuX.Typo>}
          style={{ width: '90%', height: 500, margin: 'auto' }}
        />
      </WuX.Col>
    </WuX.Row>
  );
}