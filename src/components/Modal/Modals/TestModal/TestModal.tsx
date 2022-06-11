import Text from 'components/Text/Text';
import './TestModal.scss';

const TestModal = () => {
  return (
    <div className="test-modal" data-testid="test-modal">
      <Text tag="span">Test</Text>
    </div>
  );
};

export default TestModal;
