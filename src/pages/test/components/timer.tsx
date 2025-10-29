import React, { useState, useEffect, ReactElement } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { CompleteStoreModel } from '@/models/storeModel';

function Timer() {
  // state to store time
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // state to check stopwatch running or not
  const startAndStop = () => {
    setIsRunning(!startTimer);
  };

  const allTypedText = useStoreState<CompleteStoreModel>(
    (store) => store.allTypedCharactersStore,
  );
  const startTimer = useStoreState<CompleteStoreModel>(
    (store) => store.startTimer,
  );
  const trainingIsDone = useStoreState<CompleteStoreModel>(
    (store) => store.trainingIsDone,
  );
  const textPromptUnFocused = useStoreState<CompleteStoreModel>(
    (store) => store.textPromptUnFocused,
  );
  const setTimerValue = useStoreActions<CompleteStoreModel>(
    (store) => store.setTimerValue,
  );
  const currentLineOfTrainingText = useStoreState<CompleteStoreModel>(
    (store) => store.currentLineOfTrainingText,
  );
  const currentSubindexInTrainingText = useStoreState<CompleteStoreModel>(
    (store) => store.currentSubindexInTrainingText,
  );

  const userIsTypingFirstChord =
    currentLineOfTrainingText === 0 && currentSubindexInTrainingText === 1;

  if (startTimer == true && allTypedText.length > 0) {
    () => setIsRunning(true);
  }

  useEffect(() => {
    let intervalId;

    if (startTimer && allTypedText.length >= 1) {
      //startAndStop.click();
      // setting time from 0 to 1 every 10 millisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    } else if (allTypedText.length == 0) {
      setTime(0);
    } else if (!startTimer && textPromptUnFocused && !userIsTypingFirstChord) {
      setTime(time);
    }

    return () => clearInterval(intervalId);
  }, [startTimer, time, allTypedText, userIsTypingFirstChord]);

  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  // Update timer value in store whenever time changes
  useEffect(() => {
    setTimerValue(
      hours +
        ':' +
        minutes.toString().padStart(2, '0') +
        ':' +
        seconds.toString().padStart(2, '0'),
    );
  }, [hours, minutes, seconds, setTimerValue]);

  // Method to start and stop timer

  return (
    <div className="rotate-180 text-l text-neutral-400 font-medium">
      <p className="stopwatch-time">
        {hours}:{minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
      </p>
      <div className="stopwatch-buttons" />
    </div>
  );
}

export default Timer;
