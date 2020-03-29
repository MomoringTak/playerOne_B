import ReadLogger from "../../models/ReadLogger";

const getBookWish = async (req, res) => {
  const {
    params: { id: bookId }
  } = req;

  try {
    const countBookStatus = await ReadLogger.find({ book: bookId });

    const readNum = countBookStatus.filter(item => item.doneReading === true);
    const wishNum = countBookStatus.filter(item => item.wish === true);

    const averageTime = {
      oneWeek: 0,
      twoWeek: 0,
      threeWeek: 0
    };

    const averageDifficulty = {
      beginner: 0,
      intermediate: 0,
      professional: 0
    };

    for (let item of readNum) {
      switch (item.time) {
        case 1:
          averageTime.oneWeek++;
          break;
        case 2:
          averageTime.twoWeek++;
          break;
        case 3:
          averageTime.threeWeek++;
          break;
        default:
          break;
      }
      switch (item.difficulty) {
        case 1:
          averageDifficulty.beginner++;
          break;
        case 2:
          averageDifficulty.intermediate++;
          break;
        case 3:
          averageDifficulty.professional++;
          break;
        default:
          break;
      }
    }

    const maxTime = Object.keys(averageTime).reduce((a, b) =>
      averageTime[a] > averageTime[b] ? a : b
    );

    const maxDifficulty = Object.keys(averageDifficulty).reduce((a, b) =>
      averageDifficulty[a] > averageDifficulty[b] ? a : b
    );

    res.status(200).json({
      success: true,
      msg: "성공",
      wishNumber: wishNum.length,
      readNumber: readNum.length,
      maxTime,
      maxDifficulty,
      averageTime,
      averageDifficulty
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, msg: err });
  }
};

export default getBookWish;
