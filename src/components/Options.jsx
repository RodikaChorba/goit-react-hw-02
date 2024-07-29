const Options = ({ onUpdate, totalFeedBack }) => {
  return (
    <div>
      <button
        onClick={() => {
          onUpdate("good");
        }}
      >
        Goog
      </button>
      <button
        onClick={() => {
          onUpdate("neutral");
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          onUpdate("bad");
        }}
      >
        Bad
      </button>

      {totalFeedBack ? (
        <button
          onClick={() => {
            onUpdate("reset");
          }}
        >
          Reset
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Options;
