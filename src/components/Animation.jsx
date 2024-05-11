function LoadingAnimation() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="h-16 w-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default LoadingAnimation;
