import ReadLogger from "../../models/ReadLogger";

const getBookWish = async (req, res) => {
  const {
    params: { id: bookId }
  } = req;

  try {
    const countBookStatus = await ReadLogger.find({ book: bookId });

    const readNum = countBookStatus.filter(item => item.doneReading === true);
    const wishNum = countBookStatus.filter(item => item.wish === true);

    //readNum은 읽은 책의 rewalooger를 filltering 함
    //해당 readnum에서 time 은 각 1 , 2, 3 으로 구분됨. ?
    //logger가 재성성되는경우가 졸많음. 확인해야됨.
    // 1, 2, 3 을 각자 몇 개 씩 있는지 확인해야됨.
    // 제일 많은 시간을 평균시간으로 정함

    const averageTime = {
      oneWeek: 0,
      twoWeek: 0,
      threeWeek: 0
    };

    const averageDiffculty = {
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
      switch (item.diffculty) {
        case 1:
          averageDiffculty.beginner++;
          break;
        case 2:
          averageDiffculty.intermediate++;
          break;
        case 3:
          averageDiffculty.professional++;
          break;
        default:
          break;
      }
    }

    const maxTime = Object.keys(averageTime).reduce((a, b) =>
      averageTime[a] > averageTime[b] ? a : b
    );

    const maxDifficulty = Object.keys(averageDiffculty).reduce((a, b) =>
      averageDiffculty[a] > averageDiffculty[b] ? a : b
    );

    res.status(200).json({
      success: true,
      msg: "성공",
      wishNumber: wishNum.length,
      readNumber: readNum.length,
      maxTime,
      maxDifficulty
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, msg: err });
  }
};

export default getBookWish;
