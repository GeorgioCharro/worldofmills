
import AnimationIcon from '../media/animation/AnimationAsset.svg';

function LoadingAnimation() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <img src={AnimationIcon} alt="Loading Animation" className="h-32 w-32 animate-spin" />
    </div>
  );
}

export default LoadingAnimation;

    