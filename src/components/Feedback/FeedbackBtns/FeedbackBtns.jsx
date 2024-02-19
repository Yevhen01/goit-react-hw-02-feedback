import { Btn, BtnWrapper } from './FeedbackBtns.styled';

export const FeedbackBtns = ({ onLeaveFeedback }) => {
  const feedbackBtns = ['good', 'neutral', 'bad'];

  return (
    <BtnWrapper>
      {feedbackBtns.map(btn => (
        <Btn key={btn} type="button" name={btn} onClick={onLeaveFeedback}>
          {btn}
        </Btn>
      ))}
    </BtnWrapper>
  );
};
