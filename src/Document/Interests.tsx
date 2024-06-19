import { Heading, Paragraph } from "./Typography";

const Interests: React.FC = () => {
  return (
    <>
      <Heading>Personal Interests</Heading>
      <Paragraph>
        I love trying to solve all sorts of problems, even if they're mundane,
        with code. This CV is written with React! Which helps me make better and
        more interesting formatting decisions and quicker updates.
      </Paragraph>
      <Paragraph>
        My love of code based solutions has led me down the home automation
        black hole. Planning, testing, and experimenting with small changes in
        how my day to day life is automated is endlessly rewarding! From
        automated trash day reminders, to motion sensitive lighting, and onward
        to automated blinds based on the position of the sun.
      </Paragraph>
      <Paragraph>
        Picked up an obsessive coffee hobby during 2020 lockdowns and since
        channelled that passion into planning a mobile app for myself and other
        enthusiasts to help track results, preferences, and other small things
        like bean stock.
      </Paragraph>
    </>
  );
};

export default Interests;
