const NewQuestionButton = ({ onClick }) => {
  return (
    <button
      className="mt-6 py-3 px-5 bg-green-500 hover:bg-green-600 text-white text-lg rounded-md"
      onClick={onClick}
    >
      New Question 🔄
    </button>
  );
};

export default NewQuestionButton;
