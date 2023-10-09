import React from 'react';
import storyData from '../../data/storyData';
import { Thing } from '../models/thing';

interface Props {
  inputs: Thing[];
}

export default function WriteStory({ inputs }: Props) {
  const template: string = storyData[101].content;

  const replacedTemplate = replaceThings(template, inputs);

  return (
    <div>
      <p>{replacedTemplate}</p>
    </div>
  );
}

function replaceThings(template: string, inputs: Thing[]): string {
  let replacedTemplate = template;

  inputs.forEach(input => {
    const placeholder = new RegExp(`\\$\\{${input.identifier}\\}`, 'g');
    replacedTemplate = replacedTemplate.replace(placeholder, input.input);
  });

  return replacedTemplate;
}