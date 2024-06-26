export const storyData = {
  place: "Home",
  plot: [
    {
      index: "1",
      text: `(수정이로부터 연락이 왔다.)
        
이수정 : 내일 여행 갈 준비는 다 했어?`,
      img: "/img/house1-1.png",
      options: [
        {
          ans: "계획을 준비한다",
          score: 10,
          subtext: `주인공: “물론이지. 싹 다 계획해 뒀어!” ^ 이수정 : “오오… 웬일이야? 준비성 좋은데?” ^ 주인공 : “이 정도는 기본이지 ㅎㅎ.”`,
          img: "/img/house1-1.png",
        },
        {
          ans: "계획을 준비하지 않는다.",
          score: 0,
          subtext: `주인공 : “준비? 할 게 따로 있나? 그냥 가면 되지 ㅋㅋㅋ.” ^ 이수정 : “어.. 그렇긴 하지 ㅋㅋㅋㅋ.”`,
          img: "/img/house1-2.png",
        },
      ],
    },
    {
      index: "2",
      text: `
      이제 잘 시간이 되었습니다. 서서히 잠에 듭니다.
      (다음날 일어나기 위해서 알람을 맞추시겠습니까?)`,
      img: "/img/house2-1.png",
      options: [
        {
          ans: "Yes",
          score: 5,
          subtext: `주인공 : “시간 맞춰서 일어나야지!”`,
          img: "/img/house2-1.png",
        },
        {
          ans: "No",
          score: 0,
          subtext: `주인공: “일어날 수 있겠지? 난 나를 믿어!” ^ (일어나 보니 벌써 약속 시간은 지났고 왜 안 오냐는 수정이의 연락만 잔뜩 와 있다.) ^ 주인공: “안돼! 이러면 다시 시간을 돌릴 수 밖에 없네…” ^ (주인공의 주변이 빛에 휩싸이며 시간이 되돌아간다)`,
          error: "Game Over",
          img: "/img/house2-2.png",
        },
      ],
    },
    {
      index: "3",
      text: "주인공: “카페 그렇게 멀진 않은데 어떻게 가지?”",
      img: "/img/house3-1.png",
      options: [
        {
          ans: "자동차",
          score: 10,
          subtext: `주인공: “그래도 편하게 차를 타고 가야지.” ^ (둘이 차를 타고 이동한다.) ^ 이수정: “와 차 타고 가니까 진짜 편하다 ㅎㅎ.” ^ 주인공: “그렇지? 사실 가깝긴 한데 편하게 가는게 좋잖아.”`,
          img: "/img/house3-1.png",
        },
        {
          ans: "도보",
          score: 0,
          subtext: `주인공 : “그냥 걸어가도 되겠지.” ^ 이수정 : “으.. 벌써 힘들면 안되는데… 카페까진 아직이야?” ^ 주인공 : “조금만 더 가면 돼. 생각보다 머네….”`,
          img: "/img/house3-2.png",
        },
      ],
    },
  ],
};
