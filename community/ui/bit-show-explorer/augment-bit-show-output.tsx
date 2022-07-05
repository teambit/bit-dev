/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { ReactElement, useState } from 'react';
import parse from 'html-react-parser';
import Modal from 'react-modal';
import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import styles from './styles.module.scss';
import './modal-style.scss';

const overlayStyle = {
  overlay: {
    position: 'fixed',
    zIndex: '10000',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // backgroundColor: 'rgba(255, 255, 255, 0.75)',
    backgroundColor: 'none',
  },
};

const getSectionIndices = (bitShowOutput: string) => {
  const endOfSectionIndices: number[] = [];

  const getNextEndOfSection = (charIndex) => {
    const index = bitShowOutput.indexOf('┤', charIndex);
    if (index > 0) {
      endOfSectionIndices.push(index);
      getNextEndOfSection(index + 1);
    }
  };

  getNextEndOfSection(0);
  return endOfSectionIndices;
};

export const augmentBitShowOutput = (bitShowOutput: string) => {
  const rawBitShowOutput = String.raw({ raw: bitShowOutput });
  const htmlBitShowOutput = rawBitShowOutput.replace(/\n/g, '<br />');
  const endOfSectionIndices = getSectionIndices(htmlBitShowOutput);
  const bitShowSections = endOfSectionIndices.map((val, index) => {
    const section = `${htmlBitShowOutput.substring(val + 1, endOfSectionIndices[index + 1])}`;
    return section;
  });

  bitShowSections.unshift(`${htmlBitShowOutput.substring(0, endOfSectionIndices[0])}`);

  const Composition = ({ descriptions }: { descriptions: ReactElement[] }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
      <div>
        {' '}
        {bitShowSections.map((section, index) => (
          <span
            key={index.toString()}
            className={styles.section}
            onMouseOver={() => setActiveIndex(index)}
            onClick={() => setIsOpen(true)}
            data-section={index.toString()}
          >
            {parse(`${section}${index === bitShowSections.length - 1 ? '' : '┤'}`)}
          </span>
        ))}
        <Modal
          isOpen={modalIsOpen}
          shouldCloseOnOverlayClick
          shouldCloseOnEsc
          // onAfterOpen={afterOpenModal}
          onRequestClose={() => setIsOpen(false)}
          // style={customStyles}
          parentSelector={() => document.getElementById('root')}
          ariaHideApp={false}
          // appElement={() => document.getElementById(parentElement)}
          className="Modal"
          style={overlayStyle}
        >
          <ThemeCompositions style={{ color: 'white' }}>{descriptions[activeIndex]}</ThemeCompositions>
        </Modal>
      </div>
    );
  };

  return Composition;
};
