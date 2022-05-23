import React from 'react';
import { QuickStart } from './quick-start';
import { ComponentID } from '@teambit/component-id';
import { SampleApp } from '@teambit/design.examples.sample-app';
import SecondComponentIntro from './second-component-intro.mdx';
import Ending from './ending.mdx';

const components = [
  {
    id: 'teambit.design/examples/sample-app',
    intro: (
      <div>
        <div>
          ********************************************************************************************************************************************************
        </div>
        Here is the place to explain why this component was chosen to be the
        first one you add, and what is the responsibility of this component.
        Keep it short and to the point!
        <div>
          ********************************************************************************************************************************************************
        </div>
      </div>
    ),
  },
  {
    id: 'teambit.design/ui/heading',
    intro: <SecondComponentIntro />,
  },
];

const intro = (
  <>
    <div>
      *******************************************************************************************************************************************
    </div>
    <p>
      You can add intro text here, as a string, or in a separate mdx file. If
      you don't add your own intro, there is a default intro for Bit
      quick-starts
    </p>
    <div>
      *******************************************************************************************************************************************
    </div>
  </>
);

const beforeThinkingText = (
  <>
    <div>
      *******************************************************************************************************************************************
    </div>
    <p>
      Here is another piece of customizable text that you can edit, to talk
      about the specific components you chose
    </p>
    <div>
      *******************************************************************************************************************************************
    </div>
  </>
);

export const BasicQuickStart = () => {
  const id = ComponentID.fromString('teambit.design/examples/sample-app');
  return (
    <QuickStart
      intro={intro}
      ending={<Ending />}
      beforeThinking={beforeThinkingText}
      name="name-of-your-quick-start"
      // id and main Component - The component you are teaching people to build. This will appear in the component showcase
      // at the top of the quick start, and this is usually also the first component in the
      // component-thinking-process (The breakdown of the components in the tutorial)
      id={id}
      mainComponent={<SampleApp />}
      // The components in the component breakdown at the end of the tutorial
      components={components}
    ></QuickStart>
  );
};
